"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createExtension;

var _util = require("../util");

// Copyright 2017-2019 @polkadot/trie-codec authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function createExtension(key) {
  return (0, _util.fuseNibbles)(key, false);
}