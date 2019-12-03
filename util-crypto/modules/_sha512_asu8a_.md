[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["sha512/asU8a"](_sha512_asu8a_.md)

# External module: "sha512/asU8a"

## Index

### Functions

* [sha512AsU8a](_sha512_asu8a_.md#sha512asu8a)

## Functions

###  sha512AsU8a

▸ **sha512AsU8a**(`data`: Uint8Array): *Uint8Array*

*Defined in [sha512/asU8a.ts:22](https://github.com/polkadot-js/common/blob/c988d5011/packages/util-crypto/src/sha512/asU8a.ts#L22)*

**`name`** sha512AsU8a

**`summary`** Creates sha-512 hash of the input.

**`description`** 
Returns a sha-512 `Uint8Array` from the supplied data.

**`example`** 
<BR>

```javascript
import { sha512AsU8a } from '@polkadot/util-crypto';

sha512AsU8a(Uint8Array.from([...])); // => Uint8Array([...])
```

**Parameters:**

Name | Type |
------ | ------ |
`data` | Uint8Array |

**Returns:** *Uint8Array*
