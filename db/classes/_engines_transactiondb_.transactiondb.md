[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["engines/TransactionDb"](../modules/_engines_transactiondb_.md) › [TransactionDb](_engines_transactiondb_.transactiondb.md)

# Class: TransactionDb

## Hierarchy

* **TransactionDb**

  ↳ [Memory](_memory_.memory.md)

## Implements

* [TxDb](../interfaces/_types_.txdb.md)

## Index

### Constructors

* [constructor](_engines_transactiondb_.transactiondb.md#constructor)

### Methods

* [close](_engines_transactiondb_.transactiondb.md#close)
* [del](_engines_transactiondb_.transactiondb.md#del)
* [drop](_engines_transactiondb_.transactiondb.md#drop)
* [empty](_engines_transactiondb_.transactiondb.md#empty)
* [get](_engines_transactiondb_.transactiondb.md#get)
* [maintain](_engines_transactiondb_.transactiondb.md#maintain)
* [open](_engines_transactiondb_.transactiondb.md#open)
* [put](_engines_transactiondb_.transactiondb.md#put)
* [rename](_engines_transactiondb_.transactiondb.md#rename)
* [size](_engines_transactiondb_.transactiondb.md#size)
* [transaction](_engines_transactiondb_.transactiondb.md#transaction)

## Constructors

###  constructor

\+ **new TransactionDb**(`backing`: [BaseDb](../interfaces/_types_.basedb.md)): *[TransactionDb](_engines_transactiondb_.transactiondb.md)*

*Defined in [engines/TransactionDb.ts:21](https://github.com/polkadot-js/common/blob/c988d5011/packages/db/src/engines/TransactionDb.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`backing` | [BaseDb](../interfaces/_types_.basedb.md) |

**Returns:** *[TransactionDb](_engines_transactiondb_.transactiondb.md)*

## Methods

###  close

▸ **close**(): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Defined in [engines/TransactionDb.ts:50](https://github.com/polkadot-js/common/blob/c988d5011/packages/db/src/engines/TransactionDb.ts#L50)*

**Returns:** *void*

___

###  del

▸ **del**(`key`: Uint8Array): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Defined in [engines/TransactionDb.ts:80](https://github.com/polkadot-js/common/blob/c988d5011/packages/db/src/engines/TransactionDb.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array |

**Returns:** *void*

___

###  drop

▸ **drop**(): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Defined in [engines/TransactionDb.ts:58](https://github.com/polkadot-js/common/blob/c988d5011/packages/db/src/engines/TransactionDb.ts#L58)*

**Returns:** *void*

___

###  empty

▸ **empty**(): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Defined in [engines/TransactionDb.ts:62](https://github.com/polkadot-js/common/blob/c988d5011/packages/db/src/engines/TransactionDb.ts#L62)*

**Returns:** *void*

___

###  get

▸ **get**(`key`: Uint8Array): *Uint8Array | null*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Defined in [engines/TransactionDb.ts:89](https://github.com/polkadot-js/common/blob/c988d5011/packages/db/src/engines/TransactionDb.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array |

**Returns:** *Uint8Array | null*

___

###  maintain

▸ **maintain**(`fn`: [ProgressCb](../modules/_types_.md#progresscb)): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Defined in [engines/TransactionDb.ts:70](https://github.com/polkadot-js/common/blob/c988d5011/packages/db/src/engines/TransactionDb.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [ProgressCb](../modules/_types_.md#progresscb) |

**Returns:** *void*

___

###  open

▸ **open**(): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Defined in [engines/TransactionDb.ts:54](https://github.com/polkadot-js/common/blob/c988d5011/packages/db/src/engines/TransactionDb.ts#L54)*

**Returns:** *void*

___

###  put

▸ **put**(`key`: Uint8Array, `value`: Uint8Array): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Defined in [engines/TransactionDb.ts:103](https://github.com/polkadot-js/common/blob/c988d5011/packages/db/src/engines/TransactionDb.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array |
`value` | Uint8Array |

**Returns:** *void*

___

###  rename

▸ **rename**(`base`: string, `file`: string): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Defined in [engines/TransactionDb.ts:66](https://github.com/polkadot-js/common/blob/c988d5011/packages/db/src/engines/TransactionDb.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`base` | string |
`file` | string |

**Returns:** *void*

___

###  size

▸ **size**(): *number*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Defined in [engines/TransactionDb.ts:76](https://github.com/polkadot-js/common/blob/c988d5011/packages/db/src/engines/TransactionDb.ts#L76)*

**Returns:** *number*

___

###  transaction

▸ **transaction**<**T**>(`fn`: function): *T*

*Defined in [engines/TransactionDb.ts:28](https://github.com/polkadot-js/common/blob/c988d5011/packages/db/src/engines/TransactionDb.ts#L28)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **fn**: *function*

▸ (): *T*

**Returns:** *T*
