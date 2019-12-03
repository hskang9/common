"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("@polkadot/util");

// Copyright 2017-2019 @polkadot/db authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const l = (0, _util.logger)('db/memory');

class MemoryDb {
  constructor() {
    this._storage = new Map();
  }

  close() {
    this.empty();
  }

  open() {
    this.empty();
  }

  drop() {
    this.empty();
  }

  empty() {
    this._storage.clear();
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  rename(base, file) {
    l.warn('rename() is not implemented');
  }

  maintain(fn) {
    fn({
      isCompleted: true,
      keys: this._storage.size,
      percent: 100
    });
  }

  size() {
    let size = 0;

    this._storage.forEach(value => {
      size += value.length;
    });

    return size;
  }

  del(key) {
    // l.debug(() => ['del', { key }]);
    this._storage.delete(key.toString());
  }

  get(key) {
    // l.debug(() => ['get', { key }]);
    return this._storage.get(key.toString()) || null;
  }

  put(key, value) {
    // l.debug(() => ['put', { key, value }]);
    this._storage.set(key.toString(), value);
  }

}

exports.default = MemoryDb;