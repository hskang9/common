"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utilCrypto = require("@polkadot/util-crypto");

var _utilRlp = require("@polkadot/util-rlp");

// Copyright 2017-2019 @polkadot/trie-db authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const codec = {
  decode: _utilRlp.decode,
  encode: _utilRlp.encode,
  hashing: _utilCrypto.blake2AsU8a,
  type: 'Ethereum'
};
var _default = codec;
exports.default = _default;