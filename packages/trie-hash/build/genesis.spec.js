"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chainspec = require("@polkadot/chainspec");

var _util = require("@polkadot/util");

var _trieRoot = _interopRequireDefault(require("./trieRoot"));

// Copyright 2017-2019 @polkadot/trie-hash authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('genesis roots', () => {
  [_chainspec.alexander, _chainspec.driedDanta].forEach((_ref) => {
    let {
      genesis: {
        raw
      },
      genesisRoot,
      name
    } = _ref;
    it("has the correct root for ".concat(name), () => {
      expect((0, _util.u8aToHex)((0, _trieRoot.default)(Object.keys(raw).map(key => ({
        k: (0, _util.hexToU8a)(key),
        v: (0, _util.hexToU8a)(raw[key])
      }))))).toEqual(genesisRoot);
    });
  });
});