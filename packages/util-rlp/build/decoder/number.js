"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decodeNumber;

var _util = require("@polkadot/util");

var _safeParseInt = _interopRequireDefault(require("./safeParseInt"));

// Copyright 2017-2019 @polkadot/util-rlp authors & contributors
// This software may be modified and distributed under the terms
// of the MPL-2.0 license. See the LICENSE file for details.
function decodeNumber(decode, input) {
  const llength = input[0] - 0xb6;
  const length = (0, _safeParseInt.default)(input.slice(1, llength));
  const decoded = input.slice(llength, length + llength);
  (0, _util.assert)(decoded.length === length, "invalid rlp, expected length ".concat(length, ", found ").concat(decoded.length));
  return {
    decoded,
    remainder: input.slice(length + llength)
  };
}