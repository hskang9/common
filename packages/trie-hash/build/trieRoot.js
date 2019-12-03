"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trieRoot;

var _defaults = require("./defaults");

var _unhashedTrie = _interopRequireDefault(require("./unhashedTrie"));

// Copyright 2017-2019 @polkadot/trie-hash authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @name trieRoot
 * @summary Creates a trie hash from the supplied pairs.
 * @description
 * From an `Array<{k: Uint8Array, v: Uint8Array}>` input, calculate the triehash and return the result as a `Uint8Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { stringToU8a } from '@polkadot/util';
 * import { trieRoot } from '@polkadot/trie-hash';
 *
 * trieRoot([{
 *   k: stringToU8a('A'),
 *   v: stringToU8a('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
 * }]); // => 0xd23786fb4a010da3ce639d66d5e904a11dbc02746d1ce25029e53290cabf28ab
 * ```
 */
function trieRoot(input) {
  let codec = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _defaults.DEFAULT_CODEC;
  return codec.hashing((0, _unhashedTrie.default)(input, codec));
}