# next-to-clipboard
> Copy text to clipboard.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-to-clipboard
```

## usage
```js
import '@jswork/next-to-clipboard';

document.getElementById('btn').onclick = function() {
  nx.toClipboard('TEXT_FEI' + Math.random());
};
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-to-clipboard/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-to-clipboard
[version-url]: https://npmjs.org/package/@jswork/next-to-clipboard

[license-image]: https://img.shields.io/npm/l/@jswork/next-to-clipboard
[license-url]: https://github.com/afeiship/next-to-clipboard/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-to-clipboard
[size-url]: https://github.com/afeiship/next-to-clipboard/blob/master/dist/next-to-clipboard.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-to-clipboard
[download-url]: https://www.npmjs.com/package/@jswork/next-to-clipboard
