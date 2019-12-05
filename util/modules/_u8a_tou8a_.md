[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["u8a/toU8a"](_u8a_tou8a_.md)

# External module: "u8a/toU8a"

## Index

### Functions

* [u8aToU8a](_u8a_tou8a_.md#u8atou8a)

## Functions

###  u8aToU8a

▸ **u8aToU8a**(`value?`: number[] | Buffer | Uint8Array | string | null): *Uint8Array*

*Defined in [u8a/toU8a.ts:27](https://github.com/polkadot-js/common/blob/408129d5/packages/util/src/u8a/toU8a.ts#L27)*

**`name`** u8aToU8a

**`summary`** Creates a Uint8Array value from a Uint8Array, Buffer, string or hex input.

**`description`** 
`null` ior `undefined` nputs returns a `[]` result, Uint8Array values returns the value, hex strings returns a Uint8Array representation.

**`example`** 
<BR>

```javascript
import { u8aToU8a } from '@polkadot/util';

u8aToU8a(new Uint8Array([0x12, 0x34]); // => Uint8Array([0x12, 0x34])
u8aToU8a(0x1234); // => Uint8Array([0x12, 0x34])
```

**Parameters:**

Name | Type |
------ | ------ |
`value?` | number[] &#124; Buffer &#124; Uint8Array &#124; string &#124; null |

**Returns:** *Uint8Array*
