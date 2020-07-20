const game = require('./lib');

let count = 0
process.stdin.on('data', e => {
  const playerAction = e.toString().trim();
  const result = game(playerAction)

  if (result === -1) {
    count++
  }
  if (count === 3) {
    console.log('不想玩了。。。')
    process.exit()
  }
})