import { TxDb, ProgressCb } from '@polkadot/db/types';
import { Codec } from '@polkadot/trie-codec/types';
import { TrieDb, Node, NodeBranch, NodeEncodedOrEmpty, NodeKv, NodeNotEmpty, TrieEntry } from './types';
import Checkpoint from './Checkpoint';
import { Constants } from './constants';
/**
 * # @polkadot/trie-db
 *
 * ## Overview
 *
 * @name Trie
 * @summary Re-implementation of a Patricia Trie
 * @example See [Polkadot-JS Common Trie-DB Examples](https://polkadot.js.org/api/common/examples/trie-db/)
 */
export default class Impl extends Checkpoint {
    readonly db: TxDb;
    protected codec: Codec;
    protected constants: Constants;
    constructor(db: TxDb, rootHash?: Uint8Array, codec?: Codec);
    protected _entry(root: Uint8Array): TrieEntry | null;
    protected _entries(root: Uint8Array, entries?: TrieEntry[]): TrieEntry[];
    protected _snapshot(dest: TrieDb, fn: ProgressCb | undefined, root: Uint8Array, keys: number, percent: number, depth: number): number;
    protected _getNodeRaw(hash: Uint8Array | null): [Uint8Array | null, Node];
    protected _getNode(hash: Uint8Array | null): Node;
    protected _del(node: Node, trieKey: Uint8Array): Node;
    protected _delBranchNode(node: NodeBranch, trieKey: Uint8Array): Node;
    protected _delKvNode(node: NodeNotEmpty, trieKey: Uint8Array): Node;
    protected _get(node: Node, trieKey: Uint8Array): NodeEncodedOrEmpty;
    protected _getBranchNode(node: NodeBranch, trieKey: Uint8Array): NodeEncodedOrEmpty;
    protected _getKvNode(node: NodeKv, trieKey: Uint8Array): NodeEncodedOrEmpty;
    protected _nodeToDbMapping(node: Node): NodeNotEmpty;
    protected _normaliseBranchNode(node: NodeNotEmpty): Node;
    protected _persistNode(node: Node): NodeEncodedOrEmpty;
    protected _put(node: Node, trieKey: Uint8Array, value: Uint8Array): NodeNotEmpty;
    protected _putBranchNode(node: NodeBranch, trieKey: Uint8Array, value: Uint8Array): NodeNotEmpty;
    protected _putKvNode(node: NodeKv, trieKey: Uint8Array, value: Uint8Array): NodeNotEmpty;
    protected _setRootNode(node: Node): void;
}
