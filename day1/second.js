const fs = require('fs')

let data = fs.readFileSync(__dirname + '/input.txt', 'utf8').split('\n')

let tracker = []
data.forEach((line, i) => {
    tracker.forEach((item) => {
        if (item.used < 3) {
            item.used++
            item.val += Number(line)
        }
    })
    if (i < data.length - 2) {
        tracker.push({ val: Number(line), used: 1 })
    }
})

console.log(
    tracker.reduce((acc, curr, i) => {
        if (tracker[i + 1]) {
            if (curr.val < tracker[i + 1].val) {
                acc++
            }
        }
        return acc
    }, 0)
)
