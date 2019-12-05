[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["nacl/keypair/fromSeed"](_nacl_keypair_fromseed_.md)

# External module: "nacl/keypair/fromSeed"

## Index

### Functions

* [naclKeypairFromSeed](_nacl_keypair_fromseed_.md#naclkeypairfromseed)

## Functions

###  naclKeypairFromSeed

▸ **naclKeypairFromSeed**(`seed`: Uint8Array): *[Keypair](../interfaces/_types_.keypair.md)*

*Defined in [nacl/keypair/fromSeed.ts:24](https://github.com/polkadot-js/common/blob/408129d5/packages/util-crypto/src/nacl/keypair/fromSeed.ts#L24)*

**`name`** naclKeypairFromSeed

**`summary`** Creates a new public/secret keypair from a seed.

**`description`** 
Returns a object containing a `publicKey` & `secretKey` generated from the supplied seed.

**`example`** 
<BR>

```javascript
import { naclKeypairFromSeed } from '@polkadot/util-crypto';

naclKeypairFromSeed(...); // => { secretKey: [...], publicKey: [...] }
```

**Parameters:**

Name | Type |
------ | ------ |
`seed` | Uint8Array |

**Returns:** *[Keypair](../interfaces/_types_.keypair.md)*
