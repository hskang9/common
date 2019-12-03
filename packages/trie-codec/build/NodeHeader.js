"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nibbles = require("@polkadot/trie-codec/nibbles");

var _constants = require("./constants");

// Copyright 2017-2019 @polkadot/trie-codec authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
class NodeHeader {
  constructor(input) {
    this._nodeType = void 0;
    this._value = void 0;
    const [nodeType, value] = Array.isArray(input) ? NodeHeader.decodeNodeHeaderArray(input) : NodeHeader.decodeNodeHeaderU8a(input);
    this._nodeType = nodeType;
    this._value = value;
  }

  static decodeNodeHeaderArray(input) {
    if (input.length === 0) {
      return [_constants.NODE_TYPE_NULL, null];
    } else if (input.length === 2) {
      const nibbles = (0, _nibbles.decodeNibbles)(input[0]);
      const isTerminated = (0, _nibbles.isNibblesTerminated)(nibbles);
      return isTerminated ? [_constants.NODE_TYPE_LEAF, nibbles.length - 1] : [_constants.NODE_TYPE_EXT, nibbles.length];
    } else if (input.length === 17) {
      return [_constants.NODE_TYPE_BRANCH, !!input[16]];
    }

    throw new Error('Unreachable');
  }

  static decodeNodeHeaderU8a(input) {
    const firstByte = input ? input[0] : _constants.EMPTY_TRIE;

    if (!input || firstByte === _constants.EMPTY_TRIE) {
      return [_constants.NODE_TYPE_NULL, null];
    } else if (firstByte === _constants.BRANCH_NODE_NO_VALUE) {
      return [_constants.NODE_TYPE_BRANCH, false];
    } else if (firstByte === _constants.BRANCH_NODE_WITH_VALUE) {
      return [_constants.NODE_TYPE_BRANCH, true];
    } else if (firstByte >= _constants.EXTENSION_NODE_OFFSET && firstByte <= _constants.EXTENSION_NODE_SMALL_MAX) {
      return [_constants.NODE_TYPE_EXT, firstByte - _constants.EXTENSION_NODE_OFFSET];
    } else if (firstByte === _constants.EXTENSION_NODE_BIG) {
      return [_constants.NODE_TYPE_EXT, input[1] + _constants.EXTENSION_NODE_THRESHOLD];
    } else if (firstByte >= _constants.LEAF_NODE_OFFSET && firstByte <= _constants.LEAF_NODE_SMALL_MAX) {
      return [_constants.NODE_TYPE_LEAF, firstByte - _constants.LEAF_NODE_OFFSET];
    } else if (firstByte === _constants.LEAF_NODE_BIG) {
      return [_constants.NODE_TYPE_LEAF, input[1] + _constants.LEAF_NODE_THRESHOLD];
    }

    throw new Error('Unreachable');
  }

  get encodedLength() {
    switch (this.nodeType) {
      case _constants.NODE_TYPE_NULL:
      case _constants.NODE_TYPE_BRANCH:
        return 1;

      case _constants.NODE_TYPE_EXT:
        return this.value < _constants.EXTENSION_NODE_THRESHOLD ? 1 : 2;

      case _constants.NODE_TYPE_LEAF:
        return this.value < _constants.LEAF_NODE_THRESHOLD ? 1 : 2;

      default:
        throw new Error('Unreachable');
    }
  }

  get nodeType() {
    return this._nodeType;
  }

  get value() {
    return this._value;
  }

  toU8a() {
    switch (this.nodeType) {
      case _constants.NODE_TYPE_NULL:
        return new Uint8Array([_constants.EMPTY_TRIE]);

      case _constants.NODE_TYPE_BRANCH:
        return new Uint8Array([this.value ? _constants.BRANCH_NODE_WITH_VALUE : _constants.BRANCH_NODE_NO_VALUE]);

      case _constants.NODE_TYPE_EXT:
        {
          const nibbleCount = this.value;
          return nibbleCount < _constants.EXTENSION_NODE_THRESHOLD ? new Uint8Array([_constants.EXTENSION_NODE_OFFSET + nibbleCount]) : new Uint8Array([_constants.EXTENSION_NODE_BIG, nibbleCount - _constants.EXTENSION_NODE_THRESHOLD]);
        }

      case _constants.NODE_TYPE_LEAF:
        {
          const nibbleCount = this.value;
          return nibbleCount < _constants.LEAF_NODE_THRESHOLD ? new Uint8Array([_constants.LEAF_NODE_OFFSET + nibbleCount]) : new Uint8Array([_constants.LEAF_NODE_BIG, nibbleCount - _constants.LEAF_NODE_THRESHOLD]);
        }

      default:
        throw new Error('Unreachable');
    }
  }

}

exports.default = NodeHeader;