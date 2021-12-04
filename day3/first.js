const fs = require('fs')

let data = fs.readFileSync(__dirname + '/input.txt', 'utf8').split('\n')
let tracker = []
for (let i = 0; i < 12; i++) {
    tracker.push({ 0: 0, 1: 0 })
}
data.forEach((line) => {
    ;[...line].forEach((d, i) => {
        if (d === '0') {
            tracker[i][0]++
        } else if (d === '1') {
            tracker[i][1]++
        }
    })
})
let gamma = ''
let epsilon = ''
tracker.forEach((t) => {
    if (t[0] > t[1]) {
        gamma += '0'
        epsilon += '1'
    } else {
        gamma += '1'
        epsilon += '0'
    }
})
console.log(parseInt(gamma, 2) * parseInt(epsilon, 2))
