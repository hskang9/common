[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["xxhash/xxhash64/asBn"](_xxhash_xxhash64_asbn_.md)

# External module: "xxhash/xxhash64/asBn"

## Index

### Functions

* [xxhash64AsBn](_xxhash_xxhash64_asbn_.md#xxhash64asbn)

## Functions

###  xxhash64AsBn

▸ **xxhash64AsBn**(`data`: Buffer | Uint8Array | string, `seed`: number): *BN*

*Defined in [xxhash/xxhash64/asBn.ts:23](https://github.com/polkadot-js/common/blob/408129d5/packages/util-crypto/src/xxhash/xxhash64/asBn.ts#L23)*

**`name`** xxhash64AsBn

**`summary`** Creates a xxhash BN from the input.

**`description`** 
From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash and return the result as a BN.

**`example`** 
<BR>

```javascript
import { xxhash64AsNumber } from '@polkadot/util-crypto';

xxhash64AsBn('abcd', 0xabcd)); // => new BN(0xe29f70f8b8c96df7)
```

**Parameters:**

Name | Type |
------ | ------ |
`data` | Buffer &#124; Uint8Array &#124; string |
`seed` | number |

**Returns:** *BN*
