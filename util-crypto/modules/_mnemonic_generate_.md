[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["mnemonic/generate"](_mnemonic_generate_.md)

# External module: "mnemonic/generate"

## Index

### Type aliases

* [WordCount](_mnemonic_generate_.md#wordcount)

### Functions

* [mnemonicGenerate](_mnemonic_generate_.md#mnemonicgenerate)

## Type aliases

###  WordCount

Ƭ **WordCount**: *12 | 15 | 18 | 21 | 24*

*Defined in [mnemonic/generate.ts:10](https://github.com/polkadot-js/common/blob/c988d5011/packages/util-crypto/src/mnemonic/generate.ts#L10)*

## Functions

###  mnemonicGenerate

▸ **mnemonicGenerate**(`numWords`: [WordCount](_mnemonic_generate_.md#wordcount)): *string*

*Defined in [mnemonic/generate.ts:33](https://github.com/polkadot-js/common/blob/c988d5011/packages/util-crypto/src/mnemonic/generate.ts#L33)*

**`name`** mnemonicGenerate

**`summary`** Creates a valid mnemonic string using using [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).

**`example`** 
<BR>

```javascript
import { mnemonicGenerate } from '@polkadot/util-crypto';

const mnemonic = mnemonicGenerate(); // => string
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`numWords` | [WordCount](_mnemonic_generate_.md#wordcount) | 12 |

**Returns:** *string*
