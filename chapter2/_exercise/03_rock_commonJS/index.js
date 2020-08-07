const game = require('./lib')

// const playerAction = process.argv[process.argv.length - 1]
// const result = game(playerAction)
let total = 0

console.log('请输入：')
process.stdin.on('data', e => {
  const playerAction = e.toString().trim()
  if (playerAction) {
    const result = game(playerAction)
    if (result === '玩家胜') {
      total++

      if (total > 3) {
        console.log('老是输，我不来了~')
        process.exit()
      }
    }
  }
})