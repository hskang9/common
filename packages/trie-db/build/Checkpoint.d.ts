export default class Checkpoint {
    protected txRoot: Uint8Array;
    protected rootHash: Uint8Array;
    constructor(rootHash: Uint8Array);
    protected createCheckpoint(): Uint8Array;
    protected commitCheckpoint(): Uint8Array;
    protected revertCheckpoint(): Uint8Array;
}
