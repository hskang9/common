"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unhashedTrie;

var _util = require("@polkadot/trie-codec/util");

var _util2 = require("@polkadot/util");

var _buildTrie = _interopRequireDefault(require("./buildTrie"));

var _defaults = require("./defaults");

// Copyright 2017-2019 @polkadot/trie-hash authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function unhashedTrie(input) {
  let codec = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaults.DEFAULT_CODEC;
  const map = {};
  input.forEach(pair => {
    map[(0, _util2.u8aToHex)(pair.k)] = pair;
  });
  const pairs = Object.keys(map).sort().map(key => map[key]).map((_ref) => {
    let {
      k,
      v
    } = _ref;
    return [(0, _util.toNibbles)(k), v];
  });
  return (0, _buildTrie.default)(pairs, 0, codec);
}