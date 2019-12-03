"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toU8a = _interopRequireDefault(require("@polkadot/util/string/toU8a"));

var _fromNibbles = _interopRequireDefault(require("./fromNibbles"));

// Copyright 2017-2019 @polkadot/trie-codec authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('fromNibbles', () => {
  it('converts a single', () => {
    expect((0, _fromNibbles.default)(new Uint8Array([4, 1]))).toEqual((0, _toU8a.default)('A'));
  });
  it('converts an number of values', () => {
    expect((0, _fromNibbles.default)(new Uint8Array([3, 1, 2, 3, 4, 5]))).toEqual(new Uint8Array([0x31, 0x23, 0x45]));
  });
  it('converts an number of values (array)', () => {
    expect((0, _fromNibbles.default)(Uint8Array.from([3, 1, 2, 3, 4, 5, 7, 8]))).toEqual(new Uint8Array([0x31, 0x23, 0x45, 0x78]));
  });
});