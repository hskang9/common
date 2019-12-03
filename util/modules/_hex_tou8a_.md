[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["hex/toU8a"](_hex_tou8a_.md)

# External module: "hex/toU8a"

## Index

### Functions

* [hexToU8a](_hex_tou8a_.md#hextou8a)

## Functions

###  hexToU8a

▸ **hexToU8a**(`_value?`: string | null, `bitLength`: number): *Uint8Array*

*Defined in [hex/toU8a.ts:24](https://github.com/polkadot-js/common/blob/c988d5011/packages/util/src/hex/toU8a.ts#L24)*

**`name`** hexToU8a

**`summary`** Creates a Uint8Array object from a hex string.

**`description`** 
`null` inputs returns an empty `Uint8Array` result. Hex input values return the actual bytes value converted to a Uint8Array. Anything that is not a hex string (including the `0x` prefix) throws an error.

**`example`** 
<BR>

```javascript
import { hexToU8a } from '@polkadot/util';

hexToU8a('0x80001f'); // Uint8Array([0x80, 0x00, 0x1f])
hexToU8a('0x80001f', 32); // Uint8Array([0x00, 0x80, 0x00, 0x1f])
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_value?` | string &#124; null | - |
`bitLength` | number |  -1 |

**Returns:** *Uint8Array*
