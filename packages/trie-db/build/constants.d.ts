import { Codec } from '@polkadot/trie-codec/types';
export interface Constants {
    EMPTY_NODE: Uint8Array;
    EMPTY_HASH: Uint8Array;
    EMPTY_HASH_STR: string;
    EMPTY_U8A: Uint8Array;
}
export default function (codec: Codec): Constants;
