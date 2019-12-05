[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["compact/toU8a"](_compact_tou8a_.md)

# External module: "compact/toU8a"

## Index

### Functions

* [compactToU8a](_compact_tou8a_.md#compacttou8a)

## Functions

###  compactToU8a

▸ **compactToU8a**(`_value`: BN | number): *Uint8Array*

*Defined in [compact/toU8a.ts:27](https://github.com/polkadot-js/common/blob/408129d5/packages/util/src/compact/toU8a.ts#L27)*

**`name`** compactToU8a

**`description`** Encodes a number into a compact representation

**`example`** 
<BR>

```javascript
import { compactToU8a } from '@polkadot/util';

console.log(compactToU8a(511, 32)); // Uint8Array([0b11111101, 0b00000111])
```

**Parameters:**

Name | Type |
------ | ------ |
`_value` | BN &#124; number |

**Returns:** *Uint8Array*
