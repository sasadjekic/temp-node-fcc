let a = 5
let b = 4

let c = a + b
console.log(a + b)
let d = a/b
console.log({d})

let array = [1, 5 ,9]
for (let index = 0; index 
    < array.length; index++) {
    const element = array[index]; 
    console.log('ITEM: ',array[index]) 
}

const _ = require('lodash')
const newItems = _.flattenDeep([1, [2, [3]]])