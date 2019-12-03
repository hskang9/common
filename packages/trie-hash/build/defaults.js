"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DEFAULT_CODEC", {
  enumerable: true,
  get: function get() {
    return _trieCodec.default;
  }
});
Object.defineProperty(exports, "DEFAULT_STREAM", {
  enumerable: true,
  get: function get() {
    return _trieCodec.stream;
  }
});

var _trieCodec = _interopRequireWildcard(require("@polkadot/trie-codec"));