"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decodeListShort;

// Copyright 2017-2019 @polkadot/util-rlp authors & contributors
// This software may be modified and distributed under the terms
// of the MPL-2.0 license. See the LICENSE file for details.
function decodeListShort(decode, input) {
  const decoded = [];
  const length = input[0] - 0xbf;
  let innerRemainder = input.slice(1, length);

  while (innerRemainder.length) {
    const d = decode(innerRemainder);
    decoded.push(d.decoded);
    innerRemainder = d.remainder;
  }

  return {
    decoded,
    remainder: input.slice(length)
  };
}