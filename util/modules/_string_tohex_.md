[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["string/toHex"](_string_tohex_.md)

# External module: "string/toHex"

## Index

### Functions

* [stringToHex](_string_tohex_.md#stringtohex)

## Functions

###  stringToHex

▸ **stringToHex**(`value?`: undefined | string): *string*

*Defined in [string/toHex.ts:22](https://github.com/polkadot-js/common/blob/c988d5011/packages/util/src/string/toHex.ts#L22)*

**`name`** stringToHex

**`summary`** Creates a hex string from a utf-8 string

**`description`** 
String input values return the actual encoded hex value.

**`example`** 
<BR>

```javascript
import { stringToHex } from '@polkadot/util';

stringToU8a('hello'); // 0x68656c6c6f
```

**Parameters:**

Name | Type |
------ | ------ |
`value?` | undefined &#124; string |

**Returns:** *string*
