"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toHex = _interopRequireDefault(require("@polkadot/util/u8a/toHex"));

var _toU8a = _interopRequireDefault(require("@polkadot/util/u8a/toU8a"));

var _ethereumCodec = _interopRequireDefault(require("./ethereumCodec"));

var _ = _interopRequireDefault(require("."));

// Copyright 2017-2019 @polkadot/trie-db authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
// FIXME These are not working, the trie-hash implementation is now substrate-specific
describe.skip('Ethereum', () => {
  const createTrie = () => new _.default(undefined, undefined, _ethereumCodec.default);

  describe('simple save and retrieve', () => {
    const trie = createTrie();
    it('starts with a valid root', () => {
      expect(trie.getRoot()).toEqual(new Uint8Array([86, 232, 31, 23, 27, 204, 85, 166, 255, 131, 69, 230, 146, 192, 248, 110, 91, 72, 224, 27, 153, 108, 173, 192, 1, 98, 47, 181, 227, 99, 180, 33]));
    });
    it('save a value', () => {
      trie.put((0, _toU8a.default)('test'), (0, _toU8a.default)('one'));
      expect(trie.getRoot()).toEqual(new Uint8Array([43, 119, 232, 84, 123, 197, 94, 42, 149, 34, 124, 147, 159, 159, 157, 103, 149, 45, 225, 233, 112, 160, 23, 224, 145, 11, 229, 16, 176, 144, 175, 243]));
    });
    it('should get a value', () => {
      expect(trie.get((0, _toU8a.default)('test'))).toEqual((0, _toU8a.default)('one'));
    });
    it('should update a value', () => {
      trie.put((0, _toU8a.default)('test'), (0, _toU8a.default)('two'));
      expect(trie.get((0, _toU8a.default)('test'))).toEqual((0, _toU8a.default)('two'));
      expect(trie.getRoot()).toEqual(new Uint8Array([127, 237, 74, 184, 190, 46, 103, 129, 65, 141, 13, 96, 61, 232, 146, 13, 56, 32, 59, 29, 246, 58, 175, 140, 72, 182, 196, 103, 230, 245, 229, 148]));
    });
    it('should delete a value', () => {
      trie.del((0, _toU8a.default)('test'));
      expect(trie.get((0, _toU8a.default)('test'))).toEqual(null);
      expect(trie.getRoot()).toEqual(new Uint8Array([86, 232, 31, 23, 27, 204, 85, 166, 255, 131, 69, 230, 146, 192, 248, 110, 91, 72, 224, 27, 153, 108, 173, 192, 1, 98, 47, 181, 227, 99, 180, 33]));
    });
    it('should recreate a value', () => {
      trie.put((0, _toU8a.default)('test'), (0, _toU8a.default)('one'));
      expect(trie.getRoot()).toEqual(new Uint8Array([43, 119, 232, 84, 123, 197, 94, 42, 149, 34, 124, 147, 159, 159, 157, 103, 149, 45, 225, 233, 112, 160, 23, 224, 145, 11, 229, 16, 176, 144, 175, 243]));
    });
    it('should get updated a value', () => {
      expect(trie.get((0, _toU8a.default)('test'))).toEqual((0, _toU8a.default)('one'));
    });
    it('should create a branch here', () => {
      trie.put((0, _toU8a.default)('doge'), (0, _toU8a.default)('coin'));
      expect(trie.getRoot()).toEqual((0, _toU8a.default)('0xde8a34a8c1d558682eae1528b47523a483dd8685d6db14b291451a66066bf0fc'));
    });
    it('should get a value that is in a branch', () => {
      expect(trie.get((0, _toU8a.default)('doge'))).toEqual((0, _toU8a.default)('coin'));
    });
    it('should delete from a branch', () => {
      trie.del((0, _toU8a.default)('doge'));
      expect(trie.get((0, _toU8a.default)('doge'))).toEqual(null);
      expect(trie.getRoot()).toEqual(new Uint8Array([43, 119, 232, 84, 123, 197, 94, 42, 149, 34, 124, 147, 159, 159, 157, 103, 149, 45, 225, 233, 112, 160, 23, 224, 145, 11, 229, 16, 176, 144, 175, 243]));
    });
  });
  describe('storing longer values', () => {
    const trie = createTrie();
    const longString = 'this will be a really really really long value';
    const longStringRoot = '0xb173e2db29e79c78963cff5196f8a983fbe0171388972106b114ef7f5c24dfa3';
    it('should store a longer string', () => {
      trie.put((0, _toU8a.default)('done'), (0, _toU8a.default)(longString));
      expect(trie.getRoot()).toEqual(new Uint8Array([79, 170, 48, 228, 218, 25, 91, 13, 86, 114, 153, 98, 252, 127, 54, 124, 242, 163, 153, 215, 249, 196, 65, 209, 186, 130, 39, 6, 181, 246, 231, 111]));
    });
    it('should retrieve a longer value (first pass)', () => {
      expect(trie.get((0, _toU8a.default)('done'))).toEqual((0, _toU8a.default)(longString));
    });
    it('should store subsequent values', () => {
      trie.put((0, _toU8a.default)('doge'), (0, _toU8a.default)('coin'));
      expect(longStringRoot).toEqual((0, _toHex.default)(trie.getRoot()));
    });
    it('should retrieve a longer value (second pass)', () => {
      expect(trie.get((0, _toU8a.default)('done'))).toEqual((0, _toU8a.default)(longString));
    });
    it('should retrieve subsequent values', () => {
      expect(trie.get((0, _toU8a.default)('doge'))).toEqual((0, _toU8a.default)('coin'));
    });
    it('should when being modified delete the old value', () => {
      trie.put((0, _toU8a.default)('done'), (0, _toU8a.default)('test'));
      expect(trie.getRoot()).toEqual(new Uint8Array([219, 23, 9, 241, 116, 187, 56, 113, 244, 253, 200, 19, 242, 27, 188, 158, 217, 68, 67, 249, 222, 154, 243, 190, 184, 56, 173, 54, 214, 42, 91, 206]));
    });
  });
  describe('testing Extentions and branches', () => {
    const trie = createTrie();
    it('should store a value', () => {
      trie.put((0, _toU8a.default)('doge'), (0, _toU8a.default)('coin'));
    });
    it('should create extention to store this value', () => {
      trie.put((0, _toU8a.default)('do'), (0, _toU8a.default)('verb'));
      expect((0, _toU8a.default)('0xf803dfcb7e8f1afd45e88eedb4699a7138d6c07b71243d9ae9bff720c99925f9')).toEqual(trie.getRoot());
    });
    it('should store this value under the extention ', () => {
      trie.put((0, _toU8a.default)('done'), (0, _toU8a.default)('finished'));
      expect('0x409cff4d820b394ed3fb1cd4497bdd19ffa68d30ae34157337a7043c94a3e8cb').toEqual((0, _toHex.default)(trie.getRoot()));
    });
  });
  describe.skip('testing Extentions and branches - reverse', () => {
    const trie = createTrie();
    it('should create extention to store this value', () => {
      trie.put((0, _toU8a.default)('do'), (0, _toU8a.default)('verb'));
      const value = trie.get((0, _toU8a.default)('do'));
      expect(value).toEqual((0, _toU8a.default)('verb'));
    });
    it('should store a value', () => {
      trie.put((0, _toU8a.default)('doge'), (0, _toU8a.default)('coin'));
    });
    it('should store this value under the extention ', () => {
      trie.put((0, _toU8a.default)('done'), (0, _toU8a.default)('finished'));
      expect('0x409cff4d820b394ed3fb1cd4497bdd19ffa68d30ae34157337a7043c94a3e8cb').toEqual((0, _toHex.default)(trie.getRoot()));
    });
  });
  describe('testing deletions cases', () => {
    const trie = createTrie();
    it('should delete from a branch->branch-branch', () => {
      trie.put(new Uint8Array([11, 11, 11]), (0, _toU8a.default)('first'));
      trie.put(new Uint8Array([12, 22, 22]), (0, _toU8a.default)('create the first branch'));
      trie.put(new Uint8Array([12, 34, 44]), (0, _toU8a.default)('create the last branch'));
      trie.del(new Uint8Array([12, 22, 22]));
      const value = trie.get(new Uint8Array([12, 22, 22]));
      expect(null).toEqual(value);
    });
    it('should delete from a branch->branch-extension', () => {
      trie.put(new Uint8Array([11, 11, 11]), (0, _toU8a.default)('first'));
      trie.put(new Uint8Array([12, 22, 22]), (0, _toU8a.default)('create the first branch'));
      trie.put(new Uint8Array([12, 33, 33]), (0, _toU8a.default)('create the middle branch'));
      trie.put(new Uint8Array([12, 33, 44]), (0, _toU8a.default)('create the last branch'));
      trie.del(new Uint8Array([12, 22, 22]));
      const value = trie.get(new Uint8Array([12, 22, 22]));
      expect(null).toEqual(value);
    });
    it('should delete from a extension->branch-extension', () => {
      trie.put(new Uint8Array([11, 11, 11]), (0, _toU8a.default)('first'));
      trie.put(new Uint8Array([12, 22, 22]), (0, _toU8a.default)('create the first branch'));
      trie.put(new Uint8Array([12, 33, 33]), (0, _toU8a.default)('create the middle branch'));
      trie.put(new Uint8Array([12, 33, 44]), (0, _toU8a.default)('create the last branch'));
      trie.del(new Uint8Array([11, 11, 11]));
      const value = trie.get(new Uint8Array([11, 11, 11]));
      expect(null).toEqual(value);
    });
    it('should delete from a extension->branch-branch', () => {
      trie.put(new Uint8Array([11, 11, 11]), (0, _toU8a.default)('first'));
      trie.put(new Uint8Array([12, 22, 22]), (0, _toU8a.default)('create the first branch'));
      trie.put(new Uint8Array([12, 33, 33]), (0, _toU8a.default)('create the middle branch'));
      trie.put(new Uint8Array([12, 34, 44]), (0, _toU8a.default)('create the last branch'));
      trie.del(new Uint8Array([11, 11, 11]));
      const value = trie.get(new Uint8Array([11, 11, 11]));
      expect(null).toEqual(value);
    });
  });
});