const fs = require('fs')
function part1(elves) {
  let elvCalories = elves
    .map(elv => {
      return elv.split('\n').reduce((accumulator, currentVal) => accumulator + Number(currentVal), 0)
    })
    .sort((a, b) => b - a)
  return elvCalories[0];
}
function part2(elves) {
  let elvCalories = elves
    .map(elv => {
      return elv.split('\n').reduce((accumulator, currentVal) => accumulator + Number(currentVal), 0)
    })
    .sort((a, b) => b - a)
    let min = Math.min(elvCalories.length,3);
    let sum = 0;
    for(let i =0;i<min;i++){
        sum+=elvCalories[i];
    }
    return sum;
}
fs.readFile('day1/input.txt', (err, inputD) => {
  if (err) throw err
  let elves = inputD
    .toString()
    .replace(/\r/g, '') // remove all \r characters to avoid issues on Windows
    .trim() // Remove starting/ending whitespace
    .split('\n\n')
  console.log(part1(elves))
  console.log(part2(elves))
})
