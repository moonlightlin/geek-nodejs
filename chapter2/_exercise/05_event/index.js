const GeekTime = require('./GeekTime')

const geektime = new GeekTime
geektime.addListener('newlesson', (res) => {
  console.log('yeah!', res)
})