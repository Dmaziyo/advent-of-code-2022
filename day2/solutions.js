const fs = require('fs')
const SCOREMAP = {
  X: {
    val: 1,
    restrain: 'C',
    map: 'A'
  },
  Y: {
    val: 2,
    restrain: 'A',
    map: 'B'
  },
  Z: {
    val: 3,
    restrain: 'B',
    map: 'C'
  }
}
// part2
const STRATEGY = {
  X: 'lose',
  Y: 'draw',
  Z: 'win'
}
const RESULTMAP = {
  A: {
    win: 'Y',
    lose: 'Z',
    draw: 'X'
  },
  B: {
    win: 'Z',
    lose: 'X',
    draw: 'Y'
  },
  C: {
    win: 'X',
    lose: 'Y',
    draw: 'Z'
  }
}
function compete(opponent, me) {
  let mapping = SCOREMAP[me]
  if (mapping.map === opponent) {
    return mapping.val + 3
  } else if (mapping.restrain !== opponent) {
    return mapping.val + 0
  } else {
    return mapping.val + 6
  }
}
function part1(strategies) {
  let sum = 0
  for (let i = 0; i < strategies.length; i++) {
    let strategy = strategies[i]
    let [opponent, me] = strategy.split(' ')
    sum += compete(opponent, me)
  }
  console.log(sum)
}
function part2(strategies) {
  let sum = 0
  for (let i = 0; i < strategies.length; i++) {
    let strategy = strategies[i]
    let [opponent, ending] = strategy.split(' ')
    sum += compete(opponent, RESULTMAP[opponent][STRATEGY[ending]])
  }
  console.log(sum)
}
fs.readFile('day2/input.txt', (err, inputD) => {
  if (err) throw err
  let strategies = inputD.toString().split('\r\n')
  part1(strategies)
  part2(strategies)
})
