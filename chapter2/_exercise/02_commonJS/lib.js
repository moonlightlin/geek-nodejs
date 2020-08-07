console.log('I\'m lib')

exports.greek = 'hello world'
exports.add = function (a, b) {
  return a + b
}
exports.info = { name: 'moon', age: 20 }

module.exports = function minus(a, b) {
  return a - b
}

setTimeout(() => {
  console.log('exports', exports)
  console.log('module.exports', module.exports)
}, 2000)