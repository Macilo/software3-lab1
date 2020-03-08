'use strict'
const numbers = [76, 55.7, 89, 37.5, 61]
numbers.push(19)
numbers.unshift(61)
numbers[1] = 12
numbers.splice(3, 1, 99)
console.log(numbers)
console.log(numbers[7])
