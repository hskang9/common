"use strict";

var _util = require("@polkadot/util");

var _ = require(".");

// Copyright 2017-2019 @polkadot/trie-hash authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('trieRootOrdered', () => {
  it('encodes values', () => {
    expect((0, _util.u8aToHex)((0, _.trieRootOrdered)([(0, _util.stringToU8a)('doe'), (0, _util.stringToU8a)('reindeer')]))).toEqual('0xb9b1bb07e481f0393e15f32f34abd665f7a698786a7ec9feb31b2e8927ad5f86');
  });
});