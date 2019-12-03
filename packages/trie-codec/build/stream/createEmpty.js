"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createEmpty;

var _constants = require("../constants");

// Copyright 2017-2019 @polkadot/trie-codec authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function createEmpty() {
  return Uint8Array.from([_constants.EMPTY_TRIE]);
}