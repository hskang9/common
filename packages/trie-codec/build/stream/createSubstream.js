"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSubstream;

var _hashing = _interopRequireDefault(require("../hashing"));

var _createValue = _interopRequireDefault(require("./createValue"));

// Copyright 2017-2019 @polkadot/trie-codec authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function createSubstream(value) {
  return (0, _createValue.default)(value.length < 32 ? value : (0, _hashing.default)(value));
}