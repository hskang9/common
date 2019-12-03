"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _util = require("@polkadot/util");

var _ = require(".");

var _getTests = _interopRequireDefault(require("../test/getTests"));

// Copyright 2017-2019 @polkadot/util-rlp authors & contributors
// This software may be modified and distributed under the terms
// of the MPL-2.0 license. See the LICENSE file for details.
const rlptests = (0, _getTests.default)('RLPTests/rlptest.json');
describe('decode', () => {
  it('returns empty list for undefined inputs', () => {
    expect((0, _.decode)()).toEqual(new Uint8Array([]));
  });
  it('returns empty list for empty inputs', () => {
    expect((0, _.decode)(new Uint8Array())).toEqual(new Uint8Array([]));
  });
  rlptests.forEach((_ref) => {
    let {
      name,
      output
    } = _ref;
    it("passes official ".concat(name), () => {
      expect((0, _util.u8aToHex)((0, _.encode)((0, _.decode)((0, _util.hexToU8a)(output))))).toEqual(output);
    });
  });
});