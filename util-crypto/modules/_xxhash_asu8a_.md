[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["xxhash/asU8a"](_xxhash_asu8a_.md)

# External module: "xxhash/asU8a"

## Index

### Functions

* [xxhashAsU8a](_xxhash_asu8a_.md#xxhashasu8a)

## Functions

###  xxhashAsU8a

▸ **xxhashAsU8a**(`data`: Buffer | Uint8Array | string, `bitLength`: number): *Uint8Array*

*Defined in [xxhash/asU8a.ts:24](https://github.com/polkadot-js/common/blob/408129d5/packages/util-crypto/src/xxhash/asU8a.ts#L24)*

**`name`** xxhashAsU8a

**`summary`** Creates a xxhash64 u8a from the input.

**`description`** 
From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash64 and return the result as a `Uint8Array` with the specified `bitLength`.

**`example`** 
<BR>

```javascript
import { xxhashAsU8a } from '@polkadot/util-crypto';

xxhashAsU8a('abc'); // => 0x44bc2cf5ad770999
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | Buffer &#124; Uint8Array &#124; string | - |
`bitLength` | number | 64 |

**Returns:** *Uint8Array*
