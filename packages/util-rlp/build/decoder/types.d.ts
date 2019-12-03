export interface DecodeOutput {
    decoded: Uint8Array | (Uint8Array | Uint8Array[])[];
    remainder: Uint8Array;
}
export declare type DecodeFunc = (input: Uint8Array) => DecodeOutput;
