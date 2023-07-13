import nx from '@jswork/next';

const document = nx.GLOBAL.document;
const tmpElement = document.createElement('textarea');
const ELEMENT_ID = '__UNQUE_INPUT_ID__';
tmpElement.id = ELEMENT_ID;

function getElement() {
  let el = document.getElementById(ELEMENT_ID);
  if (!el) {
    tmpElement.style.display = 'none';
    document.body.appendChild(tmpElement);
    el = tmpElement;
  }
  return el;
}

nx.toClipboard = function (inText) {
  const el = getElement();
  el.style.display = 'block';
  el.style.position = 'absolute';
  el.value = inText;
  el.readOnly = true;
  el.select();
  document.execCommand('Copy');
  el.style.display = 'none';
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = nx.nx.toClipboard;
}

export default nx.nx.toClipboard;
