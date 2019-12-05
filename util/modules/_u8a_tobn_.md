[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["u8a/toBn"](_u8a_tobn_.md)

# External module: "u8a/toBn"

## Index

### Functions

* [u8aToBn](_u8a_tobn_.md#u8atobn)

## Functions

###  u8aToBn

▸ **u8aToBn**(`value`: Uint8Array, `options`: [ToBnOptions](../interfaces/_types_.tobnoptions.md) | boolean): *BN*

*Defined in [u8a/toBn.ts:29](https://github.com/polkadot-js/common/blob/408129d5/packages/util/src/u8a/toBn.ts#L29)*

**`name`** u8aToBn

**`summary`** Creates a BN from a Uint8Array object.

**`description`** 
`UInt8Array` input values return the actual BN. `null` or `undefined` values returns an `0x0` value.

**`example`** 
<BR>

```javascript
import { u8aToBn } from '@polkadot/util';

u8aToHex(new Uint8Array([0x68, 0x65, 0x6c, 0x6c, 0xf])); // 0x68656c0f
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | Uint8Array | - | The value to convert |
`options` | [ToBnOptions](../interfaces/_types_.tobnoptions.md) &#124; boolean |  { isLe: true, isNegative: false } | Options to pass while converting |

**Returns:** *BN*
