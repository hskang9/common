[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [BaseDb](_types_.basedb.md)

# Interface: BaseDb

## Hierarchy

* **BaseDb**

  ↳ [TxDb](_types_.txdb.md)

## Implemented by

* [LruDb](../classes/_engines_lrudb_.lrudb.md)
* [MemoryDb](../classes/_engines_memorydb_.memorydb.md)

## Index

### Properties

* [txCommit](_types_.basedb.md#optional-txcommit)
* [txRevert](_types_.basedb.md#optional-txrevert)
* [txStart](_types_.basedb.md#optional-txstart)

### Methods

* [close](_types_.basedb.md#close)
* [del](_types_.basedb.md#del)
* [drop](_types_.basedb.md#drop)
* [empty](_types_.basedb.md#empty)
* [get](_types_.basedb.md#get)
* [maintain](_types_.basedb.md#maintain)
* [open](_types_.basedb.md#open)
* [put](_types_.basedb.md#put)
* [rename](_types_.basedb.md#rename)
* [size](_types_.basedb.md#size)

## Properties

### `Optional` txCommit

• **txCommit**? : *undefined | function*

*Defined in [types.ts:28](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L28)*

___

### `Optional` txRevert

• **txRevert**? : *undefined | function*

*Defined in [types.ts:29](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L29)*

___

### `Optional` txStart

• **txStart**? : *undefined | function*

*Defined in [types.ts:30](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L30)*

## Methods

###  close

▸ **close**(): *void*

*Defined in [types.ts:20](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L20)*

**Returns:** *void*

___

###  del

▸ **del**(`key`: Uint8Array): *void*

*Defined in [types.ts:32](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array |

**Returns:** *void*

___

###  drop

▸ **drop**(): *void*

*Defined in [types.ts:22](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L22)*

**Returns:** *void*

___

###  empty

▸ **empty**(): *void*

*Defined in [types.ts:23](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L23)*

**Returns:** *void*

___

###  get

▸ **get**(`key`: Uint8Array): *Uint8Array | null*

*Defined in [types.ts:33](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array |

**Returns:** *Uint8Array | null*

___

###  maintain

▸ **maintain**(`fn`: [ProgressCb](../modules/_types_.md#progresscb)): *void*

*Defined in [types.ts:24](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [ProgressCb](../modules/_types_.md#progresscb) |

**Returns:** *void*

___

###  open

▸ **open**(): *void*

*Defined in [types.ts:21](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L21)*

**Returns:** *void*

___

###  put

▸ **put**(`key`: Uint8Array, `value`: Uint8Array): *void*

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

*Defined in [types.ts:26](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L26)*

**Returns:** *number*
