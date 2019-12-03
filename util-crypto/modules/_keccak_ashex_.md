[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["keccak/asHex"](_keccak_ashex_.md)

# External module: "keccak/asHex"

## Index

### Functions

* [keccakAsHex](_keccak_ashex_.md#keccakashex)

## Functions

###  keccakAsHex

▸ **keccakAsHex**(`value`: Buffer | Uint8Array | string): *string*

*Defined in [keccak/asHex.ts:23](https://github.com/polkadot-js/common/blob/c988d5011/packages/util-crypto/src/keccak/asHex.ts#L23)*

**`name`** keccakAsHex

**`summary`** Creates a keccak hex string from the input.

**`description`** 
From either a `string` or a `Buffer` input, create the keccak and return the result as a `0x` prefixed hex string.

**`example`** 
<BR>

```javascript
import { keccakAsHex } from '@polkadot/util-crypto';

keccakAsHex('123'); // => 0x...
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | Buffer &#124; Uint8Array &#124; string |

**Returns:** *string*
