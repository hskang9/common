import { Codec } from '@polkadot/trie-codec/types';
/**
 * @name trieRootOrdered
 * @summary Creates a trie hash from the supplied values.
 * @description
 * From an `Array<Uint8Array>` input, calculate the ordered triehash and return the result as a `Uint8Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { stringToU8a } from '@polkadot/util';
 * import { trieRootOrdered } from '@polkadot/trie-hash';
 *
 * trieRootOrdered([
 *   stringToU8a('doe'),
 *   stringToU8a('reindeer')
 * ]); // => 0xe766d5d51b89dc39d981b41bda63248d7abce4f0225eefd023792a540bcffee3
 * ```
 */
export default function trieRootOrdered(input: Uint8Array[], codec?: Codec): Uint8Array;
