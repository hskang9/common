/**
 * @name fromNibbles
 * @summary Converts the input to Nibbles.
 * @description
 * From an `Uint8Array` input, calculate and return a list of nibbles that makes up the input.
 * @example
 * <BR>
 *
 * ```javascript
 * import { fromNibbles } from '@polkadot/trie-codec/util';
 *
 * fromNibbles(new Uint8Array([4, 1, 2, 0])); // => Uint8Array([0x41, 0x20]
 * ```
 */
export default function fromNibbles(input: Uint8Array): Uint8Array;
