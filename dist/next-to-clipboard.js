(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var document = global.document;
  var tmpElement = document.createElement('textarea');
  var ELEMENT_ID = '__UNQUE_INPUT_ID__';
  var STYLE_SHOW = 'block';
  var STYLE_HIDE = 'none';
  var EXEC_COPY = 'Copy';
  tmpElement.id = ELEMENT_ID;

  function getElement() {
    var el = document.getElementById(ELEMENT_ID);
    if (!el) {
      tmpElement.style.display = STYLE_HIDE;
      document.body.append(tmpElement);
      el = tmpElement;
    }
    return el;
  }

  nx.toClipboard = function (inText) {
    var el = getElement();
    el.style.display = STYLE_SHOW;
    el.value = inText;
    el.select();
    document.execCommand(EXEC_COPY);
    el.style.display = STYLE_HIDE;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.toClipboard;
  }

}());
