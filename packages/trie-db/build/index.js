"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Memory = _interopRequireDefault(require("@polkadot/db/Memory"));

var _util = require("@polkadot/trie-codec/util");

var _util2 = require("@polkadot/util");

var _Impl = _interopRequireDefault(require("./Impl"));

var _constants = _interopRequireDefault(require("./constants"));

// Copyright 2017-2019 @polkadot/trie-db authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const l = (0, _util2.logger)('trie/db');
/**
 * # @polkadot/trie-db
 *
 * ## Overview
 *
 * @name Trie
 * @summary Re-implementation of a Patricia Trie
 * @example See [Polkadot-JS Common Trie-DB Examples](https://polkadot.js.org/api/common/examples/trie-db/)
 */

class Trie extends _Impl.default {
  constructor() {
    let db = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _Memory.default();
    let rootHash = arguments.length > 1 ? arguments[1] : undefined;
    let codec = arguments.length > 2 ? arguments[2] : undefined;
    super(db, rootHash, codec);
    l.debug(() => "Created with ".concat(this.codec.type, " codec, root ").concat((0, _util2.u8aToHex)(this.rootHash, 64)));
  }

  transaction(fn) {
    try {
      this.createCheckpoint();
      const result = this.db.transaction(fn);

      if (result) {
        this.commitCheckpoint();
      } else {
        this.revertCheckpoint();
      }

      return result;
    } catch (error) {
      this.revertCheckpoint();
      throw error;
    }
  }

  open() {
    this.db.open();
  }

  close() {
    this.db.close();
  }

  empty() {
    this.db.empty();
  }

  drop() {
    this.db.drop();
  }

  maintain(fn) {
    this.db.maintain(fn);
  }

  rename(base, file) {
    this.db.rename(base, file);
  }

  size() {
    return this.db.size();
  }

  del(key) {
    // l.debug(() => ['del', { key }]);
    this._setRootNode(this._del(this._getNode(this.rootHash), (0, _util.toNibbles)(key)));
  }

  get(key) {
    // l.debug(() => ['get', { key }]);
    return this._get(this._getNode(this.rootHash), (0, _util.toNibbles)(key));
  }

  put(key, value) {
    // l.debug(() => ['put', { key, value }]);
    this._setRootNode(this._put(this._getNode(this.rootHash), (0, _util.toNibbles)(key), value));
  }

  getRoot() {
    const rootNode = this.getNode();

    if ((0, _util2.isNull)(rootNode)) {
      return (0, _constants.default)(this.codec).EMPTY_U8A;
    }

    return this.rootHash;
  }

  setRoot(rootHash) {
    this.rootHash = rootHash; // return this._setRootNode(rootNode);
  }

  getEntry(hash) {
    return this._entry(hash || this.rootHash);
  }

  getNode(hash) {
    return this._getNode(hash || this.rootHash);
  }

  entries() {
    l.debug(() => 'retrieving trie entries');
    const start = Date.now();

    const entries = this._entries(this.rootHash);

    const elapsed = (Date.now() - start) / 1000;
    l.debug(() => "entries retrieved in ".concat(elapsed.toFixed(2), "s, ").concat((entries.length / 1000).toFixed(2), "k keys"));
    return entries;
  }

  snapshot(dest, fn) {
    l.debug(() => 'creating current state snapshot');
    const start = Date.now();

    const keys = this._snapshot(dest, fn, this.rootHash, 0, 0, 0);

    const elapsed = (Date.now() - start) / 1000;
    dest.setRoot(this.rootHash);
    l.debug(() => "snapshot created in ".concat(elapsed.toFixed(2), "s, ").concat((keys / 1000).toFixed(2), "k keys"));
    fn && fn({
      isCompleted: true,
      keys,
      percent: 100
    });
    return keys;
  }

}

exports.default = Trie;