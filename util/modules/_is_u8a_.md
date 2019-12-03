[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["is/u8a"](_is_u8a_.md)

# External module: "is/u8a"

## Index

### Functions

* [isU8a](_is_u8a_.md#isu8a)

## Functions

###  isU8a

▸ **isU8a**(`value?`: any): *value is Uint8Array*

*Defined in [is/u8a.ts:22](https://github.com/polkadot-js/common/blob/c988d5011/packages/util/src/is/u8a.ts#L22)*

**`name`** isU8a

**`summary`** Tests for a `Uint8Array` object instance.

**`description`** 
Checks to see if the input object is an instance of `Uint8Array`.

**`example`** 
<BR>

```javascript
import { isUint8Array } from '@polkadot/util';

console.log('isU8a', isU8a([])); // => false
```

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *value is Uint8Array*
