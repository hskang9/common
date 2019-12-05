[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["compact/addLength"](_compact_addlength_.md)

# External module: "compact/addLength"

## Index

### Functions

* [compactAddLength](_compact_addlength_.md#compactaddlength)

## Functions

###  compactAddLength

▸ **compactAddLength**(`input`: Uint8Array): *Uint8Array*

*Defined in [compact/addLength.ts:20](https://github.com/polkadot-js/common/blob/408129d5/packages/util/src/compact/addLength.ts#L20)*

**`name`** compactAddLength

**`description`** Adds a length prefix to the input value

**`example`** 
<BR>

```javascript
import { compactAddLength } from '@polkadot/util';

console.log(compactAddLength(new Uint8Array([0xde, 0xad, 0xbe, 0xef]))); // Uint8Array([4 << 2, 0xde, 0xad, 0xbe, 0xef])
```

**Parameters:**

Name | Type |
------ | ------ |
`input` | Uint8Array |

**Returns:** *Uint8Array*
