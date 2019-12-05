[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["is/buffer"](_is_buffer_.md)

# External module: "is/buffer"

## Index

### Functions

* [isBuffer](_is_buffer_.md#isbuffer)

## Functions

###  isBuffer

▸ **isBuffer**(`value`: any): *value is Buffer*

*Defined in [is/buffer.ts:22](https://github.com/polkadot-js/common/blob/408129d5/packages/util/src/is/buffer.ts#L22)*

**`name`** isBuffer

**`summary`** Tests for a `Buffer` object instance.

**`description`** 
Checks to see if the input object is an instance of `Buffer`.

**`example`** 
<BR>

```javascript
import { isBuffer } from '@polkadot/util';

console.log('isBuffer', isBuffer(Buffer.from([]))); // => true
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *value is Buffer*
