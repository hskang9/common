[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["random/asU8a"](_random_asu8a_.md)

# External module: "random/asU8a"

## Index

### Functions

* [randomAsU8a](_random_asu8a_.md#randomasu8a)

## Functions

###  randomAsU8a

▸ **randomAsU8a**(`length`: number): *Uint8Array*

*Defined in [random/asU8a.ts:21](https://github.com/polkadot-js/common/blob/c988d5011/packages/util-crypto/src/random/asU8a.ts#L21)*

**`name`** randomAsU8a

**`summary`** Creates a Uint8Array filled with random bytes.

**`description`** 
Returns a `Uint8Array` with the specified (optional) length filled with random bytes.

**`example`** 
<BR>

```javascript
import { randomAsU8a } from '@polkadot/util-crypto';

randomAsU8a(); // => Uint8Array([...])
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`length` | number | 32 |

**Returns:** *Uint8Array*
