[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [KeyringPair](_types_.keyringpair.md)

# Interface: KeyringPair

## Hierarchy

* **KeyringPair**

## Index

### Properties

* [address](_types_.keyringpair.md#address)
* [decodePkcs8](_types_.keyringpair.md#decodepkcs8)
* [derive](_types_.keyringpair.md#derive)
* [encodePkcs8](_types_.keyringpair.md#encodepkcs8)
* [isLocked](_types_.keyringpair.md#islocked)
* [lock](_types_.keyringpair.md#lock)
* [meta](_types_.keyringpair.md#meta)
* [publicKey](_types_.keyringpair.md#publickey)
* [setMeta](_types_.keyringpair.md#setmeta)
* [type](_types_.keyringpair.md#type)

### Methods

* [sign](_types_.keyringpair.md#sign)
* [toJson](_types_.keyringpair.md#tojson)
* [verify](_types_.keyringpair.md#verify)

## Properties

###  address

• **address**: *string*

*Defined in [types.ts:41](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L41)*

___

###  decodePkcs8

• **decodePkcs8**: *function*

*Defined in [types.ts:47](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L47)*

#### Type declaration:

▸ (`passphrase?`: undefined | string, `encoded?`: Uint8Array): *void*

**Parameters:**

Name | Type |
------ | ------ |
`passphrase?` | undefined &#124; string |
`encoded?` | Uint8Array |

___

###  derive

• **derive**: *function*

*Defined in [types.ts:48](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L48)*

#### Type declaration:

▸ (`suri`: string, `meta?`: [KeyringPair$Meta](_types_.keyringpair_meta.md)): *[KeyringPair](_types_.keyringpair.md)*

**Parameters:**

Name | Type |
------ | ------ |
`suri` | string |
`meta?` | [KeyringPair$Meta](_types_.keyringpair_meta.md) |

___

###  encodePkcs8

• **encodePkcs8**: *function*

*Defined in [types.ts:49](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L49)*

#### Type declaration:

▸ (`passphrase?`: undefined | string): *Uint8Array*

**Parameters:**

Name | Type |
------ | ------ |
`passphrase?` | undefined &#124; string |

___

###  isLocked

• **isLocked**: *boolean*

*Defined in [types.ts:43](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L43)*

___

###  lock

• **lock**: *function*

*Defined in [types.ts:50](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L50)*

#### Type declaration:

▸ (): *void*

___

###  meta

• **meta**: *[KeyringPair$Meta](_types_.keyringpair_meta.md)*

*Defined in [types.ts:42](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L42)*

___

###  publicKey

• **publicKey**: *Uint8Array*

*Defined in [types.ts:44](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L44)*

___

###  setMeta

• **setMeta**: *function*

*Defined in [types.ts:51](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L51)*

#### Type declaration:

▸ (`meta`: [KeyringPair$Meta](_types_.keyringpair_meta.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`meta` | [KeyringPair$Meta](_types_.keyringpair_meta.md) |

___

###  type

• **type**: *KeypairType*

*Defined in [types.ts:45](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L45)*

## Methods

###  sign

▸ **sign**(`message`: Uint8Array, `options?`: [SignOptions](_types_.signoptions.md)): *Uint8Array*

*Defined in [types.ts:52](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | Uint8Array |
`options?` | [SignOptions](_types_.signoptions.md) |

**Returns:** *Uint8Array*

___

###  toJson

▸ **toJson**(`passphrase?`: undefined | string): *[KeyringPair$Json](_types_.keyringpair_json.md)*

*Defined in [types.ts:53](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`passphrase?` | undefined &#124; string |

**Returns:** *[KeyringPair$Json](_types_.keyringpair_json.md)*

___

###  verify

▸ **verify**(`message`: Uint8Array, `signature`: Uint8Array): *boolean*

*Defined in [types.ts:54](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | Uint8Array |
`signature` | Uint8Array |

**Returns:** *boolean*
