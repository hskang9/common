"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// Copyright 2017-2019 @polkadot/trie-db authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
class Checkpoint {
  constructor(rootHash) {
    this.txRoot = void 0;
    this.rootHash = void 0;
    this.rootHash = rootHash;
    this.txRoot = rootHash;
  }

  createCheckpoint() {
    this.txRoot = this.rootHash;
    return this.txRoot;
  }

  commitCheckpoint() {
    return this.rootHash;
  }

  revertCheckpoint() {
    this.rootHash = this.txRoot;
    return this.rootHash;
  }

}

exports.default = Checkpoint;