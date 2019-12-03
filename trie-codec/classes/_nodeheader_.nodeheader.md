[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["NodeHeader"](../modules/_nodeheader_.md) › [NodeHeader](_nodeheader_.nodeheader.md)

# Class: NodeHeader

## Hierarchy

* **NodeHeader**

## Index

### Constructors

* [constructor](_nodeheader_.nodeheader.md#constructor)

### Accessors

* [encodedLength](_nodeheader_.nodeheader.md#encodedlength)
* [nodeType](_nodeheader_.nodeheader.md#nodetype)
* [value](_nodeheader_.nodeheader.md#value)

### Methods

* [toU8a](_nodeheader_.nodeheader.md#tou8a)

## Constructors

###  constructor

\+ **new NodeHeader**(`input?`: null | Uint8Array | null | Uint8Array‹›[]): *[NodeHeader](_nodeheader_.nodeheader.md)*

*Defined in [NodeHeader.ts:22](https://github.com/polkadot-js/common/blob/c988d5011/packages/trie-codec/src/NodeHeader.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`input?` | null &#124; Uint8Array &#124; null &#124; Uint8Array‹›[] |

**Returns:** *[NodeHeader](_nodeheader_.nodeheader.md)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Defined in [NodeHeader.ts:74](https://github.com/polkadot-js/common/blob/c988d5011/packages/trie-codec/src/NodeHeader.ts#L74)*

**Returns:** *number*

___

###  nodeType

• **get nodeType**(): *number*

*Defined in [NodeHeader.ts:95](https://github.com/polkadot-js/common/blob/c988d5011/packages/trie-codec/src/NodeHeader.ts#L95)*

**Returns:** *number*

___

###  value

• **get value**(): *[Null](../modules/_nodeheader_.md#null) | [BranchHeader](../modules/_nodeheader_.md#branchheader) | [ExtensionHeader](../modules/_nodeheader_.md#extensionheader) | [LeafHeader](../modules/_nodeheader_.md#leafheader)*

*Defined in [NodeHeader.ts:99](https://github.com/polkadot-js/common/blob/c988d5011/packages/trie-codec/src/NodeHeader.ts#L99)*

**Returns:** *[Null](../modules/_nodeheader_.md#null) | [BranchHeader](../modules/_nodeheader_.md#branchheader) | [ExtensionHeader](../modules/_nodeheader_.md#extensionheader) | [LeafHeader](../modules/_nodeheader_.md#leafheader)*

## Methods

###  toU8a

▸ **toU8a**(): *Uint8Array*

*Defined in [NodeHeader.ts:103](https://github.com/polkadot-js/common/blob/c988d5011/packages/trie-codec/src/NodeHeader.ts#L103)*

**Returns:** *Uint8Array*
