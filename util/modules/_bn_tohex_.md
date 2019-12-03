[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["bn/toHex"](_bn_tohex_.md)

# External module: "bn/toHex"

## Index

### Functions

* [bnToHex](_bn_tohex_.md#bntohex)

## Functions

###  bnToHex

▸ **bnToHex**(`value?`: BN | number | null, `options`: number | Options): *string*

*Defined in [bn/toHex.ts:33](https://github.com/polkadot-js/common/blob/c988d5011/packages/util/src/bn/toHex.ts#L33)*

**`name`** bnToHex

**`summary`** Creates a hex value from a BN.js bignumber object.

**`description`** 
`null` inputs returns a `0x` result, BN values return the actual value as a `0x` prefixed hex value. Anything that is not a BN object throws an error. With `bitLength` set, it fixes the number to the specified length.

**`example`** 
<BR>

```javascript
import BN from 'bn.js';
import { bnToHex } from '@polkadot/util';

bnToHex(new BN(0x123456)); // => '0x123456'
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value?` | BN &#124; number &#124; null | - |
`options` | number &#124; Options |  { bitLength: -1, isLe: false, isNegative: false } |

**Returns:** *string*
