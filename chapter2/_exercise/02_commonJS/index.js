console.log('start require')
console.log('----------------------')
var lib = require('./lib.js')
console.log('minus: ', lib(30, 20))
console.log(('----------------------'))
console.log('end require: ', lib)

lib.additional = 'test'