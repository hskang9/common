"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _util = require("@polkadot/util");

var _unhashedTrie = _interopRequireDefault(require("./unhashedTrie"));

var _data = _interopRequireDefault(require("../test/data"));

// Copyright 2017-2019 @polkadot/trie-hash authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('unhashedTrie', () => {
  Object.values(_data.default).forEach((_ref) => {
    let {
      desc,
      input,
      output
    } = _ref;
    it("encodes ".concat(desc), () => {
      expect((0, _util.u8aToHex)((0, _unhashedTrie.default)(input))).toEqual((0, _util.u8aToHex)(output));
    });
  });
});