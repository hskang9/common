[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["nacl/encrypt"](_nacl_encrypt_.md)

# External module: "nacl/encrypt"

## Index

### Functions

* [naclEncrypt](_nacl_encrypt_.md#naclencrypt)

## Functions

###  naclEncrypt

▸ **naclEncrypt**(`message`: Uint8Array, `secret`: Uint8Array, `nonce`: Uint8Array): *Encrypted*

*Defined in [nacl/encrypt.ts:28](https://github.com/polkadot-js/common/blob/408129d5/packages/util-crypto/src/nacl/encrypt.ts#L28)*

**`name`** naclEncrypt

**`summary`** Encrypts a message using the supplied secretKey and nonce

**`description`** 
Returns an encrypted message, using the `secretKey` and `nonce`. If the `nonce` was not supplied, a random value is generated.

**`example`** 
<BR>

```javascript
import { naclEncrypt } from '@polkadot/util-crypto';

naclEncrypt([...], [...]); // => [...]
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | Uint8Array | - |
`secret` | Uint8Array | - |
`nonce` | Uint8Array |  randomAsU8a(24) |

**Returns:** *Encrypted*
