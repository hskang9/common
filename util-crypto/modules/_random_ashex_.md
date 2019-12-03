[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["random/asHex"](_random_ashex_.md)

# External module: "random/asHex"

## Index

### Functions

* [randomAsHex](_random_ashex_.md#randomashex)

## Functions

###  randomAsHex

▸ **randomAsHex**(`length`: number): *string*

*Defined in [random/asHex.ts:23](https://github.com/polkadot-js/common/blob/c988d5011/packages/util-crypto/src/random/asHex.ts#L23)*

**`name`** randomAsHex

**`summary`** Creates a hex string filled with random bytes.

**`description`** 
Returns a hex string with the specified (optional) length filled with random bytes.

**`example`** 
<BR>

```javascript
import { randomAsHex } from '@polkadot/util-crypto';

randomAsHex(); // => 0x...
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`length` | number | 32 |

**Returns:** *string*
