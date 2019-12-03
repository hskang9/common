"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = encode;

var _util = require("@polkadot/util");

var _NodeHeader = _interopRequireDefault(require("./NodeHeader"));

var _constants = require("./constants");

var _nibbles = require("./nibbles");

var _util2 = require("./util");

// Copyright 2017-2019 @polkadot/trie-codec authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const BRANCH_VALUE_INDEX = 16;
const EMPTY = new Uint8Array();
const l = (0, _util.logger)('trie/codec');
l.noop(); // in the case of odd nibbles, the first byte is encoded as a single
// byte from the nibble, with the remainder of the nibbles is converted
// as nomral nibble combined bytes

function encodeKey(input) {
  const nibbles = (0, _nibbles.extractKey)(input); // l.debug(() => ['encodeKey', { input, nibbles }]);

  return nibbles.length % 2 ? (0, _util.u8aConcat)(Uint8Array.from([nibbles[0]]), (0, _util2.fromNibbles)(nibbles.subarray(1))) : (0, _util2.fromNibbles)(nibbles);
}

function encodeValue(input) {
  if (!input) {
    return EMPTY;
  } // l.debug(() => ['encodeValue', { input, encoded }]);
  // eslint-disable-next-line @typescript-eslint/no-use-before-define


  return (0, _util.compactAddLength)(encode(input));
}

function _encodeBranch(header, input) {
  const values = [];
  let bitmap = 0;

  for (let index = 0; index < BRANCH_VALUE_INDEX; index++) {
    const value = input[index];

    if (value) {
      bitmap |= _constants.BITMAP[index];
      values.push(encodeValue(value));
    }
  }

  return (0, _util.u8aConcat)(header.toU8a(), new Uint8Array([bitmap & 0xff, bitmap >> 8]), encodeValue(input[BRANCH_VALUE_INDEX]), ...values);
}

function _encodeKv(header, input) {
  const [path, value] = input;
  return (0, _util.u8aConcat)(header.toU8a(), encodeKey(path), encodeValue(value));
}

function encode(input) {
  if ((0, _util.isU8a)(input)) {
    return input;
  }

  const header = new _NodeHeader.default(input);
  const nodeType = header.nodeType;

  if (!input || nodeType === _constants.NODE_TYPE_NULL) {
    return header.toU8a();
  } else if (nodeType === _constants.NODE_TYPE_BRANCH) {
    return _encodeBranch(header, input);
  } else if (nodeType === _constants.NODE_TYPE_EXT || nodeType === _constants.NODE_TYPE_LEAF) {
    return _encodeKv(header, input);
  }

  throw new Error('Unreachable');
} // export default function encode (input?: null | Uint8Array | Array<null | Uint8Array>): Uint8Array {
//   const encoded = _encode(input);
//   // l.debug(() => ['encode', { input, encoded }]);
//   return encoded;
// }