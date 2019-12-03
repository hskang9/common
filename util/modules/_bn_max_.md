[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["bn/max"](_bn_max_.md)

# External module: "bn/max"

## Index

### Functions

* [max](_bn_max_.md#max)

## Functions

###  max

▸ **max**(...`items`: BN[]): *BN*

*Defined in [bn/max.ts:22](https://github.com/polkadot-js/common/blob/c988d5011/packages/util/src/bn/max.ts#L22)*

**`name`** max

**`summary`** Finds and returns the highest value in an array of BNs.

**`example`** 
<BR>

```javascript
import BN from 'bn.js';
import { max } from '@polkadot/util';

max([new BN(1), new BN(3), new BN(2)]).toString(); // => '3'
```

**Parameters:**

Name | Type |
------ | ------ |
`...items` | BN[] |

**Returns:** *BN*
