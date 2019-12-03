[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["trieRootOrdered"](_trierootordered_.md)

# External module: "trieRootOrdered"

## Index

### Functions

* [trieRootOrdered](_trierootordered_.md#trierootordered)

## Functions

###  trieRootOrdered

▸ **trieRootOrdered**(`input`: Uint8Array[], `codec`: Codec): *Uint8Array*

*Defined in [trieRootOrdered.ts:31](https://github.com/polkadot-js/common/blob/c988d5011/packages/trie-hash/src/trieRootOrdered.ts#L31)*

**`name`** trieRootOrdered

**`summary`** Creates a trie hash from the supplied values.

**`description`** 
From an `Array<Uint8Array>` input, calculate the ordered triehash and return the result as a `Uint8Array`.

**`example`** 
<BR>

```javascript
import { stringToU8a } from '@polkadot/util';
import { trieRootOrdered } from '@polkadot/trie-hash';

trieRootOrdered([
  stringToU8a('doe'),
  stringToU8a('reindeer')
]); // => 0xe766d5d51b89dc39d981b41bda63248d7abce4f0225eefd023792a540bcffee3
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`input` | Uint8Array[] | - |
`codec` | Codec |  DEFAULT_CODEC |

**Returns:** *Uint8Array*
