"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = encoder;

var _array = _interopRequireDefault(require("./array"));

var _toU8a = _interopRequireDefault(require("./toU8a"));

var _u8a = _interopRequireDefault(require("./u8a"));

// Copyright 2017-2019 @polkadot/util-rlp authors & contributors
// This software may be modified and distributed under the terms
// of the MPL-2.0 license. See the LICENSE file for details.

/**
 * @name encoder
 * @summary Encodes the input value into RLP.
 * @description
 * From an input, calculate the RLP and return the result as a `Uint8Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { encode } from '@polkadot/util-rlp';
 *
 * encode('dog'); // => [0x83, 0x64, 0x6f, 0x67]
 * ```
 */
function encoder(input) {
  if (input instanceof Array) {
    return (0, _array.default)(encoder, input);
  }

  return (0, _u8a.default)(encoder, (0, _toU8a.default)(input));
}