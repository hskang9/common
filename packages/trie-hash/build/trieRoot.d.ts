import { Codec } from '@polkadot/trie-codec/types';
import { TriePair } from './types';
/**
 * @name trieRoot
 * @summary Creates a trie hash from the supplied pairs.
 * @description
 * From an `Array<{k: Uint8Array, v: Uint8Array}>` input, calculate the triehash and return the result as a `Uint8Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { stringToU8a } from '@polkadot/util';
 * import { trieRoot } from '@polkadot/trie-hash';
 *
 * trieRoot([{
 *   k: stringToU8a('A'),
 *   v: stringToU8a('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
 * }]); // => 0xd23786fb4a010da3ce639d66d5e904a11dbc02746d1ce25029e53290cabf28ab
 * ```
 */
export default function trieRoot(input: TriePair[], codec?: Codec): Uint8Array;
