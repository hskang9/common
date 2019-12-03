import { BaseDb, TxDb, ProgressCb } from '../types';
export default class TransactionDb implements TxDb {
    private backing;
    private txOverlay;
    private txStarted;
    constructor(backing: BaseDb);
    transaction<T>(fn: () => T): T;
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
    private createTx;
    private commitTx;
    private revertTx;
}
