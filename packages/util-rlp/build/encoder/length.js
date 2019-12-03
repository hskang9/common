"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = encodeLength;

var _util = require("@polkadot/util");

// Copyright 2017-2019 @polkadot/util-rlp authors & contributors
// This software may be modified and distributed under the terms
// of the MPL-2.0 license. See the LICENSE file for details.
function encodeLength(length, offset) {
  if (length < 56) {
    return new Uint8Array([length + offset]);
  }

  const hexLength = (0, _util.numberToHex)(length).slice(2);
  return (0, _util.hexToU8a)((0, _util.numberToHex)(offset + 55 + hexLength.length / 2) + hexLength);
}