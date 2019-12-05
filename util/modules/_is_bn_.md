[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["is/bn"](_is_bn_.md)

# External module: "is/bn"

## Index

### Functions

* [isBn](_is_bn_.md#isbn)

## Functions

###  isBn

▸ **isBn**(`value`: any): *value is BN*

*Defined in [is/bn.ts:23](https://github.com/polkadot-js/common/blob/408129d5/packages/util/src/is/bn.ts#L23)*

**`name`** isBn

**`summary`** Tests for a `BN` object instance.

**`description`** 
Checks to see if the input object is an instance of `BN` (bn.js).

**`example`** 
<BR>

```javascript
import BN from 'bn.js';
import { isBn } from '@polkadot/util';

console.log('isBn', isBn(new BN(1))); // => true
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is BN*
