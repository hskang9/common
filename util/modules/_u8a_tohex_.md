[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["u8a/toHex"](_u8a_tohex_.md)

# External module: "u8a/toHex"

## Index

### Functions

* [u8aToHex](_u8a_tohex_.md#u8atohex)

## Functions

###  u8aToHex

▸ **u8aToHex**(`value?`: Uint8Array | null, `bitLength`: number, `isPrefixed`: boolean): *string*

*Defined in [u8a/toHex.ts:21](https://github.com/polkadot-js/common/blob/408129d5/packages/util/src/u8a/toHex.ts#L21)*

**`name`** u8aToHex

**`summary`** Creates a hex string from a Uint8Array object.

**`description`** 
`UInt8Array` input values return the actual hex string. `null` or `undefined` values returns an `0x` string.

**`example`** 
<BR>

```javascript
import { u8aToHex } from '@polkadot/util';

u8aToHex(new Uint8Array([0x68, 0x65, 0x6c, 0x6c, 0xf])); // 0x68656c0f
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value?` | Uint8Array &#124; null | - |
`bitLength` | number |  -1 |
`isPrefixed` | boolean | true |

**Returns:** *string*
