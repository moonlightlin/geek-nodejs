// console.log('hello world')

// console.log(__filename)
// console.log(__dirname)
// console.log(process.cpuUsage())

const playerAction = process.argv[process.argv.length - 1]

const random = Math.random() * 3
let computerAction = ''
if (random < 1) {
  computerAction = 'rock'
} else if (random > 2) {
  computerAction = 'scissor'
} else {
  computerAction = 'paper'
}

const result = play(playerAction, computerAction)
console.log(`猜拳结果：玩家出 ${playerAction}, 电脑出 ${computerAction}, ${result}`)


function play(playerAction, computerAction) {
  if (computerAction !== playerAction) {
    if (computerAction === 'rock' && playerAction === 'scissor') {
      return '电脑胜'
    }
  
    if (computerAction === 'scissor' && playerAction === 'paper') {
      return '电脑胜'
    }
  
    if (computerAction === 'paper' && playerAction === 'rock') {
      return '电脑胜'
    }

    return '玩家胜'
  }

  return '平局'
}
