[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["bn/min"](_bn_min_.md)

# External module: "bn/min"

## Index

### Functions

* [min](_bn_min_.md#min)

## Functions

###  min

▸ **min**(...`items`: BN[]): *BN*

*Defined in [bn/min.ts:22](https://github.com/polkadot-js/common/blob/408129d5/packages/util/src/bn/min.ts#L22)*

**`name`** min

**`summary`** Finds and returns the smallest value in an array of BNs.

**`example`** 
<BR>

```javascript
import BN from 'bn.js';
import { min } from '@polkadot/util';

min([new BN(1), new BN(3), new BN(2)]).toString(); // => '1'
```

**Parameters:**

Name | Type |
------ | ------ |
`...items` | BN[] |

**Returns:** *BN*
