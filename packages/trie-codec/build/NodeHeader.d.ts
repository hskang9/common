export declare type Null = null;
export declare type BranchHeader = boolean;
export declare type NibbleHeader = number;
export declare type ExtensionHeader = NibbleHeader;
export declare type LeafHeader = NibbleHeader;
export default class NodeHeader {
    private _nodeType;
    private _value;
    constructor(input?: null | Uint8Array | (null | Uint8Array)[]);
    private static decodeNodeHeaderArray;
    private static decodeNodeHeaderU8a;
    readonly encodedLength: number;
    readonly nodeType: number;
    readonly value: Null | BranchHeader | ExtensionHeader | LeafHeader;
    toU8a(): Uint8Array;
}
