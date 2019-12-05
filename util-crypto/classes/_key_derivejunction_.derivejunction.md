[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["key/DeriveJunction"](../modules/_key_derivejunction_.md) › [DeriveJunction](_key_derivejunction_.derivejunction.md)

# Class: DeriveJunction

## Hierarchy

* **DeriveJunction**

## Index

### Accessors

* [chainCode](_key_derivejunction_.derivejunction.md#chaincode)
* [isHard](_key_derivejunction_.derivejunction.md#ishard)
* [isSoft](_key_derivejunction_.derivejunction.md#issoft)

### Methods

* [hard](_key_derivejunction_.derivejunction.md#hard)
* [harden](_key_derivejunction_.derivejunction.md#harden)
* [soft](_key_derivejunction_.derivejunction.md#soft)
* [soften](_key_derivejunction_.derivejunction.md#soften)
* [from](_key_derivejunction_.derivejunction.md#static-from)

## Accessors

###  chainCode

• **get chainCode**(): *Uint8Array*

*Defined in [key/DeriveJunction.ts:40](https://github.com/polkadot-js/common/blob/408129d5/packages/util-crypto/src/key/DeriveJunction.ts#L40)*

**Returns:** *Uint8Array*

___

###  isHard

• **get isHard**(): *boolean*

*Defined in [key/DeriveJunction.ts:44](https://github.com/polkadot-js/common/blob/408129d5/packages/util-crypto/src/key/DeriveJunction.ts#L44)*

**Returns:** *boolean*

___

###  isSoft

• **get isSoft**(): *boolean*

*Defined in [key/DeriveJunction.ts:48](https://github.com/polkadot-js/common/blob/408129d5/packages/util-crypto/src/key/DeriveJunction.ts#L48)*

**Returns:** *boolean*

## Methods

###  hard

▸ **hard**(`value`: number | BN | string | Uint8Array): *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

*Defined in [key/DeriveJunction.ts:52](https://github.com/polkadot-js/common/blob/408129d5/packages/util-crypto/src/key/DeriveJunction.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number &#124; BN &#124; string &#124; Uint8Array |

**Returns:** *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

___

###  harden

▸ **harden**(): *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

*Defined in [key/DeriveJunction.ts:56](https://github.com/polkadot-js/common/blob/408129d5/packages/util-crypto/src/key/DeriveJunction.ts#L56)*

**Returns:** *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

___

###  soft

▸ **soft**(`value`: number | BN | string | Uint8Array): *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

*Defined in [key/DeriveJunction.ts:62](https://github.com/polkadot-js/common/blob/408129d5/packages/util-crypto/src/key/DeriveJunction.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number &#124; BN &#124; string &#124; Uint8Array |

**Returns:** *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

___

###  soften

▸ **soften**(): *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

*Defined in [key/DeriveJunction.ts:81](https://github.com/polkadot-js/common/blob/408129d5/packages/util-crypto/src/key/DeriveJunction.ts#L81)*

**Returns:** *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

___

### `Static` from

▸ **from**(`value`: string): *[DeriveJunction](_key_derivejunction_.derivejunction.md)*

*Defined in [key/DeriveJunction.ts:23](https://github.com/polkadot-js/common/blob/408129d5/packages/util-crypto/src/key/DeriveJunction.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[DeriveJunction](_key_derivejunction_.derivejunction.md)*
