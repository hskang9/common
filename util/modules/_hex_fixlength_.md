[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["hex/fixLength"](_hex_fixlength_.md)

# External module: "hex/fixLength"

## Index

### Functions

* [hexFixLength](_hex_fixlength_.md#hexfixlength)

## Functions

###  hexFixLength

▸ **hexFixLength**(`value`: string, `bitLength`: number, `withPadding`: boolean): *string*

*Defined in [hex/fixLength.ts:24](https://github.com/polkadot-js/common/blob/408129d5/packages/util/src/hex/fixLength.ts#L24)*

**`name`** hexFixLength

**`summary`** Shifts a hex string to a specific bitLength

**`description`** 
Returns a `0x` prefixed string with the specified number of bits contained in the return value. (If bitLength is -1, length checking is not done). Values with more bits are trimmed to the specified length. Input values with less bits are returned as-is by default. When `withPadding` is set, shorter values are padded with `0`.

**`example`** 
<BR>

```javascript
import { hexFixLength } from '@polkadot/util';

console.log('fixed', hexFixLength('0x12', 16)); // => 0x12
console.log('fixed', hexFixLength('0x12', 16, true)); // => 0x0012
console.log('fixed', hexFixLength('0x0012', 8)); // => 0x12
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | string | - |
`bitLength` | number |  -1 |
`withPadding` | boolean | false |

**Returns:** *string*
