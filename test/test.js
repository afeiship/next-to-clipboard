var nx = require('next-js-core2');
require('../src/next-to-clipboard');


test('nx.toClipboard', function () {
  var obj1 = {name: 'fei'};
  var obj2 = {email: '1290657123@qq.com'};

  var result = {};

  nx.toClipboard(result, obj1, obj2);

  expect(result.name, obj1.name).toBe(null);
});

