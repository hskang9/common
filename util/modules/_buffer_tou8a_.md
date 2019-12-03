[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["buffer/toU8a"](_buffer_tou8a_.md)

# External module: "buffer/toU8a"

## Index

### Functions

* [bufferToU8a](_buffer_tou8a_.md#buffertou8a)

## Functions

###  bufferToU8a

▸ **bufferToU8a**(`buffer?`: Buffer | number[] | null): *Uint8Array*

*Defined in [buffer/toU8a.ts:19](https://github.com/polkadot-js/common/blob/c988d5011/packages/util/src/buffer/toU8a.ts#L19)*

**`name`** bufferToU8a

**`summary`** Creates a Uint8Array value from a Buffer object.

**`description`** 
`null` inputs returns an empty result, `Buffer` values return the actual value as a `Uint8Array`. Anything that is not a `Buffer` object throws an error.

**`example`** 
<BR>

```javascript
import { bufferToU8a } from '@polkadot/util';

bufferToU8a(Buffer.from([1, 2, 3]));
```

**Parameters:**

Name | Type |
------ | ------ |
`buffer?` | Buffer &#124; number[] &#124; null |

**Returns:** *Uint8Array*
