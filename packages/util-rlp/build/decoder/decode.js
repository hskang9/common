"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decode;

var _util = require("@polkadot/util");

var _listLong = _interopRequireDefault(require("./listLong"));

var _listShort = _interopRequireDefault(require("./listShort"));

var _number = _interopRequireDefault(require("./number"));

var _single = _interopRequireDefault(require("./single"));

var _string = _interopRequireDefault(require("./string"));

// Copyright 2017-2019 @polkadot/util-rlp authors & contributors
// This software may be modified and distributed under the terms
// of the MPL-2.0 license. See the LICENSE file for details.
const decoders = [{
  max: 0x7f,
  fn: _single.default
}, {
  max: 0xb7,
  fn: _string.default
}, {
  max: 0xbf,
  fn: _number.default
}, {
  max: 0xf7,
  fn: _listShort.default
}, {
  max: 0xff,
  fn: _listLong.default
}];

function decode(input) {
  const decoder = decoders.find((_ref) => {
    let {
      max
    } = _ref;
    return input[0] <= max;
  });
  (0, _util.assert)(decoder, 'Unable to find decoder for input type');
  return decoder.fn(decode, input);
}