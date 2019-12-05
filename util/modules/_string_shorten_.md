[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["string/shorten"](_string_shorten_.md)

# External module: "string/shorten"

## Index

### Functions

* [stringShorten](_string_shorten_.md#stringshorten)

## Functions

###  stringShorten

▸ **stringShorten**(`_value?`: any, `prefixLength`: number): *string*

*Defined in [string/shorten.ts:20](https://github.com/polkadot-js/common/blob/408129d5/packages/util/src/string/shorten.ts#L20)*

**`name`** stringShorten

**`summary`** Returns a string with maximum length

**`description`** 
Checks the string against the `prefixLength`, if longer than dopuble this, shortens it by placing `..` in the middle of it

**`example`** 
<BR>

```javascript
import { stringShorten } from '@polkadot/util';

stringShorten('1234567890', 2); // => 12..90
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_value?` | any | - |
`prefixLength` | number | 6 |

**Returns:** *string*
