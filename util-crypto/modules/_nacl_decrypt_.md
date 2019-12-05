[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["nacl/decrypt"](_nacl_decrypt_.md)

# External module: "nacl/decrypt"

## Index

### Functions

* [naclDecrypt](_nacl_decrypt_.md#nacldecrypt)

## Functions

###  naclDecrypt

▸ **naclDecrypt**(`encrypted`: Uint8Array, `nonce`: Uint8Array, `secret`: Uint8Array): *Uint8Array | null*

*Defined in [nacl/decrypt.ts:21](https://github.com/polkadot-js/common/blob/408129d5/packages/util-crypto/src/nacl/decrypt.ts#L21)*

**`name`** naclDecrypt

**`summary`** Decrypts a message using the supplied secretKey and nonce

**`description`** 
Returns an decrypted message, using the `secret` and `nonce`.

**`example`** 
<BR>

```javascript
import { naclDecrypt } from '@polkadot/util-crypto';

naclDecrypt([...], [...], [...]); // => [...]
```

**Parameters:**

Name | Type |
------ | ------ |
`encrypted` | Uint8Array |
`nonce` | Uint8Array |
`secret` | Uint8Array |

**Returns:** *Uint8Array | null*
