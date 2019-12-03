"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _trieHash = require("@polkadot/trie-hash");

// Copyright 2017-2019 @polkadot/trie-db authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function _default(codec) {
  const EMPTY_NODE = new Uint8Array();
  const EMPTY_U8A = (0, _trieHash.trieRoot)([], codec);
  const EMPTY_HASH = codec.hashing(EMPTY_U8A);
  const EMPTY_HASH_STR = EMPTY_HASH.toString();
  return {
    EMPTY_NODE,
    EMPTY_HASH,
    EMPTY_HASH_STR,
    EMPTY_U8A
  };
}