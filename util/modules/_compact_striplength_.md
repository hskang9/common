[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["compact/stripLength"](_compact_striplength_.md)

# External module: "compact/stripLength"

## Index

### Functions

* [compactStripLength](_compact_striplength_.md#compactstriplength)

## Functions

###  compactStripLength

▸ **compactStripLength**(`input`: Uint8Array, `bitLength`: [BitLength](_compact_types_.md#bitlength)): *[number, Uint8Array]*

*Defined in [compact/stripLength.ts:22](https://github.com/polkadot-js/common/blob/c988d5011/packages/util/src/compact/stripLength.ts#L22)*

**`name`** compactStripLength

**`description`** Removes the length prefix, returning both the total length (including the value + compact encoding) and the decoded value with the correct length

**`example`** 
<BR>

```javascript
import { compactStripLength } from '@polkadot/util';

console.log(compactStripLength(new Uint8Array([2 << 2, 0xde, 0xad]))); // [2, Uint8Array[0xde, 0xad]]
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | Uint8Array | - |
`bitLength` | [BitLength](_compact_types_.md#bitlength) |  DEFAULT_BITLENGTH |

**Returns:** *[number, Uint8Array]*
