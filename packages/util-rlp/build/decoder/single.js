"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decodeSingle;

// Copyright 2017-2019 @polkadot/util-rlp authors & contributors
// This software may be modified and distributed under the terms
// of the MPL-2.0 license. See the LICENSE file for details.
function decodeSingle(decode, input) {
  return {
    decoded: input.slice(0, 1),
    remainder: input.slice(1)
  };
}