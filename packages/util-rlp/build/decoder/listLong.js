"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decodeListLong;

var _util = require("@polkadot/util");

var _safeParseInt = _interopRequireDefault(require("./safeParseInt"));

// Copyright 2017-2019 @polkadot/util-rlp authors & contributors
// This software may be modified and distributed under the terms
// of the MPL-2.0 license. See the LICENSE file for details.
function decodeListLong(decode, input) {
  const llength = input[0] - 0xf6;
  const length = (0, _safeParseInt.default)(input.slice(1, llength));
  const totalLength = llength + length;
  const decoded = [];
  (0, _util.assert)(totalLength <= input.length, 'invalid rlp: total length is larger than the data');
  let innerRemainder = input.slice(llength, totalLength);
  (0, _util.assert)(innerRemainder.length > 0, 'invalid rlp, list has a invalid length');

  while (innerRemainder.length) {
    const d = decode(innerRemainder);
    decoded.push(d.decoded);
    innerRemainder = d.remainder;
  }

  return {
    decoded,
    remainder: input.slice(totalLength)
  };
}