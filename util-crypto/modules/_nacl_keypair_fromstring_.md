[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["nacl/keypair/fromString"](_nacl_keypair_fromstring_.md)

# External module: "nacl/keypair/fromString"

## Index

### Functions

* [naclKeypairFromString](_nacl_keypair_fromstring_.md#naclkeypairfromstring)

## Functions

###  naclKeypairFromString

▸ **naclKeypairFromString**(`value`: string): *[Keypair](../interfaces/_types_.keypair.md)*

*Defined in [nacl/keypair/fromString.ts:26](https://github.com/polkadot-js/common/blob/c988d5011/packages/util-crypto/src/nacl/keypair/fromString.ts#L26)*

**`name`** naclKeypairFromString

**`summary`** Creates a new public/secret keypair from a string.

**`description`** 
Returns a object containing a `publicKey` & `secretKey` generated from the supplied string. The string is hashed and the value used as the input seed.

**`example`** 
<BR>

```javascript
import { naclKeypairFromString } from '@polkadot/util-crypto';

naclKeypairFromString('test'); // => { secretKey: [...], publicKey: [...] }
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[Keypair](../interfaces/_types_.keypair.md)*
