"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trieRootOrdered;

var _util = require("@polkadot/util");

var _defaults = require("./defaults");

var _trieRoot = _interopRequireDefault(require("./trieRoot"));

// Copyright 2017-2019 @polkadot/trie-hash authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @name trieRootOrdered
 * @summary Creates a trie hash from the supplied values.
 * @description
 * From an `Array<Uint8Array>` input, calculate the ordered triehash and return the result as a `Uint8Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { stringToU8a } from '@polkadot/util';
 * import { trieRootOrdered } from '@polkadot/trie-hash';
 *
 * trieRootOrdered([
 *   stringToU8a('doe'),
 *   stringToU8a('reindeer')
 * ]); // => 0xe766d5d51b89dc39d981b41bda63248d7abce4f0225eefd023792a540bcffee3
 * ```
 */
function trieRootOrdered(input) {
  let codec = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaults.DEFAULT_CODEC;
  return (0, _trieRoot.default)(input.map((v, index) => ({
    k: (0, _util.compactToU8a)(index),
    v
  })), codec);
}