[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["util/toNibbles"](_util_tonibbles_.md)

# External module: "util/toNibbles"

## Index

### Functions

* [toNibbles](_util_tonibbles_.md#tonibbles)

## Functions

###  toNibbles

▸ **toNibbles**(`input?`: Uint8Array | null): *Uint8Array*

*Defined in [util/toNibbles.ts:19](https://github.com/polkadot-js/common/blob/c988d5011/packages/trie-codec/src/util/toNibbles.ts#L19)*

**`name`** toNibbles

**`summary`** Converts the input to Nibbles.

**`description`** 
From an `Uint8Array` input, calculate and return a list of nibbles that makes up the input.

**`example`** 
<BR>

```javascript
import { toNibbles } from '@polkadot/trie-codec/util';

toNibbles(new Uint8Array([0x41, 0x20]); // => Uint8Array([4, 1, 2, 0])
```

**Parameters:**

Name | Type |
------ | ------ |
`input?` | Uint8Array &#124; null |

**Returns:** *Uint8Array*
