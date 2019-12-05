[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["types"](_types_.md)

# External module: "types"

## Index

### Enumerations

* [NodeType](../enums/_types_.nodetype.md)

### Interfaces

* [TrieDb](../interfaces/_types_.triedb.md)

### Type aliases

* [EncodedPath](_types_.md#encodedpath)
* [Node](_types_.md#node)
* [NodeBranch](_types_.md#nodebranch)
* [NodeEmpty](_types_.md#nodeempty)
* [NodeEncoded](_types_.md#nodeencoded)
* [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty)
* [NodeKv](_types_.md#nodekv)
* [NodeNotEmpty](_types_.md#nodenotempty)
* [TrieEntry](_types_.md#trieentry)

## Type aliases

###  EncodedPath

Ƭ **EncodedPath**: *Uint8Array | null*

*Defined in [trie-db/src/types.ts:28](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-db/src/types.ts#L28)*

___

###  Node

Ƭ **Node**: *[NodeEmpty](_types_.md#nodeempty) | [NodeNotEmpty](_types_.md#nodenotempty)*

*Defined in [trie-db/src/types.ts:34](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-db/src/types.ts#L34)*

___

###  NodeBranch

Ƭ **NodeBranch**: *[[NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty)]*

*Defined in [trie-db/src/types.ts:20](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-db/src/types.ts#L20)*

___

###  NodeEmpty

Ƭ **NodeEmpty**: *null*

*Defined in [trie-db/src/types.ts:14](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-db/src/types.ts#L14)*

___

###  NodeEncoded

Ƭ **NodeEncoded**: *Uint8Array*

*Defined in [trie-db/src/types.ts:16](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-db/src/types.ts#L16)*

___

###  NodeEncodedOrEmpty

Ƭ **NodeEncodedOrEmpty**: *[NodeEncoded](_types_.md#nodeencoded) | [NodeEmpty](_types_.md#nodeempty)*

*Defined in [trie-db/src/types.ts:18](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-db/src/types.ts#L18)*

___

###  NodeKv

Ƭ **NodeKv**: *[[EncodedPath](_types_.md#encodedpath), [NodeEncodedOrEmpty](_types_.md#nodeencodedorempty)]*

*Defined in [trie-db/src/types.ts:30](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-db/src/types.ts#L30)*

___

###  NodeNotEmpty

Ƭ **NodeNotEmpty**: *[NodeKv](_types_.md#nodekv) | [NodeBranch](_types_.md#nodebranch)*

*Defined in [trie-db/src/types.ts:32](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-db/src/types.ts#L32)*

___

###  TrieEntry

Ƭ **TrieEntry**: *[Uint8Array, Uint8Array, Uint8Array[]]*

*Defined in [trie-db/src/types.ts:37](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-db/src/types.ts#L37)*
