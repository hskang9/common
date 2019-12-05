[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["Memory"](../modules/_memory_.md) › [Memory](_memory_.memory.md)

# Class: Memory

**`name`** MemoryDb

**`summary`** Creates a MemoryDb database extending TransactionDb

**`description`** Create an instance of a Memory database using
MemoryDb and extending TransactionDb.
`options` argument (optional) used to specifies whether
to use compression.
- Enable compression when storing "blocks" since they compress well.
- Disable compression when storing "state" Transactions Trie
using @polkadot/trie-db or @polkadot/db/src/engines/TransactionDb.ts
(potentially LevelDb or RocksDb implementation of a Merkle Patricia Trie)
data structure serialised with Recursive Length Prefix (RLP) encoding

**`example`** 
<BR>

```javascript
import stringToU8a from '@polkadot/util/string/toU8a';
import MemoryDb from '@polkadot/db/Memory';
import TransactionDb from '@polkadot/db/engines/TransactionDb';

const memoryDb = new MemoryDb();
const txDb = new TransactionDb(memoryDb);

// Open the memory database
memoryDb.open();

// Declare key/value pair to allocate to store under a the key
const key = stringToU8a('key');
const value = stringToU8a('some value');

// Store key/value pair in memory db
memoryDb.put(key, value);

// Retrieve value for key from memory db
valueRetrieved = memoryDb.get(key);

// Delete key/value pair from memory db
memoryDb.del(key);

// Transaction to Store key/value pair in transaction db
const isTxSuccess = txDb.transaction((): void => {
  txDb.put(key, value);

  // Boolean to indicate whether transaction was successful or not
  return true;
});

console.log(`Transaction successful?: ${isTxSuccess}`);

// Retrieve transaction value from memory db
console.log(`Transfered value: ${memoryDb.get(key)}`);

// Close the memory database
memoryDb.close();
```

## Hierarchy

* [TransactionDb](_engines_transactiondb_.transactiondb.md)

  ↳ **Memory**

## Implements

* [TxDb](../interfaces/_types_.txdb.md)

## Index

### Constructors

* [constructor](_memory_.memory.md#constructor)

### Methods

* [close](_memory_.memory.md#close)
* [del](_memory_.memory.md#del)
* [drop](_memory_.memory.md#drop)
* [empty](_memory_.memory.md#empty)
* [get](_memory_.memory.md#get)
* [maintain](_memory_.memory.md#maintain)
* [open](_memory_.memory.md#open)
* [put](_memory_.memory.md#put)
* [rename](_memory_.memory.md#rename)
* [size](_memory_.memory.md#size)
* [transaction](_memory_.memory.md#transaction)

## Constructors

###  constructor

\+ **new Memory**(): *[Memory](_memory_.memory.md)*

*Overrides [TransactionDb](_engines_transactiondb_.transactiondb.md).[constructor](_engines_transactiondb_.transactiondb.md#constructor)*

*Defined in [Memory.ts:64](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/Memory.ts#L64)*

**Returns:** *[Memory](_memory_.memory.md)*

## Methods

###  close

▸ **close**(): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Inherited from [TransactionDb](_engines_transactiondb_.transactiondb.md).[close](_engines_transactiondb_.transactiondb.md#close)*

*Defined in [engines/TransactionDb.ts:50](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/TransactionDb.ts#L50)*

**Returns:** *void*

___

###  del

▸ **del**(`key`: Uint8Array): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Inherited from [TransactionDb](_engines_transactiondb_.transactiondb.md).[del](_engines_transactiondb_.transactiondb.md#del)*

*Defined in [engines/TransactionDb.ts:80](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/TransactionDb.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array |

**Returns:** *void*

___

###  drop

▸ **drop**(): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Inherited from [TransactionDb](_engines_transactiondb_.transactiondb.md).[drop](_engines_transactiondb_.transactiondb.md#drop)*

*Defined in [engines/TransactionDb.ts:58](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/TransactionDb.ts#L58)*

**Returns:** *void*

___

###  empty

▸ **empty**(): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Inherited from [TransactionDb](_engines_transactiondb_.transactiondb.md).[empty](_engines_transactiondb_.transactiondb.md#empty)*

*Defined in [engines/TransactionDb.ts:62](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/TransactionDb.ts#L62)*

**Returns:** *void*

___

###  get

▸ **get**(`key`: Uint8Array): *Uint8Array | null*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Inherited from [TransactionDb](_engines_transactiondb_.transactiondb.md).[get](_engines_transactiondb_.transactiondb.md#get)*

*Defined in [engines/TransactionDb.ts:89](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/TransactionDb.ts#L89)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array |

**Returns:** *Uint8Array | null*

___

###  maintain

▸ **maintain**(`fn`: [ProgressCb](../modules/_types_.md#progresscb)): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Inherited from [TransactionDb](_engines_transactiondb_.transactiondb.md).[maintain](_engines_transactiondb_.transactiondb.md#maintain)*

*Defined in [engines/TransactionDb.ts:70](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/TransactionDb.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [ProgressCb](../modules/_types_.md#progresscb) |

**Returns:** *void*

___

###  open

▸ **open**(): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Inherited from [TransactionDb](_engines_transactiondb_.transactiondb.md).[open](_engines_transactiondb_.transactiondb.md#open)*

*Defined in [engines/TransactionDb.ts:54](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/TransactionDb.ts#L54)*

**Returns:** *void*

___

###  put

▸ **put**(`key`: Uint8Array, `value`: Uint8Array): *void*

*Implementation of [TxDb](../interfaces/_types_.txdb.md)*

*Inherited from [TransactionDb](_engines_transactiondb_.transactiondb.md).[put](_engines_transactiondb_.transactiondb.md#put)*

*Defined in [engines/TransactionDb.ts:103](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/TransactionDb.ts#L103)*

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

*Inherited from [TransactionDb](_engines_transactiondb_.transactiondb.md).[rename](_engines_transactiondb_.transactiondb.md#rename)*

*Defined in [engines/TransactionDb.ts:66](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/TransactionDb.ts#L66)*

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

*Inherited from [TransactionDb](_engines_transactiondb_.transactiondb.md).[size](_engines_transactiondb_.transactiondb.md#size)*

*Defined in [engines/TransactionDb.ts:76](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/TransactionDb.ts#L76)*

**Returns:** *number*

___

###  transaction

▸ **transaction**<**T**>(`fn`: function): *T*

*Inherited from [TransactionDb](_engines_transactiondb_.transactiondb.md).[transaction](_engines_transactiondb_.transactiondb.md#transaction)*

*Defined in [engines/TransactionDb.ts:28](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/engines/TransactionDb.ts#L28)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **fn**: *function*

▸ (): *T*

**Returns:** *T*
