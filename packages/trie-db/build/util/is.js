"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmptyNode = isEmptyNode;
exports.isKvNode = isKvNode;
exports.isExtensionNode = isExtensionNode;
exports.isLeafNode = isLeafNode;
exports.isBranchNode = isBranchNode;

var _types = require("../types");

var _util = require("@polkadot/util");

var _node = require("./node");

// Copyright 2017-2019 @polkadot/trie-db authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @name isEmptyNode
 * @summary Returns true if node is NULL
 * @description Refer to [Merkle Patricia Trie specification](https://github.com/ethereum/wiki/wiki/Patricia-Tree#optimization)
 */
function isEmptyNode(node) {
  return (0, _util.isNull)(node);
}
/**
 * @name isKvNode
 * @summary Returns true if node is not empty and contains a single key/value pair
 * @description Refer to [Merkle Patricia Trie specification](https://github.com/ethereum/wiki/wiki/Patricia-Tree#optimization)
 */


function isKvNode(node) {
  return !isEmptyNode(node) && node.length === 2;
}
/**
 * @name isExtensionNode
 * @summary Returns true if node is an Extension 2-item node
 * @description Refer to [Merkle Patricia Trie specification](https://github.com/ethereum/wiki/wiki/Patricia-Tree#optimization)
 */


function isExtensionNode(node) {
  return (0, _node.getNodeType)(node) === _types.NodeType.EXTENSION;
}
/**
 * @name isLeafNode
 * @summary Returns true if node is an Leaf 2-item node
 * @description Refer to [Merkle Patricia Trie specification](https://github.com/ethereum/wiki/wiki/Patricia-Tree#optimization)
 */


function isLeafNode(node) {
  return (0, _node.getNodeType)(node) === _types.NodeType.LEAF;
}
/**
 * @name isBranchNode
 * @summary Returns true if node is an Branch 17-item node
 * @description Refer to [Merkle Patricia Trie specification](https://github.com/ethereum/wiki/wiki/Patricia-Tree#optimization)
 */


function isBranchNode(node) {
  return !isEmptyNode(node) && node.length === 17;
}