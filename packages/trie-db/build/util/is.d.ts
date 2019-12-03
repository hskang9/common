import { Node, NodeBranch, NodeKv, NodeEmpty } from '../types';
/**
 * @name isEmptyNode
 * @summary Returns true if node is NULL
 * @description Refer to [Merkle Patricia Trie specification](https://github.com/ethereum/wiki/wiki/Patricia-Tree#optimization)
 */
export declare function isEmptyNode(node: Node): node is NodeEmpty;
/**
 * @name isKvNode
 * @summary Returns true if node is not empty and contains a single key/value pair
 * @description Refer to [Merkle Patricia Trie specification](https://github.com/ethereum/wiki/wiki/Patricia-Tree#optimization)
 */
export declare function isKvNode(node: Node): node is NodeKv;
/**
 * @name isExtensionNode
 * @summary Returns true if node is an Extension 2-item node
 * @description Refer to [Merkle Patricia Trie specification](https://github.com/ethereum/wiki/wiki/Patricia-Tree#optimization)
 */
export declare function isExtensionNode(node: Node): node is NodeKv;
/**
 * @name isLeafNode
 * @summary Returns true if node is an Leaf 2-item node
 * @description Refer to [Merkle Patricia Trie specification](https://github.com/ethereum/wiki/wiki/Patricia-Tree#optimization)
 */
export declare function isLeafNode(node: Node): node is NodeKv;
/**
 * @name isBranchNode
 * @summary Returns true if node is an Branch 17-item node
 * @description Refer to [Merkle Patricia Trie specification](https://github.com/ethereum/wiki/wiki/Patricia-Tree#optimization)
 */
export declare function isBranchNode(node: Node): node is NodeBranch;
