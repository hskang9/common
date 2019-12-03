/**
 * @name encoder
 * @summary Encodes the input value into RLP.
 * @description
 * From an input, calculate the RLP and return the result as a `Uint8Array`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { encode } from '@polkadot/util-rlp';
 *
 * encode('dog'); // => [0x83, 0x64, 0x6f, 0x67]
 * ```
 */
export default function encoder(input?: null | Uint8Array | (null | Uint8Array)[] | string): Uint8Array;
