import { Codec } from '@polkadot/trie-codec/types';
import { TriePair } from './types';
export default function unhashedTrie(input: TriePair[], codec?: Codec): Uint8Array;
