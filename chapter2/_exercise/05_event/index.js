const EventEmitter = require('events').EventEmitter

class GeekTime extends EventEmitter {
  constructor() {
    super()
    setInterval(() => {
      this.emit('newlesson', { price: Math.random() * 100 })
    }, 3000)
  }
}

const geektime = new GeekTime
geektime.addListener('newlesson', (res) => {
  console.log('yeah!', res)
})