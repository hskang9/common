export interface ProgressValue {
    isCompleted?: boolean;
    keys: number;
    percent: number;
}
export declare type ProgressCb = (progress: ProgressValue) => void;
export interface BaseDbOptions {
    isCompressed?: boolean;
    isLru?: boolean;
    isNative?: boolean;
}
export interface BaseDb {
    close(): void;
    open(): void;
    drop(): void;
    empty(): void;
    maintain(fn: ProgressCb): void;
    rename(base: string, file: string): void;
    size(): number;
    txCommit?: () => void;
    txRevert?: () => void;
    txStart?: () => void;
    del(key: Uint8Array): void;
    get(key: Uint8Array): Uint8Array | null;
    put(key: Uint8Array, value: Uint8Array): void;
}
export interface TxDb extends BaseDb {
    transaction<T>(fn: () => T): T;
}
