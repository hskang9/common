[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [KeyringPairs](_types_.keyringpairs.md)

# Interface: KeyringPairs

## Hierarchy

* **KeyringPairs**

## Implemented by

* [Pairs](../classes/_pairs_.pairs.md)

## Index

### Properties

* [add](_types_.keyringpairs.md#add)
* [all](_types_.keyringpairs.md#all)
* [get](_types_.keyringpairs.md#get)
* [remove](_types_.keyringpairs.md#remove)

## Properties

###  add

• **add**: *function*

*Defined in [types.ts:58](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L58)*

#### Type declaration:

▸ (`pair`: [KeyringPair](_types_.keyringpair.md)): *[KeyringPair](_types_.keyringpair.md)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | [KeyringPair](_types_.keyringpair.md) |

___

###  all

• **all**: *function*

*Defined in [types.ts:59](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L59)*

#### Type declaration:

▸ (): *[KeyringPair](_types_.keyringpair.md)[]*

___

###  get

• **get**: *function*

*Defined in [types.ts:60](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L60)*

#### Type declaration:

▸ (`address`: string | Uint8Array): *[KeyringPair](_types_.keyringpair.md)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

___

###  remove

• **remove**: *function*

*Defined in [types.ts:61](https://github.com/polkadot-js/common/blob/408129d5/packages/keyring/src/types.ts#L61)*

#### Type declaration:

▸ (`address`: string | Uint8Array): *void*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |
