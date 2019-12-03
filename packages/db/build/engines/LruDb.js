"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lru_map = require("lru_map");

var _util = require("@polkadot/util");

// Copyright 2017-2019 @polkadot/db authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const DEFAULT_ITEM_COUNT = 4096;
const l = (0, _util.logger)('db/lru');

class LruDb {
  constructor(backing) {
    let itemCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ITEM_COUNT;
    this.backing = void 0;
    this.lru = void 0;
    this.backing = backing;
    this.lru = new _lru_map.LRUMap(itemCount);
  }

  close() {
    l.debug(() => ['close']);
    this.lru.clear();
    this.backing.close();
  }

  open() {
    l.debug(() => ['open']);
    this.lru.clear();
    this.backing.open();
  }

  drop() {
    this.backing.drop();
  }

  empty() {
    l.debug(() => ['empty']);
    this.lru.clear();
    this.backing.empty();
  }

  rename(base, file) {
    this.backing.rename(base, file);
  }

  maintain(fn) {
    this.backing.maintain(fn);
  }

  size() {
    return this.backing.size();
  }

  del(key) {
    const keyStr = key.toString();
    this.backing.del(key);
    this.lru.set(keyStr, {
      value: null
    });
  }

  get(key) {
    const keyStr = key.toString();
    const cached = this.lru.get(keyStr);

    if (cached) {
      return cached.value;
    }

    const value = this.backing.get(key);
    this.lru.set(keyStr, {
      value
    });
    return value;
  } // Convenience methods used in tests


  _getLru(key) {
    return this.lru.get(key.toString());
  }

  put(key, value) {
    const keyStr = key.toString();
    this.backing.put(key, value);
    this.lru.set(keyStr, {
      value
    });
  }

  txCommit() {
    if (this.backing.txCommit) {
      this.backing.txCommit();
    }
  }

  txRevert() {
    if (this.backing.txRevert) {
      this.backing.txRevert();
    }
  }

  txStart() {
    if (this.backing.txStart) {
      this.backing.txStart();
    }
  }

}

exports.default = LruDb;