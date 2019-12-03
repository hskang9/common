[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["keccak/asU8a"](_keccak_asu8a_.md)

# External module: "keccak/asU8a"

## Index

### Functions

* [keccakAsU8a](_keccak_asu8a_.md#keccakasu8a)

## Functions

###  keccakAsU8a

▸ **keccakAsU8a**(`value`: Buffer | Uint8Array | string): *Uint8Array*

*Defined in [keccak/asU8a.ts:23](https://github.com/polkadot-js/common/blob/c988d5011/packages/util-crypto/src/keccak/asU8a.ts#L23)*

**`name`** keccakAsU8a

**`summary`** Creates a keccak Uint8Array from the input.

**`description`** 
From either a `string` or a `Buffer` input, create the keccak and return the result as a `Uint8Array`.

**`example`** 
<BR>

```javascript
import { keccakAsU8a } from '@polkadot/util-crypto';

keccakAsU8a('123'); // => Uint8Array
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | Buffer &#124; Uint8Array &#124; string |

**Returns:** *Uint8Array*
