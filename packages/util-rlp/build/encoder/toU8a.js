"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toU8a;

var _util = require("@polkadot/util");

// Copyright 2017-2019 @polkadot/util-rlp authors & contributors
// This software may be modified and distributed under the terms
// of the MPL-2.0 license. See the LICENSE file for details.
function newEmpty() {
  return new Uint8Array([]);
}

function convertString(value) {
  if ((0, _util.hexHasPrefix)(value)) {
    return (0, _util.hexToU8a)(value);
  }

  return (0, _util.stringToU8a)(value);
}

function convertU8a(value) {
  return value;
}

const encoders = [{
  check: _util.isNull,
  fn: newEmpty
}, {
  check: _util.isUndefined,
  fn: newEmpty
}, // NOTE: Buffer before U8a
{
  check: _util.isBuffer,
  fn: _util.bufferToU8a
}, {
  check: _util.isU8a,
  fn: convertU8a
}, // eslint-disable-next-line @typescript-eslint/no-explicit-any
{
  check: _util.isBn,
  fn: value => (0, _util.bnToU8a)(value, -1, false)
}, {
  check: _util.isNumber,
  fn: _util.numberToU8a
}, {
  check: _util.isString,
  fn: convertString
}]; // eslint-disable-next-line @typescript-eslint/no-explicit-any

function toU8a(value) {
  const encoder = encoders.find((_ref) => {
    let {
      check
    } = _ref;
    return check(value);
  });
  (0, _util.assert)(encoder, 'invalid type');
  return encoder.fn(value);
}