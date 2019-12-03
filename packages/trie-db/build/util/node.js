"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNodeType = getNodeType;
exports.decodeNode = decodeNode;
exports.encodeNode = encodeNode;

var _types = require("../types");

var _nibbles = require("@polkadot/trie-codec/nibbles");

var _util = require("@polkadot/util");

var _is = require("./is");

// Copyright 2017-2019 @polkadot/trie-db authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function getNodeType(node) {
  if ((0, _is.isEmptyNode)(node)) {
    return _types.NodeType.EMPTY;
  } else if ((0, _is.isKvNode)(node)) {
    const [key] = node;
    const nibbles = (0, _nibbles.decodeNibbles)(key);
    return (0, _nibbles.isNibblesTerminated)(nibbles) ? _types.NodeType.LEAF : _types.NodeType.EXTENSION;
  } else if ((0, _is.isBranchNode)(node)) {
    return _types.NodeType.BRANCH;
  }

  throw new Error('Unable to determine node type');
}

function decodeNode(codec, encoded) {
  if ((0, _util.isNull)(encoded) || encoded.length === 0) {
    return null;
  } else if (Array.isArray(encoded)) {
    return encoded;
  }

  const node = codec.decode(encoded);
  return node.map(value => value && value.length ? value : null);
}

function encodeNode(codec, node) {
  return codec.encode(node);
}