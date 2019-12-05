[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["engines/LruDb"](../modules/_engines_lrudb_.md) › [LruDb](_engines_lrudb_.lrudb.md)

# Class: LruDb

## Hierarchy

* **LruDb**

## Implements

* [BaseDb](../interfaces/_types_.basedb.md)

## Index

### Constructors

* [constructor](_engines_lrudb_.lrudb.md#constructor)

### Methods

* [_getLru](_engines_lrudb_.lrudb.md#_getlru)
* [close](_engines_lrudb_.lrudb.md#close)
* [del](_engines_lrudb_.lrudb.md#del)
* [drop](_engines_lrudb_.lrudb.md#drop)
* [empty](_engines_lrudb_.lrudb.md#empty)
* [get](_engines_lrudb_.lrudb.md#get)
* [maintain](_engines_lrudb_.lrudb.md#maintain)
* [open](_engines_lrudb_.lrudb.md#open)
* [put](_engines_lrudb_.lrudb.md#put)
* [rename](_engines_lrudb_.lrudb.md#rename)
* [size](_engines_lrudb_.lrudb.md#size)
* [txCommit](_engines_lrudb_.lrudb.md#txcommit)
* [txRevert](_engines_lrudb_.lrudb.md#txrevert)
* [txStart](_engines_lrudb_.lrudb.md#txstart)

## Constructors

###  constructor

\+ **new LruDb**(`backing`: [BaseDb](../interfaces/_types_.basedb.md), `itemCount`: number): *[LruDb](_engines_lrudb_.lrudb.md)*

*Defined in [engines/LruDb.ts:21](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/LruDb.ts#L21)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`backing` | [BaseDb](../interfaces/_types_.basedb.md) | - |
`itemCount` | number |  DEFAULT_ITEM_COUNT |

**Returns:** *[LruDb](_engines_lrudb_.lrudb.md)*

## Methods

###  _getLru

▸ **_getLru**(`key`: Uint8Array): *CachedValue | undefined*

*Defined in [engines/LruDb.ts:88](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/LruDb.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array |

**Returns:** *CachedValue | undefined*

___

###  close

▸ **close**(): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/LruDb.ts:28](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/LruDb.ts#L28)*

**Returns:** *void*

___

###  del

▸ **del**(`key`: Uint8Array): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/LruDb.ts:65](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/LruDb.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array |

**Returns:** *void*

___

###  drop

▸ **drop**(): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/LruDb.ts:42](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/LruDb.ts#L42)*

**Returns:** *void*

___

###  empty

▸ **empty**(): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/LruDb.ts:46](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/LruDb.ts#L46)*

**Returns:** *void*

___

###  get

▸ **get**(`key`: Uint8Array): *Uint8Array | null*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/LruDb.ts:72](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/LruDb.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array |

**Returns:** *Uint8Array | null*

___

###  maintain

▸ **maintain**(`fn`: [ProgressCb](../modules/_types_.md#progresscb)): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/LruDb.ts:57](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/LruDb.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [ProgressCb](../modules/_types_.md#progresscb) |

**Returns:** *void*

___

###  open

▸ **open**(): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/LruDb.ts:35](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/LruDb.ts#L35)*

**Returns:** *void*

___

###  put

▸ **put**(`key`: Uint8Array, `value`: Uint8Array): *void*

*Implementation of [BaseDb](../interfaces/_types_.basedb.md)*

*Defined in [engines/LruDb.ts:92](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/LruDb.ts#L92)*

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

*Defined in [engines/LruDb.ts:53](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/LruDb.ts#L53)*

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

*Defined in [engines/LruDb.ts:61](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/LruDb.ts#L61)*

**Returns:** *number*

___

###  txCommit

▸ **txCommit**(): *void*

*Defined in [engines/LruDb.ts:99](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/LruDb.ts#L99)*

**Returns:** *void*

___

###  txRevert

▸ **txRevert**(): *void*

*Defined in [engines/LruDb.ts:105](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/LruDb.ts#L105)*

**Returns:** *void*

___

###  txStart

▸ **txStart**(): *void*

*Defined in [engines/LruDb.ts:111](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/LruDb.ts#L111)*

**Returns:** *void*
