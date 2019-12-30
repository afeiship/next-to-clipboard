# next-to-clipboard
> Copy text to clipboard.

## installation
```bash
npm install -S @feizheng/next-to-clipboard
```

## usage
```js
import '@feizheng/next-to-clipboard';

document.getElementById('btn').onclick = function() {
  nx.toClipboard('TEXT_FEI' + Math.random());
};
```
