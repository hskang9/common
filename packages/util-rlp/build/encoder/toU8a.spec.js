"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _bn = _interopRequireDefault(require("bn.js"));

var _toU8a = _interopRequireDefault(require("./toU8a"));

// Copyright 2017-2019 @polkadot/util-rlp authors & contributors
// This software may be modified and distributed under the terms
// of the MPL-2.0 license. See the LICENSE file for details.
describe('toU8a', () => {
  it('returns a Uint8Array input as-is', () => {
    expect((0, _toU8a.default)(new Uint8Array([1, 2, 3]))).toEqual(new Uint8Array([1, 2, 3]));
  });
  it('converts Buffers (uses as Uint8Array)', () => {
    expect((0, _toU8a.default)(Buffer.from([0x12, 0x34, 0x56]))).toEqual(new Uint8Array([0x12, 0x34, 0x56]));
  });
  it('returns undefined as empty', () => {
    expect((0, _toU8a.default)()).toEqual(new Uint8Array([]));
  });
  it('returns null as empty', () => {
    expect((0, _toU8a.default)(null)).toEqual(new Uint8Array([]));
  });
  it('converts hex strings', () => {
    expect((0, _toU8a.default)('0x123456')).toEqual(new Uint8Array([0x12, 0x34, 0x56]));
  });
  it('converts UTF-8 strings', () => {
    expect((0, _toU8a.default)('Привет, мир!')).toEqual(new Uint8Array([208, 159, 209, 128, 208, 184, 208, 178, 208, 181, 209, 130, 44, 32, 208, 188, 208, 184, 209, 128, 33]));
  });
  it('converts numbers', () => {
    expect((0, _toU8a.default)(0x123456)).toEqual(new Uint8Array([0x12, 0x34, 0x56]));
  });
  it('converts BN', () => {
    expect((0, _toU8a.default)(new _bn.default(0x123456))).toEqual(new Uint8Array([0x12, 0x34, 0x56]));
  });
  it('throws on unknown type', () => {
    expect(() => (0, _toU8a.default)(true)).toThrow(/invalid type/);
  });
});