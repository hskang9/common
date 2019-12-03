"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createBranch;

var _util = require("@polkadot/util");

var _constants = require("../constants");

var _createValue = _interopRequireDefault(require("./createValue"));

// Copyright 2017-2019 @polkadot/trie-codec authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function createBranch(value, hasChildren) {
  let bitmap = 0;

  for (let i = 0; i < hasChildren.length; i++) {
    if (hasChildren[i]) {
      bitmap |= _constants.BITMAP[i];
    }
  }

  return (0, _util.u8aConcat)(Uint8Array.from([value ? _constants.BRANCH_NODE_WITH_VALUE : _constants.BRANCH_NODE_NO_VALUE, bitmap & 0xff, bitmap >> 8]), (0, _createValue.default)(value));
}