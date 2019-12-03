"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = safeParseInt;

var _util = require("@polkadot/util");

// Copyright 2017-2019 @polkadot/util-rlp authors & contributors
// This software may be modified and distributed under the terms
// of the MPL-2.0 license. See the LICENSE file for details.
function safeParseInt(input) {
  (0, _util.assert)(input[0] > 0, 'invalid rlp, extra zeros found');
  return input.reduce((result, value) => result * 256 + value, 0);
}