import { TxDb, ProgressCb } from '@polkadot/db/types';
export declare enum NodeType {
    EMPTY = 0,
    LEAF = 1,
    EXTENSION = 2,
    BRANCH = 3
}
export declare type NodeEmpty = null;
export declare type NodeEncoded = Uint8Array;
export declare type NodeEncodedOrEmpty = NodeEncoded | NodeEmpty;
export declare type NodeBranch = [NodeEncodedOrEmpty, NodeEncodedOrEmpty, NodeEncodedOrEmpty, NodeEncodedOrEmpty, NodeEncodedOrEmpty, NodeEncodedOrEmpty, NodeEncodedOrEmpty, NodeEncodedOrEmpty, NodeEncodedOrEmpty, NodeEncodedOrEmpty, NodeEncodedOrEmpty, NodeEncodedOrEmpty, NodeEncodedOrEmpty, NodeEncodedOrEmpty, NodeEncodedOrEmpty, NodeEncodedOrEmpty, NodeEncodedOrEmpty];
export declare type EncodedPath = Uint8Array | null;
export declare type NodeKv = [EncodedPath, NodeEncodedOrEmpty];
export declare type NodeNotEmpty = NodeKv | NodeBranch;
export declare type Node = NodeEmpty | NodeNotEmpty;
export declare type TrieEntry = [Uint8Array, Uint8Array, Uint8Array[]];
export interface TrieDb extends TxDb {
    readonly db: TxDb;
    getRoot(): Uint8Array;
    setRoot(rootHash: Uint8Array): void;
    getEntry(root?: Uint8Array): TrieEntry | null;
    getNode(hash?: Uint8Array): Node;
    entries(): TrieEntry[];
    snapshot(dest: TrieDb, fn?: ProgressCb): number;
}
