import { Codec } from '@polkadot/trie-codec/types';
export default function buildTrie(input: [Uint8Array, Uint8Array][], cursor?: number, codec?: Codec, stream?: any): Uint8Array;
