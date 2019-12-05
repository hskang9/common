[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [TxDb](_types_.txdb.md)

# Interface: TxDb

## Hierarchy

* [BaseDb](_types_.basedb.md)

  ↳ **TxDb**

## Implemented by

* [Memory](../classes/_memory_.memory.md)
* [TransactionDb](../classes/_engines_transactiondb_.transactiondb.md)

## Index

### Properties

* [txCommit](_types_.txdb.md#optional-txcommit)
* [txRevert](_types_.txdb.md#optional-txrevert)
* [txStart](_types_.txdb.md#optional-txstart)

### Methods

* [close](_types_.txdb.md#close)
* [del](_types_.txdb.md#del)
* [drop](_types_.txdb.md#drop)
* [empty](_types_.txdb.md#empty)
* [get](_types_.txdb.md#get)
* [maintain](_types_.txdb.md#maintain)
* [open](_types_.txdb.md#open)
* [put](_types_.txdb.md#put)
* [rename](_types_.txdb.md#rename)
* [size](_types_.txdb.md#size)
* [transaction](_types_.txdb.md#transaction)

## Properties

### `Optional` txCommit

• **txCommit**? : *undefined | function*

*Inherited from [BaseDb](_types_.basedb.md).[txCommit](_types_.basedb.md#optional-txcommit)*

*Defined in [types.ts:28](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L28)*

___

### `Optional` txRevert

• **txRevert**? : *undefined | function*

*Inherited from [BaseDb](_types_.basedb.md).[txRevert](_types_.basedb.md#optional-txrevert)*

*Defined in [types.ts:29](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L29)*

___

### `Optional` txStart

• **txStart**? : *undefined | function*

*Inherited from [BaseDb](_types_.basedb.md).[txStart](_types_.basedb.md#optional-txstart)*

*Defined in [types.ts:30](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L30)*

## Methods

###  close

▸ **close**(): *void*

*Inherited from [BaseDb](_types_.basedb.md).[close](_types_.basedb.md#close)*

*Defined in [types.ts:20](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L20)*

**Returns:** *void*

___

###  del

▸ **del**(`key`: Uint8Array): *void*

*Inherited from [BaseDb](_types_.basedb.md).[del](_types_.basedb.md#del)*

*Defined in [types.ts:32](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array |

**Returns:** *void*

___

###  drop

▸ **drop**(): *void*

*Inherited from [BaseDb](_types_.basedb.md).[drop](_types_.basedb.md#drop)*

*Defined in [types.ts:22](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L22)*

**Returns:** *void*

___

###  empty

▸ **empty**(): *void*

*Inherited from [BaseDb](_types_.basedb.md).[empty](_types_.basedb.md#empty)*

*Defined in [types.ts:23](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L23)*

**Returns:** *void*

___

###  get

▸ **get**(`key`: Uint8Array): *Uint8Array | null*

*Inherited from [BaseDb](_types_.basedb.md).[get](_types_.basedb.md#get)*

*Defined in [types.ts:33](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array |

**Returns:** *Uint8Array | null*

___

###  maintain

▸ **maintain**(`fn`: [ProgressCb](../modules/_types_.md#progresscb)): *void*

*Inherited from [BaseDb](_types_.basedb.md).[maintain](_types_.basedb.md#maintain)*

*Defined in [types.ts:24](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [ProgressCb](../modules/_types_.md#progresscb) |

**Returns:** *void*

___

###  open

▸ **open**(): *void*

*Inherited from [BaseDb](_types_.basedb.md).[open](_types_.basedb.md#open)*

*Defined in [types.ts:21](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L21)*

**Returns:** *void*

___

###  put

▸ **put**(`key`: Uint8Array, `value`: Uint8Array): *void*

*Inherited from [BaseDb](_types_.basedb.md).[put](_types_.basedb.md#put)*

*Defined in [types.ts:34](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array |
`value` | Uint8Array |

**Returns:** *void*

___

###  rename

▸ **rename**(`base`: string, `file`: string): *void*

*Inherited from [BaseDb](_types_.basedb.md).[rename](_types_.basedb.md#rename)*

*Defined in [types.ts:25](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`base` | string |
`file` | string |

**Returns:** *void*

___

###  size

▸ **size**(): *number*

*Inherited from [BaseDb](_types_.basedb.md).[size](_types_.basedb.md#size)*

*Defined in [types.ts:26](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L26)*

**Returns:** *number*

___

###  transaction

▸ **transaction**<**T**>(`fn`: function): *T*

*Defined in [types.ts:38](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L38)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **fn**: *function*

▸ (): *T*

**Returns:** *T*
