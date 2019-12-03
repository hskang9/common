"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _util = require("@polkadot/util");

var _data = _interopRequireDefault(require("../../trie-hash/test/data"));

var _ = _interopRequireDefault(require("."));

// Copyright 2017-2019 @polkadot/trie-db authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('substrate tests', () => {
  let trie;

  const checkRoot = (_ref) => {
    let {
      root
    } = _ref;
    expect((0, _util.u8aToHex)(trie.getRoot())).toEqual((0, _util.u8aToHex)(root));
  };

  const putValues = (_ref2) => {
    let {
      input
    } = _ref2;
    input.forEach((_ref3) => {
      let {
        k,
        v
      } = _ref3;
      trie.put(k, v);
    });
  };

  beforeEach(() => {
    trie = new _.default();
  });
  Object.values(_data.default).forEach(test => {
    it("hashes ".concat(test.desc), () => {
      putValues(test);
      checkRoot(test);
    });
  }); // When we have a specific test failing and we want to debug it
  // it('does extensionBranch', (): void => {
  //   putValues(testdata.extensionBranch);
  //   checkRoot(testdata.extensionBranch);
  // });
});