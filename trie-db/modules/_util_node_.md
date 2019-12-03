[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["util/node"](_util_node_.md)

# External module: "util/node"

## Index

### Functions

* [decodeNode](_util_node_.md#decodenode)
* [encodeNode](_util_node_.md#encodenode)
* [getNodeType](_util_node_.md#getnodetype)

## Functions

###  decodeNode

▸ **decodeNode**(`codec`: Codec, `encoded`: Uint8Array | [Node](_types_.md#node)): *[Node](_types_.md#node)*

*Defined in [trie-db/src/util/node.ts:30](https://github.com/polkadot-js/common/blob/c988d5011/packages/trie-db/src/util/node.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`codec` | Codec |
`encoded` | Uint8Array &#124; [Node](_types_.md#node) |

**Returns:** *[Node](_types_.md#node)*

___

###  encodeNode

▸ **encodeNode**(`codec`: Codec, `node`: [Node](_types_.md#node)): *Uint8Array*

*Defined in [trie-db/src/util/node.ts:46](https://github.com/polkadot-js/common/blob/c988d5011/packages/trie-db/src/util/node.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`codec` | Codec |
`node` | [Node](_types_.md#node) |

**Returns:** *Uint8Array*

___

###  getNodeType

▸ **getNodeType**(`node`: [Node](_types_.md#node)): *[NodeType](../enums/_types_.nodetype.md)*

*Defined in [trie-db/src/util/node.ts:13](https://github.com/polkadot-js/common/blob/c988d5011/packages/trie-db/src/util/node.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Node](_types_.md#node) |

**Returns:** *[NodeType](../enums/_types_.nodetype.md)*
