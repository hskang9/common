// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import isTestChain from './testChain';

describe('isTestChain', (): void => {
  it('enables test environment when chain specification matches text of dev or loc(al)', (): void => {
    const validTestModeChainSpecsWithDev = ['Development'];
    const validTestModeChainSpecsWithLoc = ['Local Testnet'];

    validTestModeChainSpecsWithDev.concat(validTestModeChainSpecsWithLoc).forEach((s): void => {
      expect(isTestChain(s)).toEqual(true);
    });
  });

  it('disables keyring test mode when chain specification is not a test mode or undefined or number type', (): void => {
    const invalidTestModeChainSpecs = ['dev', 'local', 'development', 'PoC-1 Testnet', 'Staging Testnet', 'future PoC-2 Testnet', 'a pocadot?', undefined];

    invalidTestModeChainSpecs.forEach((s): void => {
      expect(isTestChain(s)).toEqual(false);
    });
  });
});
