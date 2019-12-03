"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _safeParseInt = _interopRequireDefault(require("./safeParseInt"));

// Copyright 2017-2019 @polkadot/util-rlp authors & contributors
// This software may be modified and distributed under the terms
// of the MPL-2.0 license. See the LICENSE file for details.
describe('safeParseInt', () => {
  it('does not allow 0 in first position', () => {
    expect(() => (0, _safeParseInt.default)(new Uint8Array([0]))).toThrow(/invalid rlp, extra zeros found/);
  });
  it('converts a value to the correct number', () => {
    expect((0, _safeParseInt.default)(new Uint8Array([0x12, 0x34, 0x56]))).toEqual(0x123456);
  });
});