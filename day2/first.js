const fs = require('fs')

let data = fs.readFileSync(__dirname + '/input.txt', 'utf8').split('\n')
let instructions = data.map((line) => line.split(' '))

let horizontal = 0
let depth = 0

instructions.forEach((instruction) => {
    if (instruction[0] == 'forward') {
        horizontal += Number(instruction[1])
    }
    if (instruction[0] == 'up') {
        depth -= Number(instruction[1])
    }
    if (instruction[0] == 'down') {
        depth += Number(instruction[1])
    }
})
console.log(horizontal * depth)
