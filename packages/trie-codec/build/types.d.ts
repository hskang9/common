export interface Codec {
    decode: (input: null | Uint8Array) => Uint8Array | null | (null | Uint8Array | (null | Uint8Array)[])[];
    encode: (input?: null | Uint8Array | (null | Uint8Array)[]) => Uint8Array;
    hashing: (input: Uint8Array) => Uint8Array;
    type: string;
}
