[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["nacl/keypair/fromRandom"](_nacl_keypair_fromrandom_.md)

# External module: "nacl/keypair/fromRandom"

## Index

### Functions

* [naclKeypairFromRandom](_nacl_keypair_fromrandom_.md#naclkeypairfromrandom)

## Functions

###  naclKeypairFromRandom

▸ **naclKeypairFromRandom**(): *[Keypair](../interfaces/_types_.keypair.md)*

*Defined in [nacl/keypair/fromRandom.ts:23](https://github.com/polkadot-js/common/blob/408129d5/packages/util-crypto/src/nacl/keypair/fromRandom.ts#L23)*

**`name`** naclKeypairFromRandom

**`summary`** Creates a new public/secret keypair.

**`description`** 
Returns a new generate object containing a `publicKey` & `secretKey`.

**`example`** 
<BR>

```javascript
import { naclKeypairFromRandom } from '@polkadot/util-crypto';

naclKeypairFromRandom(); // => { secretKey: [...], publicKey: [...] }
```

**Returns:** *[Keypair](../interfaces/_types_.keypair.md)*
