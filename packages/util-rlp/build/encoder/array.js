"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = encodeArray;

var _util = require("@polkadot/util");

var _length = _interopRequireDefault(require("./length"));

// Copyright 2017-2019 @polkadot/util-rlp authors & contributors
// This software may be modified and distributed under the terms
// of the MPL-2.0 license. See the LICENSE file for details.
function encodeArray(encoder, input) {
  const encoded = (0, _util.u8aConcat)(...input.map(encoder));
  return (0, _util.u8aConcat)((0, _length.default)(encoded.length, 192), encoded);
}