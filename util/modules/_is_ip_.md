[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["is/ip"](_is_ip_.md)

# External module: "is/ip"

## Index

### Functions

* [isIp](_is_ip_.md#isip)

## Functions

###  isIp

▸ **isIp**(`value`: string, `type?`: IpTypes): *boolean*

*Defined in [is/ip.ts:26](https://github.com/polkadot-js/common/blob/c988d5011/packages/util/src/is/ip.ts#L26)*

**`name`** isIp

**`summary`** Tests if the value is a valid IP address

**`description`** 
Checks to see if the value is a valid IP address. Optionally check for either v4/v6

**`example`** 
<BR>

```javascript
import { isIp } from '@polkadot/util';

isIp('192.168.0.1')); // => true
isIp('1:2:3:4:5:6:7:8'); // => true
isIp('192.168.0.1', 'v6')); // => false
isIp('1:2:3:4:5:6:7:8', 'v4'); // => false
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`type?` | IpTypes |

**Returns:** *boolean*
