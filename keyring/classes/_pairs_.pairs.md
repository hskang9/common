[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["pairs"](../modules/_pairs_.md) › [Pairs](_pairs_.pairs.md)

# Class: Pairs

## Hierarchy

* **Pairs**

## Implements

* [KeyringPairs](../interfaces/_types_.keyringpairs.md)

## Index

### Constructors

* [constructor](_pairs_.pairs.md#constructor)

### Methods

* [add](_pairs_.pairs.md#add)
* [all](_pairs_.pairs.md#all)
* [get](_pairs_.pairs.md#get)
* [remove](_pairs_.pairs.md#remove)

## Constructors

###  constructor

\+ **new Pairs**(): *[Pairs](_pairs_.pairs.md)*

*Defined in [pairs.ts:13](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/pairs.ts#L13)*

**Returns:** *[Pairs](_pairs_.pairs.md)*

## Methods

###  add

▸ **add**(`pair`: [KeyringPair](../interfaces/_types_.keyringpair.md)): *[KeyringPair](../interfaces/_types_.keyringpair.md)*

*Defined in [pairs.ts:19](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/pairs.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`pair` | [KeyringPair](../interfaces/_types_.keyringpair.md) |

**Returns:** *[KeyringPair](../interfaces/_types_.keyringpair.md)*

___

###  all

▸ **all**(): *[KeyringPair](../interfaces/_types_.keyringpair.md)[]*

*Defined in [pairs.ts:25](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/pairs.ts#L25)*

**Returns:** *[KeyringPair](../interfaces/_types_.keyringpair.md)[]*

___

###  get

▸ **get**(`address`: string | Uint8Array): *[KeyringPair](../interfaces/_types_.keyringpair.md)*

*Defined in [pairs.ts:29](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/pairs.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

**Returns:** *[KeyringPair](../interfaces/_types_.keyringpair.md)*

___

###  remove

▸ **remove**(`address`: string | Uint8Array): *void*

*Defined in [pairs.ts:43](https://github.com/polkadot-js/common/blob/c988d5011/packages/keyring/src/pairs.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string &#124; Uint8Array |

**Returns:** *void*
