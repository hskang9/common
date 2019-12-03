"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNibblesTerminated = isNibblesTerminated;
exports.addNibblesTerminator = addNibblesTerminator;
exports.removeNibblesTerminator = removeNibblesTerminator;
exports.decodeNibbles = decodeNibbles;
exports.encodeNibbles = encodeNibbles;
exports.extractKey = extractKey;
exports.extractNodeKey = extractNodeKey;

var _util = require("./util");

// Copyright 2017-2019 @polkadot/trie-db authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const HP_FLAG_2 = 2;
const HP_FLAG_0 = 0;
const NIBBLE_TERMINATOR = 16;
const NEEDS_TERMINATOR = [HP_FLAG_2, HP_FLAG_2 + 1];
const IS_ODD_LENGTH = [HP_FLAG_0 + 1, HP_FLAG_2 + 1];

function isNibblesTerminated(nibbles) {
  return nibbles[nibbles.length - 1] === NIBBLE_TERMINATOR;
}

function addNibblesTerminator(nibbles) {
  if (isNibblesTerminated(nibbles)) {
    return nibbles;
  }

  const terminated = new Uint8Array(nibbles.length + 1);
  terminated.set(nibbles);
  terminated[nibbles.length] = NIBBLE_TERMINATOR;
  return terminated;
}

function removeNibblesTerminator(nibbles) {
  if (isNibblesTerminated(nibbles)) {
    return nibbles.subarray(0, nibbles.length - 1);
  }

  return nibbles;
}

function decodeNibbles(value) {
  const nibblesWithFlag = (0, _util.toNibbles)(value);
  const [flag] = nibblesWithFlag;
  const rawNibbles = IS_ODD_LENGTH.includes(flag) ? nibblesWithFlag.subarray(1) : nibblesWithFlag.subarray(2);
  return NEEDS_TERMINATOR.includes(flag) ? addNibblesTerminator(rawNibbles) : rawNibbles;
}

function encodeNibbles(nibbles) {
  const flag = isNibblesTerminated(nibbles) ? HP_FLAG_2 : HP_FLAG_0;
  const rawNibbles = removeNibblesTerminator(nibbles);
  const prefix = rawNibbles.length % 2 ? [flag + 1] : [flag, 0];
  const prefixed = new Uint8Array(prefix.length + rawNibbles.length);
  prefixed.set(prefix);
  prefixed.set(rawNibbles, prefix.length);
  return (0, _util.fromNibbles)(prefixed);
}

function extractKey(key) {
  return removeNibblesTerminator(decodeNibbles(key));
}

function extractNodeKey(_ref) {
  let [key] = _ref;
  return removeNibblesTerminator(decodeNibbles(key));
}