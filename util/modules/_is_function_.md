[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["is/function"](_is_function_.md)

# External module: "is/function"

## Index

### Functions

* [isFunction](_is_function_.md#isfunction)

## Functions

###  isFunction

▸ **isFunction**(`value`: any): *value is Function*

*Defined in [is/function.ts:20](https://github.com/polkadot-js/common/blob/408129d5/packages/util/src/is/function.ts#L20)*

**`name`** isFunction

**`summary`** Tests for a `function`.

**`description`** 
Checks to see if the input value is a JavaScript function.

**`example`** 
<BR>

```javascript
import { isFunction } from '@polkadot/util';

isFunction(() => false); // => true
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Function*
