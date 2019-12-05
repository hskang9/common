[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [KeyringInstance](_types_.keyringinstance.md)

# Interface: KeyringInstance

## Hierarchy

* **KeyringInstance**

## Implemented by

* [Keyring](../classes/_keyring_.keyring.md)

## Index

### Properties

* [pairs](_types_.keyringinstance.md#pairs)
* [publicKeys](_types_.keyringinstance.md#publickeys)
* [type](_types_.keyringinstance.md#type)

### Methods

* [addFromAddress](_types_.keyringinstance.md#addfromaddress)
* [addFromJson](_types_.keyringinstance.md#addfromjson)
* [addFromMnemonic](_types_.keyringinstance.md#addfrommnemonic)
* [addFromSeed](_types_.keyringinstance.md#addfromseed)
* [addFromUri](_types_.keyringinstance.md#addfromuri)
* [addPair](_types_.keyringinstance.md#addpair)
* [createFromUri](_types_.keyringinstance.md#createfromuri)
* [decodeAddress](_types_.keyringinstance.md#decodeaddress)
* [encodeAddress](_types_.keyringinstance.md#encodeaddress)
* [getPair](_types_.keyringinstance.md#getpair)
* [getPairs](_types_.keyringinstance.md#getpairs)
* [getPublicKeys](_types_.keyringinstance.md#getpublickeys)
* [removePair](_types_.keyringinstance.md#removepair)
* [setSS58Format](_types_.keyringinstance.md#setss58format)
* [toJson](_types_.keyringinstance.md#tojson)

## Properties

###  pairs

• **pairs**: *[KeyringPair](_types_.keyringpair.md)[]*

*Defined in [types.ts:65](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L65)*

___

###  publicKeys

• **publicKeys**: *Uint8Array[]*

*Defined in [types.ts:66](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L66)*

___

###  type

• **type**: *KeypairType*

*Defined in [types.ts:67](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L67)*

## Methods

###  addFromAddress

▸ **addFromAddress**(`address`: string | Uint8Array, `meta?`: [KeyringPair$Meta](_types_.keyringpair_meta.md), `encoded?`: Uint8Array | null, `type?`: KeypairType, `ignoreChecksum?`: undefined | false | true): *[KeyringPair](_types_.keyringpair.md)*

*Defined in [types.ts:74](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |
`meta?` | [KeyringPair$Meta](_types_.keyringpair_meta.md) |
`encoded?` | Uint8Array &#124; null |
`type?` | KeypairType |
`ignoreChecksum?` | undefined &#124; false &#124; true |

**Returns:** *[KeyringPair](_types_.keyringpair.md)*

___

###  addFromJson

▸ **addFromJson**(`pair`: [KeyringPair$Json](_types_.keyringpair_json.md), `ignoreChecksum?`: undefined | false | true): *[KeyringPair](_types_.keyringpair.md)*

*Defined in [types.ts:75](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | [KeyringPair$Json](_types_.keyringpair_json.md) |
`ignoreChecksum?` | undefined &#124; false &#124; true |

**Returns:** *[KeyringPair](_types_.keyringpair.md)*

___

###  addFromMnemonic

▸ **addFromMnemonic**(`mnemonic`: string, `meta?`: [KeyringPair$Meta](_types_.keyringpair_meta.md), `type?`: KeypairType): *[KeyringPair](_types_.keyringpair.md)*

*Defined in [types.ts:76](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`mnemonic` | string |
`meta?` | [KeyringPair$Meta](_types_.keyringpair_meta.md) |
`type?` | KeypairType |

**Returns:** *[KeyringPair](_types_.keyringpair.md)*

___

###  addFromSeed

▸ **addFromSeed**(`seed`: Uint8Array, `meta?`: [KeyringPair$Meta](_types_.keyringpair_meta.md), `type?`: KeypairType): *[KeyringPair](_types_.keyringpair.md)*

*Defined in [types.ts:77](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`seed` | Uint8Array |
`meta?` | [KeyringPair$Meta](_types_.keyringpair_meta.md) |
`type?` | KeypairType |

**Returns:** *[KeyringPair](_types_.keyringpair.md)*

___

###  addFromUri

▸ **addFromUri**(`suri`: string, `meta?`: [KeyringPair$Meta](_types_.keyringpair_meta.md), `type?`: KeypairType): *[KeyringPair](_types_.keyringpair.md)*

*Defined in [types.ts:78](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`suri` | string |
`meta?` | [KeyringPair$Meta](_types_.keyringpair_meta.md) |
`type?` | KeypairType |

**Returns:** *[KeyringPair](_types_.keyringpair.md)*

___

###  addPair

▸ **addPair**(`pair`: [KeyringPair](_types_.keyringpair.md)): *[KeyringPair](_types_.keyringpair.md)*

*Defined in [types.ts:73](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | [KeyringPair](_types_.keyringpair.md) |

**Returns:** *[KeyringPair](_types_.keyringpair.md)*

___

###  createFromUri

▸ **createFromUri**(`suri`: string, `meta?`: [KeyringPair$Meta](_types_.keyringpair_meta.md), `type?`: KeypairType): *[KeyringPair](_types_.keyringpair.md)*

*Defined in [types.ts:79](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`suri` | string |
`meta?` | [KeyringPair$Meta](_types_.keyringpair_meta.md) |
`type?` | KeypairType |

**Returns:** *[KeyringPair](_types_.keyringpair.md)*

___

###  decodeAddress

▸ **decodeAddress**(`encoded`: string | Uint8Array, `ignoreChecksum?`: undefined | false | true, `ss58Format?`: Prefix): *Uint8Array*

*Defined in [types.ts:69](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`encoded` | string &#124; Uint8Array |
`ignoreChecksum?` | undefined &#124; false &#124; true |
`ss58Format?` | Prefix |

**Returns:** *Uint8Array*

___

###  encodeAddress

▸ **encodeAddress**(`key`: Uint8Array | string, `ss58Format?`: Prefix): *string*

*Defined in [types.ts:70](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array &#124; string |
`ss58Format?` | Prefix |

**Returns:** *string*

___

###  getPair

▸ **getPair**(`address`: string | Uint8Array): *[KeyringPair](_types_.keyringpair.md)*

*Defined in [types.ts:80](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

**Returns:** *[KeyringPair](_types_.keyringpair.md)*

___

###  getPairs

▸ **getPairs**(): *[KeyringPair](_types_.keyringpair.md)[]*

*Defined in [types.ts:81](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L81)*

**Returns:** *[KeyringPair](_types_.keyringpair.md)[]*

___

###  getPublicKeys

▸ **getPublicKeys**(): *Uint8Array[]*

*Defined in [types.ts:82](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L82)*

**Returns:** *Uint8Array[]*

___

###  removePair

▸ **removePair**(`address`: string | Uint8Array): *void*

*Defined in [types.ts:83](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

**Returns:** *void*

___

###  setSS58Format

▸ **setSS58Format**(`ss58Format`: Prefix): *void*

*Defined in [types.ts:71](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`ss58Format` | Prefix |

**Returns:** *void*

___

###  toJson

▸ **toJson**(`address`: string | Uint8Array, `passphrase?`: undefined | string): *[KeyringPair$Json](_types_.keyringpair_json.md)*

*Defined in [types.ts:84](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |
`passphrase?` | undefined &#124; string |

**Returns:** *[KeyringPair$Json](_types_.keyringpair_json.md)*
