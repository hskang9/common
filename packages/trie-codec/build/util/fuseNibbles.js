"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fuseNibbles;

var _util = require("@polkadot/util");

var _constants = require("../constants");

var _fromNibbles = _interopRequireDefault(require("./fromNibbles"));

// Copyright 2017-2019 @polkadot/trie-codec authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const MAX_FUSE_LENGTH = 255 + 126;

function fuseNibbles(nibbles, isLeaf) {
  (0, _util.assert)(nibbles.length < MAX_FUSE_LENGTH, "Input to fuseNibbles too large, found ".concat(nibbles.length, " >= ").concat(MAX_FUSE_LENGTH));
  const [firstByteSmall, bigThreshold] = isLeaf ? [_constants.LEAF_NODE_OFFSET, _constants.LEAF_NODE_BIG - _constants.LEAF_NODE_OFFSET] : [_constants.EXTENSION_NODE_OFFSET, _constants.EXTENSION_NODE_BIG - _constants.EXTENSION_NODE_OFFSET];
  const result = [Uint8Array.from([firstByteSmall + Math.min(nibbles.length, bigThreshold)])];
  const oddFlag = nibbles.length % 2;

  if (nibbles.length >= bigThreshold) {
    result.push(Uint8Array.from([nibbles.length - bigThreshold]));
  }

  if (oddFlag === 1) {
    result.push(nibbles.subarray(0, 1));
  }

  result.push((0, _fromNibbles.default)(nibbles.subarray(oddFlag)));
  return (0, _util.u8aConcat)(...result);
}