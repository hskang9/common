"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NodeType = void 0;
// Copyright 2017-2019 @polkadot/trie-db authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
let NodeType;
exports.NodeType = NodeType;

(function (NodeType) {
  NodeType[NodeType["EMPTY"] = 0] = "EMPTY";
  NodeType[NodeType["LEAF"] = 1] = "LEAF";
  NodeType[NodeType["EXTENSION"] = 2] = "EXTENSION";
  NodeType[NodeType["BRANCH"] = 3] = "BRANCH";
})(NodeType || (exports.NodeType = NodeType = {}));