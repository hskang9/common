[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["is/error"](_is_error_.md)

# External module: "is/error"

## Index

### Functions

* [isError](_is_error_.md#iserror)

## Functions

###  isError

▸ **isError**(`value`: any): *value is Error*

*Defined in [is/error.ts:22](https://github.com/polkadot-js/common/blob/c988d5011/packages/util/src/is/error.ts#L22)*

**`name`** isError

**`summary`** Tests for a `Error` object instance.

**`description`** 
Checks to see if the input object is an instance of `Error`.

**`example`** 
<BR>

```javascript
import { isError } from '@polkadot/util';

console.log('isError', isError(new Error('message'))); // => true
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Error*
