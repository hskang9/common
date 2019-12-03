[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["xxhash/asHex"](_xxhash_ashex_.md)

# External module: "xxhash/asHex"

## Index

### Functions

* [xxhashAsHex](_xxhash_ashex_.md#xxhashashex)

## Functions

###  xxhashAsHex

▸ **xxhashAsHex**(`data`: Buffer | Uint8Array | string, `bitLength`: number): *string*

*Defined in [xxhash/asHex.ts:23](https://github.com/polkadot-js/common/blob/c988d5011/packages/util-crypto/src/xxhash/asHex.ts#L23)*

**`name`** xxhashAsHex

**`summary`** Creates a xxhash64 hex from the input.

**`description`** 
From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash64 and return the result as a hex string with the specified `bitLength`.

**`example`** 
<BR>

```javascript
import { xxhashAsHex } from '@polkadot/util-crypto';

xxhashAsHex('abc'); // => 0x44bc2cf5ad770999
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | Buffer &#124; Uint8Array &#124; string | - |
`bitLength` | number | 64 |

**Returns:** *string*
