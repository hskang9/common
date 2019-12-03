import { BaseDb, ProgressCb } from '../types';
interface CachedValue {
    value: Uint8Array | null;
}
export default class LruDb implements BaseDb {
    private backing;
    private lru;
    constructor(backing: BaseDb, itemCount?: number);
    close(): void;
    open(): void;
    drop(): void;
    empty(): void;
    rename(base: string, file: string): void;
    maintain(fn: ProgressCb): void;
    size(): number;
    del(key: Uint8Array): void;
    get(key: Uint8Array): Uint8Array | null;
    _getLru(key: Uint8Array): CachedValue | undefined;
    put(key: Uint8Array, value: Uint8Array): void;
    txCommit(): void;
    txRevert(): void;
    txStart(): void;
}
export {};
