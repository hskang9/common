"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createLeaf;

var _util = require("@polkadot/util");

var _util2 = require("../util");

var _createValue = _interopRequireDefault(require("./createValue"));

// Copyright 2017-2019 @polkadot/trie-codec authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function createLeaf(key, value) {
  return (0, _util.u8aConcat)((0, _util2.fuseNibbles)(key, true), (0, _createValue.default)(value));
}