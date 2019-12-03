[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["util/fromNibbles"](_util_fromnibbles_.md)

# External module: "util/fromNibbles"

## Index

### Functions

* [fromNibbles](_util_fromnibbles_.md#fromnibbles)

## Functions

###  fromNibbles

▸ **fromNibbles**(`input`: Uint8Array): *Uint8Array*

*Defined in [util/fromNibbles.ts:19](https://github.com/polkadot-js/common/blob/c988d5011/packages/trie-codec/src/util/fromNibbles.ts#L19)*

**`name`** fromNibbles

**`summary`** Converts the input to Nibbles.

**`description`** 
From an `Uint8Array` input, calculate and return a list of nibbles that makes up the input.

**`example`** 
<BR>

```javascript
import { fromNibbles } from '@polkadot/trie-codec/util';

fromNibbles(new Uint8Array([4, 1, 2, 0])); // => Uint8Array([0x41, 0x20]
```

**Parameters:**

Name | Type |
------ | ------ |
`input` | Uint8Array |

**Returns:** *Uint8Array*
