[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["engines/MemoryDb"](../modules/_engines_memorydb_.md) › [MemoryDb](_engines_memorydb_.memorydb.md)

# Class: MemoryDb

## Hierarchy

* **MemoryDb**

## Implements

* [BaseDb](../interfaces/_types_.basedb.md)

## Index

### Methods

* [close](_engines_memorydb_.memorydb.md#close)
* [del](_engines_memorydb_.memorydb.md#del)
* [drop](_engines_memorydb_.memorydb.md#drop)
* [empty](_engines_memorydb_.memorydb.md#empty)
* [get](_engines_memorydb_.memorydb.md#get)
* [maintain](_engines_memorydb_.memorydb.md#maintain)
* [open](_engines_memorydb_.memorydb.md#open)
* [put](_engines_memorydb_.memorydb.md#put)
* [rename](_engines_memorydb_.memorydb.md#rename)
* [size](_engines_memorydb_.memorydb.md#size)

## Methods

###  close

▸ **close**(): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/MemoryDb.ts:14](https://github.com/polkadot-js/common/blob/c988d5011/packages/db/src/engines/MemoryDb.ts#L14)*

**Returns:** *void*

___

###  del

▸ **del**(`key`: Uint8Array): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/MemoryDb.ts:53](https://github.com/polkadot-js/common/blob/c988d5011/packages/db/src/engines/MemoryDb.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array |

**Returns:** *void*

___

###  drop

▸ **drop**(): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/MemoryDb.ts:22](https://github.com/polkadot-js/common/blob/c988d5011/packages/db/src/engines/MemoryDb.ts#L22)*

**Returns:** *void*

___

###  empty

▸ **empty**(): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/MemoryDb.ts:26](https://github.com/polkadot-js/common/blob/c988d5011/packages/db/src/engines/MemoryDb.ts#L26)*

**Returns:** *void*

___

###  get

▸ **get**(`key`: Uint8Array): *Uint8Array | null*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/MemoryDb.ts:59](https://github.com/polkadot-js/common/blob/c988d5011/packages/db/src/engines/MemoryDb.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array |

**Returns:** *Uint8Array | null*

___

###  maintain

▸ **maintain**(`fn`: [ProgressCb](../modules/_types_.md#progresscb)): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/MemoryDb.ts:35](https://github.com/polkadot-js/common/blob/c988d5011/packages/db/src/engines/MemoryDb.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [ProgressCb](../modules/_types_.md#progresscb) |

**Returns:** *void*

___

###  open

▸ **open**(): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/MemoryDb.ts:18](https://github.com/polkadot-js/common/blob/c988d5011/packages/db/src/engines/MemoryDb.ts#L18)*

**Returns:** *void*

___

###  put

▸ **put**(`key`: Uint8Array, `value`: Uint8Array): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/MemoryDb.ts:65](https://github.com/polkadot-js/common/blob/c988d5011/packages/db/src/engines/MemoryDb.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array |
`value` | Uint8Array |

**Returns:** *void*

___

###  rename

▸ **rename**(`base`: string, `file`: string): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/MemoryDb.ts:31](https://github.com/polkadot-js/common/blob/c988d5011/packages/db/src/engines/MemoryDb.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`base` | string |
`file` | string |

**Returns:** *void*

___

###  size

▸ **size**(): *number*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/MemoryDb.ts:43](https://github.com/polkadot-js/common/blob/c988d5011/packages/db/src/engines/MemoryDb.ts#L43)*

**Returns:** *number*
