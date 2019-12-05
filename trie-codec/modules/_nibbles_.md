[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["nibbles"](_nibbles_.md)

# External module: "nibbles"

## Index

### Functions

* [addNibblesTerminator](_nibbles_.md#addnibblesterminator)
* [decodeNibbles](_nibbles_.md#decodenibbles)
* [encodeNibbles](_nibbles_.md#encodenibbles)
* [extractKey](_nibbles_.md#extractkey)
* [extractNodeKey](_nibbles_.md#extractnodekey)
* [isNibblesTerminated](_nibbles_.md#isnibblesterminated)
* [removeNibblesTerminator](_nibbles_.md#removenibblesterminator)

## Functions

###  addNibblesTerminator

▸ **addNibblesTerminator**(`nibbles`: Uint8Array): *Uint8Array*

*Defined in [nibbles.ts:19](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-codec/src/nibbles.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`nibbles` | Uint8Array |

**Returns:** *Uint8Array*

___

###  decodeNibbles

▸ **decodeNibbles**(`value`: null | Uint8Array): *Uint8Array*

*Defined in [nibbles.ts:40](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-codec/src/nibbles.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | null &#124; Uint8Array |

**Returns:** *Uint8Array*

___

###  encodeNibbles

▸ **encodeNibbles**(`nibbles`: Uint8Array): *Uint8Array*

*Defined in [nibbles.ts:53](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-codec/src/nibbles.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`nibbles` | Uint8Array |

**Returns:** *Uint8Array*

___

###  extractKey

▸ **extractKey**(`key`: null | Uint8Array): *Uint8Array*

*Defined in [nibbles.ts:69](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-codec/src/nibbles.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | null &#124; Uint8Array |

**Returns:** *Uint8Array*

___

###  extractNodeKey

▸ **extractNodeKey**(`__namedParameters`: [null | Uint8Array‹›]): *Uint8Array*

*Defined in [nibbles.ts:75](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-codec/src/nibbles.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | [null &#124; Uint8Array‹›] |

**Returns:** *Uint8Array*

___

###  isNibblesTerminated

▸ **isNibblesTerminated**(`nibbles`: Uint8Array): *boolean*

*Defined in [nibbles.ts:15](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-codec/src/nibbles.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`nibbles` | Uint8Array |

**Returns:** *boolean*

___

###  removeNibblesTerminator

▸ **removeNibblesTerminator**(`nibbles`: Uint8Array): *Uint8Array*

*Defined in [nibbles.ts:32](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-codec/src/nibbles.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`nibbles` | Uint8Array |

**Returns:** *Uint8Array*
