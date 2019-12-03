"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decode;

var _util = require("@polkadot/util");

var _NodeHeader = _interopRequireDefault(require("./NodeHeader"));

var _constants = require("./constants");

var _nibbles = require("./nibbles");

var _util2 = require("./util");

// Copyright 2017-2019 @polkadot/trie-codec authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const EMPTY_BRANCH = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
const l = (0, _util.logger)('trie/codec');
l.noop();

function _decodeBranch(header, input) {
  let offset = header.encodedLength;
  const branch = header.value;
  const bitmap = input[offset] + (input[offset + 1] << 8);
  let value;
  offset += 2;

  if (branch === true) {
    const [length, bytes] = (0, _util.compactStripLength)(input.subarray(offset));
    value = bytes;
    offset += length;
  } else {
    value = null;
  }

  return EMPTY_BRANCH.concat(value).map((value, index) => {
    let result = value;

    if (index < 16 && bitmap & _constants.BITMAP[index]) {
      const [length, bytes] = (0, _util.compactStripLength)(input.subarray(offset));
      result = bytes.length === 32 ? bytes // eslint-disable-next-line @typescript-eslint/no-use-before-define
      : decode(bytes);
      offset += length;
    }

    return result;
  });
}

function _decodeKv(header, input) {
  const offset = header.encodedLength;
  const nibbleCount = header.value;
  const nibbleLength = nibbleCount + 1 >> 1;
  const nibbleData = input.subarray(offset, offset + nibbleLength); // for odd, ignore the first nibble, data starts at offset 1

  const nibbles = (0, _util2.toNibbles)(nibbleData).subarray(nibbleCount % 2);
  const [, value] = (0, _util.compactStripLength)(input.subarray(offset + nibbleData.length));
  return [(0, _nibbles.encodeNibbles)(header.nodeType === _constants.NODE_TYPE_LEAF ? (0, _nibbles.addNibblesTerminator)(nibbles) : nibbles), value];
}

function decode(input) {
  const header = new _NodeHeader.default(input);
  const nodeType = header.nodeType;

  if (!input || nodeType === _constants.NODE_TYPE_NULL) {
    return input;
  } else if (nodeType === _constants.NODE_TYPE_BRANCH) {
    return _decodeBranch(header, input);
  } else if (nodeType === _constants.NODE_TYPE_EXT || nodeType === _constants.NODE_TYPE_LEAF) {
    return _decodeKv(header, input);
  }

  throw new Error('Unreachable');
} // export default function decode (input: null | Uint8Array): Uint8Array | null | Array<null | Uint8Array | Array<null | Uint8Array>> {
//   const decoded = _decode(input);
//   // l.debug(() => ['decode', { input, decoded }]);
//   return decoded;
// }