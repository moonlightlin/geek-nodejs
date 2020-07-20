console.log('Hello');

exports.hello = 'world';
exports.add = function(a, b) {
  return a + b;
};
exports.greekObj = {
  name: 'moon',
  age: '29'
};

module.exports = function minus(a, b) {
  return a - b;
};
