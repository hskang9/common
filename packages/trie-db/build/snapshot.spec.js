"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _trieHash = require("@polkadot/trie-hash");

var _util = require("@polkadot/util");

var _ = _interopRequireDefault(require("."));

// Copyright 2017-2019 @polkadot/trie-db authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('snapshots', () => {
  const values = [{
    k: (0, _util.u8aToU8a)('test'),
    v: (0, _util.u8aToU8a)('one')
  }, {
    k: (0, _util.u8aToU8a)('one'),
    v: (0, _util.u8aToU8a)('testing')
  }, {
    k: (0, _util.u8aToU8a)('two'),
    v: (0, _util.u8aToU8a)('testing with a much longer value here')
  }, {
    k: (0, _util.u8aToU8a)('twzei'),
    v: (0, _util.u8aToU8a)('und Deutch')
  }, {
    k: (0, _util.u8aToU8a)('do'),
    v: (0, _util.u8aToU8a)('do it')
  }, {
    k: (0, _util.u8aToU8a)('dog'),
    v: (0, _util.u8aToU8a)('doggie')
  }, {
    k: (0, _util.u8aToU8a)('dogge'),
    v: (0, _util.u8aToU8a)('bigger dog')
  }, {
    k: (0, _util.u8aToU8a)('dodge'),
    v: (0, _util.u8aToU8a)('coin')
  }];
  let trie;
  let back;
  beforeEach(() => {
    trie = new _.default();
    back = new _.default();
  });
  it('creates a snapshot of the (relevant) trie data', () => {
    const root = (0, _trieHash.trieRoot)([values[0]]);
    trie.put(values[0].k, values[0].v);
    trie.put(values[0].k, (0, _util.u8aToU8a)('two'));
    trie.del(values[0].k);
    trie.put(values[0].k, values[0].v);
    trie.put((0, _util.u8aToU8a)('doge'), (0, _util.u8aToU8a)('coin'));
    trie.del((0, _util.u8aToU8a)('doge'));
    trie.snapshot(back, () => {});
    expect((0, _util.u8aToHex)(back.getRoot())).toEqual((0, _util.u8aToHex)(root));
    expect(back.get(values[0].k)).toEqual(values[0].v);
  });
  it('creates a snapshot of the (relevant) data', () => {
    const root = (0, _trieHash.trieRoot)(values);
    values.forEach((_ref) => {
      let {
        k,
        v
      } = _ref;
      trie.put(k, v);
    });
    trie.snapshot(back, () => {});
    expect((0, _util.u8aToHex)(back.getRoot())).toEqual((0, _util.u8aToHex)(root));
    values.forEach((_ref2) => {
      let {
        k,
        v
      } = _ref2;
      expect(back.get(k)).toEqual(v);
    });
  });
  it('retrieves entries, which can re-create', () => {
    const root = (0, _trieHash.trieRoot)(values);
    values.forEach((_ref3) => {
      let {
        k,
        v
      } = _ref3;
      trie.put(k, v);
    });
    const entries = trie.entries();
    entries.forEach((_ref4) => {
      let [key, encoded, children] = _ref4;
      back.db.put(key, encoded);
      console.log((0, _util.u8aToHex)(key), ...children.map(child => "\n\t".concat((0, _util.u8aToHex)(child))));
    });
    back.setRoot(root);
    values.forEach((_ref5) => {
      let {
        k,
        v
      } = _ref5;
      expect(back.get(k)).toEqual(v);
    });
  });
});