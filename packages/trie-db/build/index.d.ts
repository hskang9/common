import { TxDb, ProgressCb } from '@polkadot/db/types';
import { Codec } from '@polkadot/trie-codec/types';
import { TrieDb, Node, TrieEntry } from './types';
import Impl from './Impl';
/**
 * # @polkadot/trie-db
 *
 * ## Overview
 *
 * @name Trie
 * @summary Re-implementation of a Patricia Trie
 * @example See [Polkadot-JS Common Trie-DB Examples](https://polkadot.js.org/api/common/examples/trie-db/)
 */
export default class Trie extends Impl implements TrieDb {
    constructor(db?: TxDb, rootHash?: Uint8Array, codec?: Codec);
    transaction<T>(fn: () => T): T;
    open(): void;
    close(): void;
    empty(): void;
    drop(): void;
    maintain(fn: ProgressCb): void;
    rename(base: string, file: string): void;
    size(): number;
    del(key: Uint8Array): void;
    get(key: Uint8Array): Uint8Array | null;
    put(key: Uint8Array, value: Uint8Array): void;
    getRoot(): Uint8Array;
    setRoot(rootHash: Uint8Array): void;
    getEntry(hash?: Uint8Array): TrieEntry | null;
    getNode(hash?: Uint8Array): Node;
    entries(): TrieEntry[];
    snapshot(dest: TrieDb, fn?: ProgressCb): number;
}
