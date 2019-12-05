[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["nacl/keypair/fromSecret"](_nacl_keypair_fromsecret_.md)

# External module: "nacl/keypair/fromSecret"

## Index

### Functions

* [naclKeypairFromSecret](_nacl_keypair_fromsecret_.md#naclkeypairfromsecret)

## Functions

###  naclKeypairFromSecret

▸ **naclKeypairFromSecret**(`secret`: Uint8Array): *[Keypair](../interfaces/_types_.keypair.md)*

*Defined in [nacl/keypair/fromSecret.ts:23](https://github.com/polkadot-js/common/blob/408129d5/packages/util-crypto/src/nacl/keypair/fromSecret.ts#L23)*

**`name`** naclKeypairFromSecret

**`summary`** Creates a new public/secret keypair from a secret.

**`description`** 
Returns a object containing a `publicKey` & `secretKey` generated from the supplied secret.

**`example`** 
<BR>

```javascript
import { naclKeypairFromSecret } from '@polkadot/util-crypto';

naclKeypairFromSecret(...); // => { secretKey: [...], publicKey: [...] }
```

**Parameters:**

Name | Type |
------ | ------ |
`secret` | Uint8Array |

**Returns:** *[Keypair](../interfaces/_types_.keypair.md)*
