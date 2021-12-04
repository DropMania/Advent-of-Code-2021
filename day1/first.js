const fs = require('fs')

let data = fs.readFileSync(__dirname + '/input.txt', 'utf8').split('\n')

console.log(
    data.reduce((acc, curr, i) => {
        if (Number(curr) < Number(data[i + 1])) {
            acc++
        }
        return acc
    }, 0)
)
