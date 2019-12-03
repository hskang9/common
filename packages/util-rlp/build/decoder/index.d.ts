/**
 * @name decoder
 * @summary Decodes the input RLP.
 * @description
 * From an input, decode the RLP and return the result as a `Uint8Array` or `Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { decode } from '@polkadot/util-rlp';
 *
 * decode(new Uint8Array([0x83, 0x64, 0x6f, 0x67])); // => 'dog' as Uint8Array
 * ```
 */
export default function decoder(input?: null | Uint8Array): Uint8Array | Uint8Array[];
