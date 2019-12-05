[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [TrieDb](_types_.triedb.md)

# Interface: TrieDb

## Hierarchy

* TxDb

  ↳ **TrieDb**

## Index

### Properties

* [db](_types_.triedb.md#db)
* [txCommit](_types_.triedb.md#optional-txcommit)
* [txRevert](_types_.triedb.md#optional-txrevert)
* [txStart](_types_.triedb.md#optional-txstart)

### Methods

* [close](_types_.triedb.md#close)
* [del](_types_.triedb.md#del)
* [drop](_types_.triedb.md#drop)
* [empty](_types_.triedb.md#empty)
* [entries](_types_.triedb.md#entries)
* [get](_types_.triedb.md#get)
* [getEntry](_types_.triedb.md#getentry)
* [getNode](_types_.triedb.md#getnode)
* [getRoot](_types_.triedb.md#getroot)
* [maintain](_types_.triedb.md#maintain)
* [open](_types_.triedb.md#open)
* [put](_types_.triedb.md#put)
* [rename](_types_.triedb.md#rename)
* [setRoot](_types_.triedb.md#setroot)
* [size](_types_.triedb.md#size)
* [snapshot](_types_.triedb.md#snapshot)
* [transaction](_types_.triedb.md#transaction)

## Properties

###  db

• **db**: *TxDb*

*Defined in [trie-db/src/types.ts:40](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-db/src/types.ts#L40)*

___

### `Optional` txCommit

• **txCommit**? : *undefined | function*

*Inherited from void*

*Defined in [db/src/types.ts:28](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L28)*

___

### `Optional` txRevert

• **txRevert**? : *undefined | function*

*Inherited from void*

*Defined in [db/src/types.ts:29](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L29)*

___

### `Optional` txStart

• **txStart**? : *undefined | function*

*Inherited from void*

*Defined in [db/src/types.ts:30](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L30)*

## Methods

###  close

▸ **close**(): *void*

*Inherited from void*

*Defined in [db/src/types.ts:20](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L20)*

**Returns:** *void*

___

###  del

▸ **del**(`key`: Uint8Array): *void*

*Inherited from void*

*Defined in [db/src/types.ts:32](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array |

**Returns:** *void*

___

###  drop

▸ **drop**(): *void*

*Inherited from void*

*Defined in [db/src/types.ts:22](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L22)*

**Returns:** *void*

___

###  empty

▸ **empty**(): *void*

*Inherited from void*

*Defined in [db/src/types.ts:23](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L23)*

**Returns:** *void*

___

###  entries

▸ **entries**(): *[TrieEntry](../modules/_types_.md#trieentry)[]*

*Defined in [trie-db/src/types.ts:48](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-db/src/types.ts#L48)*

**Returns:** *[TrieEntry](../modules/_types_.md#trieentry)[]*

___

###  get

▸ **get**(`key`: Uint8Array): *Uint8Array | null*

*Inherited from void*

*Defined in [db/src/types.ts:33](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array |

**Returns:** *Uint8Array | null*

___

###  getEntry

▸ **getEntry**(`root?`: Uint8Array): *[TrieEntry](../modules/_types_.md#trieentry) | null*

*Defined in [trie-db/src/types.ts:45](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-db/src/types.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`root?` | Uint8Array |

**Returns:** *[TrieEntry](../modules/_types_.md#trieentry) | null*

___

###  getNode

▸ **getNode**(`hash?`: Uint8Array): *[Node](../modules/_types_.md#node)*

*Defined in [trie-db/src/types.ts:46](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-db/src/types.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`hash?` | Uint8Array |

**Returns:** *[Node](../modules/_types_.md#node)*

___

###  getRoot

▸ **getRoot**(): *Uint8Array*

*Defined in [trie-db/src/types.ts:42](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-db/src/types.ts#L42)*

**Returns:** *Uint8Array*

___

###  maintain

▸ **maintain**(`fn`: ProgressCb): *void*

*Inherited from void*

*Defined in [db/src/types.ts:24](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | ProgressCb |

**Returns:** *void*

___

###  open

▸ **open**(): *void*

*Inherited from void*

*Defined in [db/src/types.ts:21](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L21)*

**Returns:** *void*

___

###  put

▸ **put**(`key`: Uint8Array, `value`: Uint8Array): *void*

*Inherited from void*

*Defined in [db/src/types.ts:34](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array |
`value` | Uint8Array |

**Returns:** *void*

___

###  rename

▸ **rename**(`base`: string, `file`: string): *void*

*Inherited from void*

*Defined in [db/src/types.ts:25](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`base` | string |
`file` | string |

**Returns:** *void*

___

###  setRoot

▸ **setRoot**(`rootHash`: Uint8Array): *void*

*Defined in [trie-db/src/types.ts:43](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-db/src/types.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`rootHash` | Uint8Array |

**Returns:** *void*

___

###  size

▸ **size**(): *number*

*Inherited from void*

*Defined in [db/src/types.ts:26](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L26)*

**Returns:** *number*

___

###  snapshot

▸ **snapshot**(`dest`: [TrieDb](_types_.triedb.md), `fn?`: ProgressCb): *number*

*Defined in [trie-db/src/types.ts:49](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-db/src/types.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`dest` | [TrieDb](_types_.triedb.md) |
`fn?` | ProgressCb |

**Returns:** *number*

___

###  transaction

▸ **transaction**<**T**>(`fn`: function): *T*

*Inherited from void*

*Defined in [db/src/types.ts:38](https://github.com/polkadot-js/common/blob/408129d5/packages/db/src/types.ts#L38)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **fn**: *function*

▸ (): *T*

**Returns:** *T*
