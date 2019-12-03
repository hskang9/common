[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["hex/toBn"](_hex_tobn_.md)

# External module: "hex/toBn"

## Index

### Functions

* [hexToBn](_hex_tobn_.md#hextobn)

## Functions

###  hexToBn

▸ **hexToBn**(`value?`: string | number | null, `options`: [ToBnOptions](../interfaces/_types_.tobnoptions.md) | boolean): *BN*

*Defined in [hex/toBn.ts:35](https://github.com/polkadot-js/common/blob/c988d5011/packages/util/src/hex/toBn.ts#L35)*

**`name`** hexToBn

**`summary`** Creates a BN.js bignumber object from a hex string.

**`description`** 
`null` inputs returns a `BN(0)` result. Hex input values return the actual value converted to a BN. Anything that is not a hex string (including the `0x` prefix) throws an error.

**`example`** 
<BR>

```javascript
import { hexToBn } from '@polkadot/util';

hexToBn('0x123480001f'); // => BN(0x123480001f)
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value?` | string &#124; number &#124; null | - |
`options` | [ToBnOptions](../interfaces/_types_.tobnoptions.md) &#124; boolean |  { isLe: false, isNegative: false } |

**Returns:** *BN*
