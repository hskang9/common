"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildTrie;

var _util = require("@polkadot/trie-codec/util");

var _util2 = require("@polkadot/util");

var _defaults = require("./defaults");

// Copyright 2017-2019 @polkadot/trie-hash authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const EMPTY = new Uint8Array(); // FIXME This is problematic, the stream implementation is Substrate-only as is the branch here
// eslint-disable-next-line @typescript-eslint/no-explicit-any

function _buildTrie(input, cursor, codec, stream) {
  if (input.length === 0) {
    return stream.createEmpty();
  }

  const [firstKey, firstValue] = input[0];

  if (input.length === 1) {
    return stream.createLeaf(firstKey.subarray(cursor), firstValue);
  }

  const sharedNibbleCount = input.reduce((min, _ref, index) => {
    let [key] = _ref;
    return index === 0 ? key.length : Math.min(min, (0, _util.sharedPrefixLength)(key, firstKey));
  }, 0);

  if (sharedNibbleCount > cursor) {
    return (0, _util2.u8aConcat)(stream.createExtension(firstKey.subarray(cursor, sharedNibbleCount)), stream.createSubstream( // eslint-disable-next-line @typescript-eslint/no-use-before-define
    buildTrie(input, sharedNibbleCount, codec, stream)));
  }

  const value = firstKey.length === cursor ? firstValue : null;
  const sharedNibbleCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const start = value ? 1 : 0;
  let begin = start;

  for (let index = 0; index < 16; index++) {
    sharedNibbleCounts[index] = input.filter((_, index) => index >= begin).filter((_ref2) => {
      let [key] = _ref2;
      return key[cursor] === index;
    }).length;
    begin += sharedNibbleCounts[index];
  }

  begin = start;
  return (0, _util2.u8aConcat)(stream.createBranch(value, sharedNibbleCounts.map(value => value > 0)), ...sharedNibbleCounts.map(count => {
    let result = EMPTY;

    if (count > 0) {
      result = stream.createSubstream( // eslint-disable-next-line @typescript-eslint/no-use-before-define
      buildTrie(input.slice(begin, begin + count), cursor + 1, codec, stream));
      begin += count;
    }

    return result;
  }), stream.endBranch(value));
} // eslint-disable-next-line @typescript-eslint/no-explicit-any


function buildTrie(input) {
  let cursor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let codec = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _defaults.DEFAULT_CODEC;
  let stream = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _defaults.DEFAULT_STREAM;

  const trie = _buildTrie(input, cursor, codec, stream);

  return trie;
}