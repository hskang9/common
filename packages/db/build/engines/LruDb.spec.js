"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toU8a = _interopRequireDefault(require("@polkadot/util/u8a/toU8a"));

var _LruDb = _interopRequireDefault(require("./LruDb"));

var _MemoryDb = _interopRequireDefault(require("./MemoryDb"));

// Copyright 2017-2019 @polkadot/db authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('LruDb', () => {
  const memory = new _MemoryDb.default();
  const db = new _LruDb.default(memory);
  it('retrieves an item from the backing when not available (caching it)', () => {
    const key = (0, _toU8a.default)('test1');
    const value = (0, _toU8a.default)('value1');
    memory.put(key, value);
    expect(db.get(key)).toEqual(value);
    expect(db._getLru(key)).toEqual({
      value
    });
  });
  it('replaces an item (caching and backing)', () => {
    const key = (0, _toU8a.default)('test1');
    const value = (0, _toU8a.default)('test');
    db.put(key, value);
    expect(db.get(key)).toEqual(value);
    expect(memory.get(key)).toEqual(value);
    expect(db._getLru(key)).toEqual({
      value
    });
  });
  it('retrieves item from LRU when available', () => {
    const key = (0, _toU8a.default)('test1');
    const value = (0, _toU8a.default)('test');
    memory.del(key);
    expect(db.get(key)).toEqual(value);
  });
  it('puts item both in LRU and backing', () => {
    const key = (0, _toU8a.default)('test0');
    const value = (0, _toU8a.default)('value0');
    db.put(key, value);
    expect(memory.get(key)).toEqual(value);
    expect(db._getLru(key)).toEqual({
      value
    });
  });
  it('deletes an item from both backing and db', () => {
    const key = (0, _toU8a.default)('test0');
    db.del(key);
    expect(memory.get(key)).toEqual(null);
    expect(db._getLru(key)).toEqual({
      value: null
    });
    expect(db.get(key)).toEqual(null);
  });
});