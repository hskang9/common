"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("@polkadot/util");

// Copyright 2017-2019 @polkadot/db authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const l = (0, _util.logger)('db/transact');

class TransactionDb {
  constructor(backing) {
    this.backing = void 0;
    this.txOverlay = new Map();
    this.txStarted = void 0;
    this.backing = backing;
    this.txStarted = false;
  }

  transaction(fn) {
    l.debug(() => ['transaction']);

    try {
      this.createTx();
      const result = fn();

      if (result) {
        this.commitTx();
      } else {
        this.revertTx();
      }

      return result;
    } catch (error) {
      this.revertTx();
      throw error;
    }
  }

  close() {
    this.backing.close();
  }

  open() {
    this.backing.open();
  }

  drop() {
    this.backing.drop();
  }

  empty() {
    this.backing.empty();
  }

  rename(base, file) {
    this.backing.rename(base, file);
  }

  maintain(fn) {
    (0, _util.assert)(this.txStarted === false, 'Cannot maintain inside an open transaction');
    this.backing.maintain(fn);
  }

  size() {
    return this.backing.size();
  }

  del(key) {
    if (this.txStarted) {
      this.txOverlay.set(key.toString(), {
        key,
        value: null
      });
      return;
    }

    this.backing.del(key);
  }

  get(key) {
    // l.debug(() => ['get', u8aToHex(key)]);
    if (this.txStarted) {
      const value = this.txOverlay.get(key.toString());

      if (value) {
        return value.value;
      }
    }

    return this.backing.get(key);
  }

  put(key, value) {
    // l.debug(() => ['put', u8aToHex(key), u8aToHex(value)]);
    if (this.txStarted) {
      this.txOverlay.set(key.toString(), {
        key,
        value
      });
      return;
    }

    return this.backing.put(key, value);
  }

  createTx() {
    l.debug(() => ['createTx']);
    (0, _util.assert)(!this.txStarted, 'Cannot create a transaction when one is already active');
    this.txOverlay.clear();
    this.txStarted = true;
  }

  commitTx() {
    l.debug(() => ['commitTx', Object.keys(this.txOverlay).length, 'keys']);
    (0, _util.assert)(this.txStarted, 'Cannot commit when not in transaction');

    if (this.backing.txStart) {
      this.backing.txStart();
    }

    this.txOverlay.forEach((_ref) => {
      let {
        key,
        value
      } = _ref;

      if ((0, _util.isNull)(value)) {
        this.backing.del(key);
      } else {
        this.backing.put(key, value);
      }
    });

    if (this.backing.txCommit) {
      this.backing.txCommit();
    }

    this.txOverlay.clear();
    this.txStarted = false;
  }

  revertTx() {
    l.debug(() => ['revertTx']);
    (0, _util.assert)(this.txStarted, 'Cannot revert when not in transaction');
    this.txOverlay.clear();
    this.txStarted = false;
  }

}

exports.default = TransactionDb;