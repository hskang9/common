[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["number/toHex"](_number_tohex_.md)

# External module: "number/toHex"

## Index

### Functions

* [numberToHex](_number_tohex_.md#numbertohex)

## Functions

###  numberToHex

▸ **numberToHex**(`value?`: number | null, `bitLength`: number): *string*

*Defined in [number/toHex.ts:24](https://github.com/polkadot-js/common/blob/c988d5011/packages/util/src/number/toHex.ts#L24)*

**`name`** numberToHex

**`summary`** Creates a hex value from a number.

**`description`** 
`null`/`undefined`/`NaN` inputs returns an empty `0x` result. `number` input values return the actual bytes value converted to a `hex`. With `bitLength` set, it converts the number to the equivalent size.

**`example`** 
<BR>

```javascript
import { numberToHex } from '@polkadot/util';

numberToHex(0x1234); // => '0x1234'
numberToHex(0x1234, 32); // => 0x00001234
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value?` | number &#124; null | - |
`bitLength` | number |  -1 |

**Returns:** *string*
