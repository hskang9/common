"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createValue;

var _util = require("@polkadot/util");

// Copyright 2017-2019 @polkadot/trie-codec authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const NO_VALUE = new Uint8Array();

function createValue(value) {
  return value ? (0, _util.compactAddLength)(value) : NO_VALUE;
}