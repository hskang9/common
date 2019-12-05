[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["util/key"](_util_key_.md)

# External module: "util/key"

## Index

### Functions

* [computeExtensionKey](_util_key_.md#computeextensionkey)
* [computeLeafKey](_util_key_.md#computeleafkey)
* [consumeCommonPrefix](_util_key_.md#consumecommonprefix)
* [getCommonPrefixLength](_util_key_.md#getcommonprefixlength)
* [keyEquals](_util_key_.md#keyequals)
* [keyStartsWith](_util_key_.md#keystartswith)

## Functions

###  computeExtensionKey

▸ **computeExtensionKey**(`nibbles`: Uint8Array): *[EncodedPath](_types_.md#encodedpath)*

*Defined in [trie-db/src/util/key.ts:36](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-db/src/util/key.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`nibbles` | Uint8Array |

**Returns:** *[EncodedPath](_types_.md#encodedpath)*

___

###  computeLeafKey

▸ **computeLeafKey**(`nibbles`: Uint8Array): *[EncodedPath](_types_.md#encodedpath)*

*Defined in [trie-db/src/util/key.ts:40](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-db/src/util/key.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`nibbles` | Uint8Array |

**Returns:** *[EncodedPath](_types_.md#encodedpath)*

___

###  consumeCommonPrefix

▸ **consumeCommonPrefix**(`left`: Uint8Array, `right`: Uint8Array): *[Uint8Array, Uint8Array, Uint8Array]*

*Defined in [trie-db/src/util/key.ts:56](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-db/src/util/key.ts#L56)*

**Parameters:**

Name | Type |
------ | ------ |
`left` | Uint8Array |
`right` | Uint8Array |

**Returns:** *[Uint8Array, Uint8Array, Uint8Array]*

___

###  getCommonPrefixLength

▸ **getCommonPrefixLength**(`left`: Uint8Array, `right`: Uint8Array): *number*

*Defined in [trie-db/src/util/key.ts:46](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-db/src/util/key.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`left` | Uint8Array |
`right` | Uint8Array |

**Returns:** *number*

___

###  keyEquals

▸ **keyEquals**(`key`: Uint8Array | null, `test`: Uint8Array | null): *boolean*

*Defined in [trie-db/src/util/key.ts:26](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-db/src/util/key.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array &#124; null |
`test` | Uint8Array &#124; null |

**Returns:** *boolean*

___

###  keyStartsWith

▸ **keyStartsWith**(`key`: Uint8Array | null, `partial`: Uint8Array | null): *boolean*

*Defined in [trie-db/src/util/key.ts:10](https://github.com/polkadot-js/common/blob/408129d5/packages/trie-db/src/util/key.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | Uint8Array &#124; null |
`partial` | Uint8Array &#124; null |

**Returns:** *boolean*
