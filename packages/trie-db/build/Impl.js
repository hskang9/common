"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _types = require("./types");

var _trieCodec = _interopRequireDefault(require("@polkadot/trie-codec"));

var _nibbles = require("@polkadot/trie-codec/nibbles");

var _util = require("@polkadot/util");

var _is = require("./util/is");

var _key = require("./util/key");

var _node = require("./util/node");

var _Checkpoint = _interopRequireDefault(require("./Checkpoint"));

var _constants2 = _interopRequireDefault(require("./constants"));

// Copyright 2017-2019 @polkadot/trie-db authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const BLANK_BRANCH = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
/**
 * # @polkadot/trie-db
 *
 * ## Overview
 *
 * @name Trie
 * @summary Re-implementation of a Patricia Trie
 * @example See [Polkadot-JS Common Trie-DB Examples](https://polkadot.js.org/api/common/examples/trie-db/)
 */

class Impl extends _Checkpoint.default {
  constructor(db, rootHash) {
    let codec = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _trieCodec.default;

    const _constants = (0, _constants2.default)(codec);

    super(rootHash || _constants.EMPTY_HASH);
    this.db = void 0;
    this.codec = void 0;
    this.constants = void 0;
    this.db = db;
    this.codec = codec;
    this.constants = _constants;
  }

  _entry(root) {
    const [encoded, node] = this._getNodeRaw(root);

    if ((0, _util.isNull)(encoded) || (0, _util.isNull)(node)) {
      return null;
    }

    return [root, encoded, node.filter(u8a => !!u8a && u8a.length === 32)];
  }

  _entries(root) {
    let entries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    // l.debug(() => ['entries', { root }]);
    const entry = this._entry(root);

    if (!entry) {
      return entries;
    }

    entries.push(entry);
    entry[2].forEach(u8a => {
      this._entries(u8a, entries);
    });
    return entries;
  }

  _snapshot(dest, fn, root, keys, percent, depth) {
    // l.debug(() => ['snapshot', { root }]);
    const [encoded, node] = this._getNodeRaw(root);

    if ((0, _util.isNull)(encoded) || (0, _util.isNull)(node)) {
      return keys;
    }

    dest.db.put(root, encoded);
    fn && fn({
      keys: ++keys,
      percent
    });
    node.forEach(u8a => {
      if (u8a && u8a.length === 32) {
        keys = this._snapshot(dest, fn, u8a, keys, percent, depth + 1);
      }

      percent += 100 / node.length / Math.pow(16, depth);
    });
    return keys;
  }

  _getNodeRaw(hash) {
    // l.debug(() => ['_getNode', { hash }]);
    if (!hash || hash.length === 0 || (0, _key.keyEquals)(hash, this.constants.EMPTY_HASH)) {
      return [null, null];
    } else if (hash.length < 32) {
      return [hash, (0, _node.decodeNode)(this.codec, hash)];
    }

    const raw = this.db.get(hash);
    return [raw, (0, _node.decodeNode)(this.codec, raw)];
  }

  _getNode(hash) {
    // l.debug(() => ['_getNode', { hash }]);
    if (!hash || hash.length === 0 || (0, _key.keyEquals)(hash, this.constants.EMPTY_HASH)) {
      return null;
    } else if (hash.length < 32) {
      return (0, _node.decodeNode)(this.codec, hash);
    }

    return (0, _node.decodeNode)(this.codec, this.db.get(hash));
  }

  _del(node, trieKey) {
    // l.debug(() => ['_del', { node, trieKey }]);
    if ((0, _is.isEmptyNode)(node)) {
      return null;
    } else if ((0, _is.isBranchNode)(node)) {
      return this._delBranchNode(node, trieKey);
    } else if ((0, _is.isKvNode)(node)) {
      return this._delKvNode(node, trieKey);
    }

    throw new Error('Unreachable');
  }

  _delBranchNode(node, trieKey) {
    // l.debug(() => ['_delBranchNode', { node, trieKey }]);
    if (trieKey.length === 0) {
      node[node.length - 1] = null;
      return this._normaliseBranchNode(node);
    }

    const nodeToDelete = this._getNode(node[trieKey[0]]);

    const subNode = this._del(nodeToDelete, trieKey.subarray(1));

    const encodedSubNode = this._persistNode(subNode);

    if ((0, _key.keyEquals)(encodedSubNode, node[trieKey[0]])) {
      return node;
    }

    node[trieKey[0]] = encodedSubNode;
    return (0, _util.isNull)(encodedSubNode) ? this._normaliseBranchNode(node) : node;
  }

  _delKvNode(node, trieKey) {
    // l.debug(() => ['_delKvNode', { node, trieKey }]);
    const currentKey = (0, _nibbles.extractNodeKey)(node);
    const nodeType = (0, _node.getNodeType)(node);

    if (!(0, _key.keyStartsWith)(trieKey, currentKey)) {
      return node;
    } else if (nodeType === _types.NodeType.LEAF) {
      return (0, _key.keyEquals)(trieKey, currentKey) ? null : node;
    }

    const subKey = trieKey.subarray(currentKey.length);

    const subNode = this._getNode(node[1]);

    const newSub = this._del(subNode, subKey);

    const encodedNewSub = this._persistNode(newSub);

    if ((0, _key.keyEquals)(encodedNewSub, node[1])) {
      return node;
    } else if ((0, _util.isNull)(newSub)) {
      return null;
    }

    if ((0, _is.isKvNode)(newSub)) {
      const subNibbles = (0, _nibbles.decodeNibbles)(newSub[0]);
      const newKey = (0, _util.u8aConcat)(currentKey, subNibbles);
      return [(0, _nibbles.encodeNibbles)(newKey), newSub[1]];
    } else if ((0, _is.isBranchNode)(newSub)) {
      return [(0, _nibbles.encodeNibbles)(currentKey), encodedNewSub];
    }

    throw new Error('Unreachable');
  }

  _get(node, trieKey) {
    // l.debug(() => ['_get', { node, trieKey }]);
    if ((0, _is.isEmptyNode)(node)) {
      return null;
    } else if ((0, _is.isBranchNode)(node)) {
      return this._getBranchNode(node, trieKey);
    } else if ((0, _is.isKvNode)(node)) {
      return this._getKvNode(node, trieKey);
    }

    throw new Error('Invalid NodeType');
  }

  _getBranchNode(node, trieKey) {
    // l.debug(() => ['_getBranchNode', { node, trieKey }]);
    if (trieKey.length === 0) {
      return node[16];
    }

    const subNode = this._getNode(node[trieKey[0]]);

    return this._get(subNode, trieKey.subarray(1));
  }

  _getKvNode(node, trieKey) {
    // l.debug(() => ['_getKvNode', { node, trieKey }]);
    const currentKey = (0, _nibbles.extractNodeKey)(node);
    const nodeType = (0, _node.getNodeType)(node); // l.debug(() => [{ currentKey, trieKey, nodeType }]);

    if (nodeType === _types.NodeType.LEAF) {
      return (0, _key.keyEquals)(trieKey, currentKey) ? node[1] : null;
    } else if (nodeType === _types.NodeType.EXTENSION) {
      if ((0, _key.keyStartsWith)(trieKey, currentKey)) {
        const subNode = this._getNode(node[1]);

        return this._get(subNode, trieKey.subarray(currentKey ? currentKey.length : 0));
      }

      return null;
    }

    throw new Error('Unreachable');
  }

  _nodeToDbMapping(node) {
    // l.debug(() => ['_nodeToDbMapping', { node }]);
    if ((0, _is.isEmptyNode)(node)) {
      return [null, null];
    }

    const encoded = (0, _node.encodeNode)(this.codec, node);
    return encoded.length < 32 ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [node, null] : [this.codec.hashing(encoded), encoded];
  }

  _normaliseBranchNode(node) {
    // l.debug(() => ['_normaliseBranchNode', { node }]);
    const mapped = node.map((value, index) => ({
      index,
      value
    })).filter((_ref) => {
      let {
        value
      } = _ref;
      return !!value && value.length !== 0;
    });

    if (mapped.length >= 2) {
      return node;
    } else if (node[16]) {
      return [(0, _key.computeLeafKey)(new Uint8Array()), node[16]];
    }

    const [{
      index,
      value
    }] = mapped;

    const subNode = this._getNode(value);

    if ((0, _is.isBranchNode)(subNode)) {
      return [(0, _nibbles.encodeNibbles)(new Uint8Array([index])), this._persistNode(subNode)];
    } else if ((0, _is.isKvNode)(subNode)) {
      const subNibbles = (0, _nibbles.decodeNibbles)(subNode[0]);
      const newKey = (0, _util.u8aConcat)(new Uint8Array([index]), subNibbles);
      return [(0, _nibbles.encodeNibbles)(newKey), subNode[1]];
    }

    throw new Error('Unreachable');
  }

  _persistNode(node) {
    const [key, value] = this._nodeToDbMapping(node); // l.debug(() => ['_persistNode', { node, key, value }]);


    if (value) {
      this.db.put(key, value);
    }

    return key;
  }

  _put(node, trieKey, value) {
    // l.debug(() => ['_put', { node, trieKey, value }]);
    if ((0, _is.isEmptyNode)(node)) {
      return [(0, _key.computeLeafKey)(trieKey), value];
    } else if ((0, _is.isKvNode)(node)) {
      return this._putKvNode(node, trieKey, value);
    } else if ((0, _is.isBranchNode)(node)) {
      return this._putBranchNode(node, trieKey, value);
    }

    throw new Error('Unreachable');
  }

  _putBranchNode(node, trieKey, value) {
    // l.debug(() => ['_putBranchNode', { node, trieKey, value }]);
    if (trieKey && trieKey.length) {
      const subNode = this._getNode(node[trieKey[0]]);

      const newNode = this._put(subNode, trieKey.subarray(1), value);

      node[trieKey[0]] = this._persistNode(newNode);
    } else {
      node[node.length - 1] = value;
    }

    return node;
  }

  _putKvNode(node, trieKey, value) {
    // l.debug(() => ['_putKvNode', { node, trieKey, value }]);
    const currentKey = (0, _nibbles.extractNodeKey)(node);
    const [commonPrefix, currentRemainder, trieRemainder] = (0, _key.consumeCommonPrefix)(currentKey, trieKey);
    const isExtension = (0, _is.isExtensionNode)(node);
    const isLeaf = (0, _is.isLeafNode)(node);
    let newNode; // l.debug(() => ['_putKvNode', { currentKey, commonPrefix, currentRemainder, trieRemainder }]);

    if (currentRemainder.length === 0 && trieRemainder.length === 0) {
      if (isLeaf) {
        return [node[0], value];
      }

      const subNode = this._getNode(node[1]);

      newNode = this._put(subNode, trieRemainder, value);
    } else if (currentRemainder.length === 0) {
      if (isExtension) {
        const subNode = this._getNode(node[1]);

        newNode = this._put(subNode, trieRemainder, value);
      } else {
        const subPosition = trieRemainder[0];
        const subKey = (0, _key.computeLeafKey)(trieRemainder.subarray(1));
        const subNode = [subKey, value];
        newNode = BLANK_BRANCH.concat(node[1]);
        newNode[subPosition] = this._persistNode(subNode);
      }
    } else {
      newNode = BLANK_BRANCH.concat(null);

      if (currentRemainder.length === 1 && isExtension) {
        newNode[currentRemainder[0]] = node[1];
      } else {
        const computedKey = isExtension ? (0, _key.computeExtensionKey)(currentRemainder.subarray(1)) : (0, _key.computeLeafKey)(currentRemainder.subarray(1));
        newNode[currentRemainder[0]] = this._persistNode([computedKey, node[1]]);
      }

      if (trieRemainder.length) {
        newNode[trieRemainder[0]] = this._persistNode([(0, _key.computeLeafKey)(trieRemainder.subarray(1)), value]);
      } else {
        newNode[16] = value;
      }
    } // l.debug(() => ['newNode', newNode]);


    if (commonPrefix.length) {
      return [(0, _key.computeExtensionKey)(commonPrefix), this._persistNode(newNode)];
    }

    return newNode;
  }

  _setRootNode(node) {
    // l.debug(() => ['_setRootNode', { node }]);
    if ((0, _is.isEmptyNode)(node)) {
      this.rootHash = this.constants.EMPTY_HASH;
    } else {
      const encoded = (0, _node.encodeNode)(this.codec, node);
      const rootHash = this.codec.hashing(encoded); // l.debug(() => ['_setRootNode', { encoded, rootHash }]);

      this.db.put(rootHash, encoded);
      this.rootHash = rootHash;
    }
  }

}

exports.default = Impl;