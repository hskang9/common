"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _length = _interopRequireDefault(require("./length"));

// Copyright 2017-2019 @polkadot/util-rlp authors & contributors
// This software may be modified and distributed under the terms
// of the MPL-2.0 license. See the LICENSE file for details.
describe('encodeLength', () => {
  it('returns offset + length where <= 55', () => {
    expect((0, _length.default)(5, 6)).toEqual(new Uint8Array([11]));
  });
  it('encodes > 55 length properly (short)', () => {
    expect((0, _length.default)(56, 6)).toEqual(new Uint8Array([62, 56]));
  });
  it('encodes > 55 length properly (long)', () => {
    expect((0, _length.default)(512, 6)).toEqual(new Uint8Array([63, 2, 0]));
  });
});