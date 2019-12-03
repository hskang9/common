import { Codec } from '@polkadot/trie-codec/types';
import { Node, NodeType } from '../types';
export declare function getNodeType(node: Node): NodeType;
export declare function decodeNode(codec: Codec, encoded: Uint8Array | Node): Node;
export declare function encodeNode(codec: Codec, node: Node): Uint8Array;
