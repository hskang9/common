[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["compact/fromU8a"](_compact_fromu8a_.md)

# External module: "compact/fromU8a"

## Index

### Functions

* [compactFromU8a](_compact_fromu8a_.md#compactfromu8a)

## Functions

###  compactFromU8a

▸ **compactFromU8a**(`_input`: Uint8Array | string, `bitLength`: [BitLength](_compact_types_.md#bitlength)): *[number, BN]*

*Defined in [compact/fromU8a.ts:27](https://github.com/polkadot-js/common/blob/408129d5/packages/util/src/compact/fromU8a.ts#L27)*

**`name`** compactFromU8a

**`description`** Retrievs the offset and encoded length from a compact-prefixed value

**`example`** 
<BR>

```javascript
import { compactFromU8a } from '@polkadot/util';

const [offset, length] = compactFromU8a(new Uint8Array([254, 255, 3, 0]), 32));

console.log('value offset=', offset, 'length=', length); // 4, 0xffff
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_input` | Uint8Array &#124; string | - |
`bitLength` | [BitLength](_compact_types_.md#bitlength) |  DEFAULT_BITLENGTH |

**Returns:** *[number, BN]*
