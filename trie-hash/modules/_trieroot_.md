[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["trieRoot"](_trieroot_.md)

# External module: "trieRoot"

## Index

### Functions

* [trieRoot](_trieroot_.md#trieroot)

## Functions

###  trieRoot

▸ **trieRoot**(`input`: [TriePair](../interfaces/_types_.triepair.md)[], `codec`: Codec): *Uint8Array*

*Defined in [trieRoot.ts:29](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-hash/src/trieRoot.ts#L29)*

**`name`** trieRoot

**`summary`** Creates a trie hash from the supplied pairs.

**`description`** 
From an `Array<{k: Uint8Array, v: Uint8Array}>` input, calculate the triehash and return the result as a `Uint8Array`.

**`example`** 
<BR>

```javascript
import { stringToU8a } from '@polkadot/util';
import { trieRoot } from '@polkadot/trie-hash';

trieRoot([{
  k: stringToU8a('A'),
  v: stringToU8a('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
}]); // => 0xd23786fb4a010da3ce639d66d5e904a11dbc02746d1ce25029e53290cabf28ab
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | [TriePair](../interfaces/_types_.triepair.md)[] | - |
`codec` | Codec |  DEFAULT_CODEC |

**Returns:** *Uint8Array*
