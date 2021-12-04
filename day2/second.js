const fs = require('fs')

let data = fs.readFileSync(__dirname + '/input.txt', 'utf8').split('\n')
let instructions = data.map((line) => line.split(' '))

let horizontal = 0
let depth = 0
let aim = 0

instructions.forEach((instruction) => {
    if (instruction[0] == 'forward') {
        horizontal += Number(instruction[1])
        depth += aim * Number(instruction[1])
    }
    if (instruction[0] == 'up') {
        aim -= Number(instruction[1])
    }
    if (instruction[0] == 'down') {
        aim += Number(instruction[1])
    }
})
console.log(horizontal * depth)
