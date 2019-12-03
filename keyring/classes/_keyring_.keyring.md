[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["keyring"](../modules/_keyring_.md) › [Keyring](_keyring_.keyring.md)

# Class: Keyring

# @polkadot/keyring

## Overview

**`name`** Keyring

**`summary`** Keyring management of user accounts

**`description`** Allows generation of keyring pairs from a variety of input combinations, such as
json object containing account address or public key, account metadata, and account encoded using
`addFromJson`, or by providing those values as arguments separately to `addFromAddress`,
or by providing the mnemonic (seed phrase) and account metadata as arguments to `addFromMnemonic`.
Stores the keyring pairs in a keyring pair dictionary. Removal of the keyring pairs from the keyring pair
dictionary is achieved using `removePair`. Retrieval of all the stored pairs via `getPairs` or perform
lookup of a pair for a given account address or public key using `getPair`. JSON metadata associated with
an account may be obtained using `toJson` accompanied by the account passphrase.

## Hierarchy

* **Keyring**

## Implements

* [KeyringInstance](../interfaces/_types_.keyringinstance.md)

## Index

### Constructors

* [constructor](_keyring_.keyring.md#constructor)

### Properties

* [decodeAddress](_keyring_.keyring.md#decodeaddress)
* [encodeAddress](_keyring_.keyring.md#encodeaddress)
* [setSS58Format](_keyring_.keyring.md#setss58format)

### Accessors

* [pairs](_keyring_.keyring.md#pairs)
* [publicKeys](_keyring_.keyring.md#publickeys)
* [type](_keyring_.keyring.md#type)

### Methods

* [addFromAddress](_keyring_.keyring.md#addfromaddress)
* [addFromJson](_keyring_.keyring.md#addfromjson)
* [addFromMnemonic](_keyring_.keyring.md#addfrommnemonic)
* [addFromSeed](_keyring_.keyring.md#addfromseed)
* [addFromUri](_keyring_.keyring.md#addfromuri)
* [addPair](_keyring_.keyring.md#addpair)
* [createFromUri](_keyring_.keyring.md#createfromuri)
* [getPair](_keyring_.keyring.md#getpair)
* [getPairs](_keyring_.keyring.md#getpairs)
* [getPublicKeys](_keyring_.keyring.md#getpublickeys)
* [removePair](_keyring_.keyring.md#removepair)
* [toJson](_keyring_.keyring.md#tojson)

## Constructors

###  constructor

\+ **new Keyring**(`options`: [KeyringOptions](../interfaces/_types_.keyringoptions.md)): *[Keyring](_keyring_.keyring.md)*

*Defined in [keyring.ts:40](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/keyring.ts#L40)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [KeyringOptions](../interfaces/_types_.keyringoptions.md) |  {} |

**Returns:** *[Keyring](_keyring_.keyring.md)*

## Properties

###  decodeAddress

• **decodeAddress**: *decode* =  decodeAddress

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md).[decodeAddress](../interfaces/_types_.keyringinstance.md#decodeaddress)*

*Defined in [keyring.ts:36](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/keyring.ts#L36)*

___

###  encodeAddress

• **encodeAddress**: *encode* =  encodeAddress

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md).[encodeAddress](../interfaces/_types_.keyringinstance.md#encodeaddress)*

*Defined in [keyring.ts:38](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/keyring.ts#L38)*

___

###  setSS58Format

• **setSS58Format**: *setSS58Format* =  setSS58Format

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md).[setSS58Format](../interfaces/_types_.keyringinstance.md#setss58format)*

*Defined in [keyring.ts:40](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/keyring.ts#L40)*

## Accessors

###  pairs

• **get pairs**(): *[KeyringPair](../interfaces/_types_.keyringpair.md)[]*

*Defined in [keyring.ts:61](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/keyring.ts#L61)*

**`description`** retrieve the pairs (alias for getPairs)

**Returns:** *[KeyringPair](../interfaces/_types_.keyringpair.md)[]*

___

###  publicKeys

• **get publicKeys**(): *Uint8Array[]*

*Defined in [keyring.ts:68](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/keyring.ts#L68)*

**`description`** retrieve the publicKeys (alias for getPublicKeys)

**Returns:** *Uint8Array[]*

___

###  type

• **get type**(): *KeypairType*

*Defined in [keyring.ts:75](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/keyring.ts#L75)*

**`description`** Returns the type of the keyring, either ed25519 of sr25519

**Returns:** *KeypairType*

## Methods

###  addFromAddress

▸ **addFromAddress**(`address`: string | Uint8Array, `meta`: [KeyringPair$Meta](../interfaces/_types_.keyringpair_meta.md), `encoded`: Uint8Array | null, `type`: KeypairType, `ignoreChecksum?`: undefined | false | true): *[KeyringPair](../interfaces/_types_.keyringpair.md)*

*Defined in [keyring.ts:95](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/keyring.ts#L95)*

**`name`** addFromAddress

**`summary`** Stores an account, given an account address, as a Key/Value (public key, pair) in Keyring Pair Dictionary

**`description`** Allows user to explicitely provide separate inputs including account address or public key, and optionally
the associated account metadata, and the default encoded value as arguments (that may be obtained from the json file
of an account backup), and then generates a keyring pair from them that it passes to
`addPair` to stores in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`address` | string &#124; Uint8Array | - |
`meta` | [KeyringPair$Meta](../interfaces/_types_.keyringpair_meta.md) |  {} |
`encoded` | Uint8Array &#124; null |  null |
`type` | KeypairType |  this.type |
`ignoreChecksum?` | undefined &#124; false &#124; true | - |

**Returns:** *[KeyringPair](../interfaces/_types_.keyringpair.md)*

___

###  addFromJson

▸ **addFromJson**(`__namedParameters`: object, `ignoreChecksum?`: undefined | false | true): *[KeyringPair](../interfaces/_types_.keyringpair.md)*

*Defined in [keyring.ts:108](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/keyring.ts#L108)*

**`name`** addFromJson

**`summary`** Stores an account, given JSON data, as a Key/Value (public key, pair) in Keyring Pair Dictionary

**`description`** Allows user to provide a json object argument that contains account information (that may be obtained from the json file
of an account backup), and then generates a keyring pair from it that it passes to
`addPair` to stores in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |
`ignoreChecksum?` | undefined &#124; false &#124; true |

**Returns:** *[KeyringPair](../interfaces/_types_.keyringpair.md)*

___

###  addFromMnemonic

▸ **addFromMnemonic**(`mnemonic`: string, `meta`: [KeyringPair$Meta](../interfaces/_types_.keyringpair_meta.md), `type`: KeypairType): *[KeyringPair](../interfaces/_types_.keyringpair.md)*

*Defined in [keyring.ts:124](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/keyring.ts#L124)*

**`name`** addFromMnemonic

**`summary`** Stores an account, given a mnemonic, as a Key/Value (public key, pair) in Keyring Pair Dictionary

**`description`** Allows user to provide a mnemonic (seed phrase that is provided when account is originally created)
argument and a metadata argument that contains account information (that may be obtained from the json file
of an account backup), and then generates a keyring pair from it that it passes to
`addPair` to stores in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`mnemonic` | string | - |
`meta` | [KeyringPair$Meta](../interfaces/_types_.keyringpair_meta.md) |  {} |
`type` | KeypairType |  this.type |

**Returns:** *[KeyringPair](../interfaces/_types_.keyringpair.md)*

___

###  addFromSeed

▸ **addFromSeed**(`seed`: Uint8Array, `meta`: [KeyringPair$Meta](../interfaces/_types_.keyringpair_meta.md), `type`: KeypairType): *[KeyringPair](../interfaces/_types_.keyringpair.md)*

*Defined in [keyring.ts:135](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/keyring.ts#L135)*

**`name`** addFromSeed

**`summary`** Stores an account, given seed data, as a Key/Value (public key, pair) in Keyring Pair Dictionary

**`description`** Stores in a keyring pair dictionary the public key of the pair as a key and the pair as the associated value.
Allows user to provide the account seed as an argument, and then generates a keyring pair from it that it passes to
`addPair` to store in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`seed` | Uint8Array | - |
`meta` | [KeyringPair$Meta](../interfaces/_types_.keyringpair_meta.md) |  {} |
`type` | KeypairType |  this.type |

**Returns:** *[KeyringPair](../interfaces/_types_.keyringpair.md)*

___

###  addFromUri

▸ **addFromUri**(`suri`: string, `meta`: [KeyringPair$Meta](../interfaces/_types_.keyringpair_meta.md), `type`: KeypairType): *[KeyringPair](../interfaces/_types_.keyringpair.md)*

*Defined in [keyring.ts:148](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/keyring.ts#L148)*

**`name`** addFromUri

**`summary`** Creates an account via an suri

**`description`** Extracts the phrase, path and password from a SURI format for specifying secret keys `<secret>/<soft-key>//<hard-key>///<password>` (the `///password` may be omitted, and `/<soft-key>` and `//<hard-key>` maybe repeated and mixed). The secret can be a hex string, mnemonic phrase or a string (to be padded)

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`suri` | string | - |
`meta` | [KeyringPair$Meta](../interfaces/_types_.keyringpair_meta.md) |  {} |
`type` | KeypairType |  this.type |

**Returns:** *[KeyringPair](../interfaces/_types_.keyringpair.md)*

___

###  addPair

▸ **addPair**(`pair`: [KeyringPair](../interfaces/_types_.keyringpair.md)): *[KeyringPair](../interfaces/_types_.keyringpair.md)*

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md)*

*Defined in [keyring.ts:83](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/keyring.ts#L83)*

**`name`** addPair

**`summary`** Stores an account, given a keyring pair, as a Key/Value (public key, pair) in Keyring Pair Dictionary

**Parameters:**

Name | Type |
------ | ------ |
`pair` | [KeyringPair](../interfaces/_types_.keyringpair.md) |

**Returns:** *[KeyringPair](../interfaces/_types_.keyringpair.md)*

___

###  createFromUri

▸ **createFromUri**(`_suri`: string, `meta`: [KeyringPair$Meta](../interfaces/_types_.keyringpair_meta.md), `type`: KeypairType): *[KeyringPair](../interfaces/_types_.keyringpair.md)*

*Defined in [keyring.ts:159](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/keyring.ts#L159)*

**`name`** createFromUri

**`summry`** Creates a Keypair from an suri

**`description`** This creates a pair from the suri, but does not add it to the keyring

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`_suri` | string | - |
`meta` | [KeyringPair$Meta](../interfaces/_types_.keyringpair_meta.md) |  {} |
`type` | KeypairType |  this.type |

**Returns:** *[KeyringPair](../interfaces/_types_.keyringpair.md)*

___

###  getPair

▸ **getPair**(`address`: string | Uint8Array): *[KeyringPair](../interfaces/_types_.keyringpair.md)*

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md)*

*Defined in [keyring.ts:200](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/keyring.ts#L200)*

**`name`** getPair

**`summary`** Retrieves an account keyring pair from the Keyring Pair Dictionary, given an account address

**`description`** Returns a keyring pair value from the keyring pair dictionary by performing
a key lookup using the provided account address or public key (after decoding it).

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

**Returns:** *[KeyringPair](../interfaces/_types_.keyringpair.md)*

___

###  getPairs

▸ **getPairs**(): *[KeyringPair](../interfaces/_types_.keyringpair.md)[]*

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md)*

*Defined in [keyring.ts:209](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/keyring.ts#L209)*

**`name`** getPairs

**`summary`** Retrieves all account keyring pairs from the Keyring Pair Dictionary

**`description`** Returns an array list of all the keyring pair values that are stored in the keyring pair dictionary.

**Returns:** *[KeyringPair](../interfaces/_types_.keyringpair.md)[]*

___

###  getPublicKeys

▸ **getPublicKeys**(): *Uint8Array[]*

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md)*

*Defined in [keyring.ts:218](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/keyring.ts#L218)*

**`name`** getPublicKeys

**`summary`** Retrieves Public Keys of all Keyring Pairs stored in the Keyring Pair Dictionary

**`description`** Returns an array list of all the public keys associated with each of the keyring pair values that are stored in the keyring pair dictionary.

**Returns:** *Uint8Array[]*

___

###  removePair

▸ **removePair**(`address`: string | Uint8Array): *void*

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md)*

*Defined in [keyring.ts:230](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/keyring.ts#L230)*

**`name`** removePair

**`description`** Deletes the provided input address or public key from the stored Keyring Pair Dictionary.

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

**Returns:** *void*

___

###  toJson

▸ **toJson**(`address`: string | Uint8Array, `passphrase?`: undefined | string): *[KeyringPair$Json](../interfaces/_types_.keyringpair_json.md)*

*Implementation of [KeyringInstance](../interfaces/_types_.keyringinstance.md)*

*Defined in [keyring.ts:242](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/keyring.ts#L242)*

**`name`** toJson

**`summary`** Returns a JSON object associated with the input argument that contains metadata assocated with an account

**`description`** Returns a JSON object containing the metadata associated with an account
when valid address or public key and when the account passphrase is provided if the account secret
is not already unlocked and available in memory. Note that in [Polkadot-JS Apps](https://github.com/polkadot-js/apps) the user
may backup their account to a JSON file that contains this information.

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |
`passphrase?` | undefined &#124; string |

**Returns:** *[KeyringPair$Json](../interfaces/_types_.keyringpair_json.md)*
