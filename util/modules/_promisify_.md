[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["promisify"](_promisify_.md)

# External module: "promisify"

## Index

### Functions

* [promisify](_promisify_.md#promisify)

## Functions

###  promisify

▸ **promisify**(`self`: any, `fn`: Function, ...`params`: any[]): *Promise‹any›*

*Defined in [promisify.ts:22](https://github.com/polkadot-js/common/blob/c988d5011/packages/util/src/promisify.ts#L22)*

**`name`** promisify

**`summary`** Wraps an async callback into a `Promise`

**`description`** 
Wraps the supplied async function `fn` that has a standard JS callback `(error: Error, result: any)` into a `Promise`, passing the supplied parameters. When `error` is set, the Promise is rejected, else the Promise resolves with the `result` value.

**`example`** 
<BR>

```javascript
const { promisify } from '@polkadot/util';

await promisify(null, ((a, cb) => cb(null, a), true); // resolves with `true`
await promisify(null, (cb) => cb(new Error('error!'))); // rejects with `error!`
```

**Parameters:**

Name | Type |
------ | ------ |
`self` | any |
`fn` | Function |
`...params` | any[] |

**Returns:** *Promise‹any›*
