[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["blake2/asU8a"](_blake2_asu8a_.md)

# External module: "blake2/asU8a"

## Index

### Functions

* [blake2AsU8a](_blake2_asu8a_.md#blake2asu8a)

## Functions

###  blake2AsU8a

▸ **blake2AsU8a**(`data`: Uint8Array | string, `bitLength`: number, `key`: Uint8Array | null): *Uint8Array*

*Defined in [blake2/asU8a.ts:23](https://github.com/polkadot-js/common/blob/408129d5/packages/util-crypto/src/blake2/asU8a.ts#L23)*

**`name`** blake2AsU8a

**`summary`** Creates a blake2b u8a from the input.

**`description`** 
From a `Uint8Array` input, create the blake2b and return the result as a u8a with the specified `bitLength`.

**`example`** 
<BR>

```javascript
import { blake2AsU8a } from '@polkadot/util-crypto';

blake2AsU8a('abc'); // => [0xba, 0x80, 0xa53, 0xf98, 0x1c, 0x4d, 0x0d]
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | Uint8Array &#124; string | - |
`bitLength` | number | 256 |
`key` | Uint8Array &#124; null |  null |

**Returns:** *Uint8Array*
