import { BaseDb, ProgressCb } from '../types';
export default class MemoryDb implements BaseDb {
    private _storage;
    close(): void;
    open(): void;
    drop(): void;
    empty(): void;
    rename(base: string, file: string): void;
    maintain(fn: ProgressCb): void;
    size(): number;
    del(key: Uint8Array): void;
    get(key: Uint8Array): Uint8Array | null;
    put(key: Uint8Array, value: Uint8Array): void;
}
