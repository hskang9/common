import { EncodedPath } from '../types';
export declare function keyStartsWith(key: Uint8Array | null, partial: Uint8Array | null): boolean;
export declare function keyEquals(key: Uint8Array | null, test: Uint8Array | null): boolean;
export declare function computeExtensionKey(nibbles: Uint8Array): EncodedPath;
export declare function computeLeafKey(nibbles: Uint8Array): EncodedPath;
export declare function getCommonPrefixLength(left: Uint8Array, right: Uint8Array): number;
export declare function consumeCommonPrefix(left: Uint8Array, right: Uint8Array): [Uint8Array, Uint8Array, Uint8Array];
