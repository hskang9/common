[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["u8a/fixLength"](_u8a_fixlength_.md)

# External module: "u8a/fixLength"

## Index

### Functions

* [u8aFixLength](_u8a_fixlength_.md#u8afixlength)

## Functions

###  u8aFixLength

▸ **u8aFixLength**(`value`: Uint8Array, `bitLength`: number, `atStart`: boolean): *Uint8Array*

*Defined in [u8a/fixLength.ts:21](https://github.com/polkadot-js/common/blob/408129d5/packages/util/src/u8a/fixLength.ts#L21)*

**`name`** u8aFixLength

**`summary`** Shifts a Uint8Array to a specific bitLength

**`description`** 
Returns a uint8Array with the specified number of bits contained in the return value. (If bitLength is -1, length checking is not done). Values with more bits are trimmed to the specified length.

**`example`** 
<BR>

```javascript
import { u8aFixLength } from '@polkadot/util';

u8aFixLength('0x12') // => 0x12
u8aFixLength('0x12', 16) // => 0x0012
u8aFixLength('0x1234', 8) // => 0x12
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | Uint8Array | - |
`bitLength` | number |  -1 |
`atStart` | boolean | false |

**Returns:** *Uint8Array*
