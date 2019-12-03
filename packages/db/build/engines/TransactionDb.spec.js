"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toU8a = _interopRequireDefault(require("@polkadot/util/string/toU8a"));

var _MemoryDb = _interopRequireDefault(require("./MemoryDb"));

var _TransactionDb = _interopRequireDefault(require("./TransactionDb"));

// Copyright 2017-2019 @polkadot/db authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('TransactionDb', () => {
  const memory = new _MemoryDb.default();
  const db = new _TransactionDb.default(memory);
  it('passed through values immediately when not in transaction', () => {
    const key = (0, _toU8a.default)('test0');
    const value = (0, _toU8a.default)('value0');
    db.put(key, value);
    expect(memory.get(key)).toEqual(value);
  });
  it('commits when transaction passes (result = true, put)', () => {
    const key = (0, _toU8a.default)('test1');
    const value = (0, _toU8a.default)('value1');
    expect(db.transaction(() => {
      db.put(key, value);
      return true;
    })).toEqual(true);
    expect(memory.get(key)).toEqual(value);
  });
  it('commits when transaction passes (result = true, del)', () => {
    const key = (0, _toU8a.default)('test0');
    expect(db.transaction(() => {
      db.del(key);
      return true;
    })).toEqual(true);
    expect(memory.get(key)).toEqual(null);
  });
  it('does not commit when transaction fails (result = false)', () => {
    const key = (0, _toU8a.default)('test2');
    const value = (0, _toU8a.default)('value2');
    expect(db.transaction(() => {
      db.put(key, value);
      return false;
    })).toEqual(false);
    expect(memory.get(key)).toEqual(null);
  });
  it('does not commit when transaction throws', () => {
    const key = (0, _toU8a.default)('test2');
    const value = (0, _toU8a.default)('value2');
    expect(() => {
      db.transaction(() => {
        db.put(key, value);
        throw new Error('test');
      });
    }).toThrow(/test/);
    expect(memory.get(key)).toEqual(null);
  });
  it('inside the transaction, the value is set', () => {
    const key = (0, _toU8a.default)('test2');
    const value = (0, _toU8a.default)('value2');
    db.transaction(() => {
      db.put(key, value);
      expect(db.get(key)).toEqual(value);
      return false;
    });
    expect(memory.get(key)).toEqual(null);
  });
});