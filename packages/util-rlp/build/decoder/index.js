"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decoder;

var _util = require("@polkadot/util");

var _decode = _interopRequireDefault(require("./decode"));

// Copyright 2017-2019 @polkadot/util-rlp authors & contributors
// This software may be modified and distributed under the terms
// of the MPL-2.0 license. See the LICENSE file for details.

/**
 * @name decoder
 * @summary Decodes the input RLP.
 * @description
 * From an input, decode the RLP and return the result as a `Uint8Array` or `Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { decode } from '@polkadot/util-rlp';
 *
 * decode(new Uint8Array([0x83, 0x64, 0x6f, 0x67])); // => 'dog' as Uint8Array
 * ```
 */
function decoder(input) {
  try {
    if (!input || input.length === 0) {
      return new Uint8Array([]);
    }

    const {
      decoded,
      remainder
    } = (0, _decode.default)(input);
    (0, _util.assert)(remainder.length === 0, 'invalid remainder');
    return decoded;
  } catch (error) {
    console.error("RLP failed on input ".concat((0, _util.u8aToHex)(input)));
    throw error;
  }
}