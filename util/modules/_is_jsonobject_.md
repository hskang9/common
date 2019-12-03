[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["is/jsonObject"](_is_jsonobject_.md)

# External module: "is/jsonObject"

## Index

### Functions

* [isJsonObject](_is_jsonobject_.md#isjsonobject)

## Functions

###  isJsonObject

▸ **isJsonObject**(`value`: any): *value is ObjectIndexed*

*Defined in [is/jsonObject.ts:36](https://github.com/polkadot-js/common/blob/c988d5011/packages/util/src/is/jsonObject.ts#L36)*

**`name`** isJsonObject

**`summary`** Tests for a valid JSON `object`.

**`description`** 
Checks to see if the input value is a valid JSON object.
It returns false if the input is JSON parsable, but not an Javascript object.

**`example`** 
<BR>

```javascript
import { isJsonObject } from '@polkadot/util';

isJsonObject({}); // => true
isJsonObject({
 "Test": "1234",
 "NestedTest": {
  "Test": "5678"
 }
}); // => true
isJsonObject(1234); // JSON parsable, but not an object =>  false
isJsonObject(null); // JSON parsable, but not an object => false
isJsonObject('not an object'); // => false
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is ObjectIndexed*
