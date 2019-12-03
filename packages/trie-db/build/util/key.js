"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyStartsWith = keyStartsWith;
exports.keyEquals = keyEquals;
exports.computeExtensionKey = computeExtensionKey;
exports.computeLeafKey = computeLeafKey;
exports.getCommonPrefixLength = getCommonPrefixLength;
exports.consumeCommonPrefix = consumeCommonPrefix;

var _nibbles = require("@polkadot/trie-codec/nibbles");

var _util = require("@polkadot/util");

// Copyright 2017-2019 @polkadot/trie-db authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function keyStartsWith(key, partial) {
  if ((0, _util.isNull)(key) && (0, _util.isNull)(partial)) {
    return true;
  } else if ((0, _util.isNull)(key) || (0, _util.isNull)(partial) || key.length < partial.length) {
    return false;
  }

  for (let index = 0; index < partial.length; index++) {
    if (key[index] !== partial[index]) {
      return false;
    }
  }

  return true;
}

function keyEquals(key, test) {
  if ((0, _util.isNull)(key) && (0, _util.isNull)(test)) {
    return true;
  } else if ((0, _util.isNull)(key) || (0, _util.isNull)(test) || key.length !== test.length) {
    return false;
  }

  return keyStartsWith(key, test);
}

function computeExtensionKey(nibbles) {
  return (0, _nibbles.encodeNibbles)(nibbles);
}

function computeLeafKey(nibbles) {
  return (0, _nibbles.encodeNibbles)((0, _nibbles.addNibblesTerminator)(nibbles));
}

function getCommonPrefixLength(left, right) {
  for (let index = 0; index < left.length && index < right.length; index++) {
    if (left[index] !== right[index]) {
      return index;
    }
  }

  return Math.min(left.length, right.length);
}

function consumeCommonPrefix(left, right) {
  const length = getCommonPrefixLength(left, right);
  return [left.subarray(0, length), left.subarray(length), right.subarray(length)];
}