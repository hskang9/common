"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "stream", {
  enumerable: true,
  get: function get() {
    return _stream.default;
  }
});
exports.default = void 0;

var _decode = _interopRequireDefault(require("./decode"));

var _encode = _interopRequireDefault(require("./encode"));

var _hashing = _interopRequireDefault(require("./hashing"));

var _stream = _interopRequireDefault(require("./stream"));

// Copyright 2017-2019 @polkadot/trie-codec authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const codec = {
  decode: _decode.default,
  encode: _encode.default,
  hashing: _hashing.default,
  type: 'Substrate'
};
var _default = codec;
exports.default = _default;