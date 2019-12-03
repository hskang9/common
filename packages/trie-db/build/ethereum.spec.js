"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toU8a = _interopRequireDefault(require("@polkadot/util/u8a/toU8a"));

var _toHex = _interopRequireDefault(require("@polkadot/util/u8a/toHex"));

var _ethereumCodec = _interopRequireDefault(require("./ethereumCodec"));

var _ = _interopRequireDefault(require("."));

var _getTests = _interopRequireDefault(require("../../util-rlp/test/getTests"));

// Copyright 2017-2019 @polkadot/trie-db authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
// const trietest = getTests('TrieTests/trietest.json');
const trieanyorder = (0, _getTests.default)('TrieTests/trieanyorder.json'); // FIXME These are not working, the trie-hash implementation is now substrate-specific

describe.skip('official tests', () => {
  let trie;
  beforeEach(() => {
    trie = new _.default(undefined, undefined, _ethereumCodec.default);
  }); // FIXME (maybe) These all have empty/null values, we don't allow those atm as a key nor value
  // describe.skip('ordered tests', (): void => {
  //   trietest.forEach(({ name, input, root }) => {
  //     it(name, (): void => {
  //       input.map((input) =>
  //         trie.put(toU8a(input[0]), toU8a(input[1]))
  //       );
  //       expect(
  //         u8aToHex(trie.getRoot())
  //       ).toEqual(
  //         root
  //       );
  //     });
  //   });
  // });

  describe('unordered tests', () => {
    trieanyorder.forEach((_ref) => {
      let {
        name,
        input,
        root
      } = _ref;
      const keys = Object.keys(input);
      it(name, () => {
        keys.forEach(key => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          trie.put((0, _toU8a.default)(key), (0, _toU8a.default)(input[key]));
        });
        expect((0, _toHex.default)(trie.getRoot())).toEqual(root);
      });
    });
  });
});