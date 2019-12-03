"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toU8a = _interopRequireDefault(require("@polkadot/util/string/toU8a"));

var _toNibbles = _interopRequireDefault(require("./toNibbles"));

// Copyright 2017-2019 @polkadot/trie-codec authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('toNibbles', () => {
  it('converts an array', () => {
    expect((0, _toNibbles.default)(Uint8Array.from([0x31, 0x23, 0x45]))).toEqual(new Uint8Array([3, 1, 2, 3, 4, 5]));
  });
  it('converts a single', () => {
    expect((0, _toNibbles.default)((0, _toU8a.default)('A'))).toEqual(new Uint8Array([4, 1]));
  });
});