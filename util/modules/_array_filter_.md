[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["array/filter"](_array_filter_.md)

# External module: "array/filter"

## Index

### Functions

* [arrayFilter](_array_filter_.md#arrayfilter)

## Functions

###  arrayFilter

▸ **arrayFilter**(`array`: any[], `allowNulls`: boolean): *any[]*

*Defined in [array/filter.ts:24](https://github.com/polkadot-js/common/blob/c988d5011/packages/util/src/array/filter.ts#L24)*

**`name`** arrayFilter

**`summary`** Filters undefined and (optionally) null values from an array

**`description`** 
Returns a new array with all `undefined` values removed. Optionally, when `allowNulls = false`, it removes the `null` values as well

**`example`** 
<BR>

```javascript
import { arrayFilter } from '@polkadot/util';

arrayFilter([0, void 0, true, null, false, '']); // [0, true, null, false, '']
arrayFilter([0, void 0, true, null, false, ''], false); // [0, true, false, '']
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`array` | any[] | - |
`allowNulls` | boolean | true |

**Returns:** *any[]*
