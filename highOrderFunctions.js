'use strict'
const perfectSquare = [1, 4, 9, 16, 25, 36, 49, 64]
function root (num) {
  return Math.sqrt(num)
}
function mapforEach (arbitraryfunction, array) {
  const newArray = []
  /* for (let i = 0; i !== array.length; i++) {
    newArray.push(arbitraryfunction(array[i]))
  } */
  array.forEach(function (num) {
    newArray.push(arbitraryfunction(num))
  })
  return newArray
}
/* const map = mapforEach(function (num) {
  return (Math.sqrt(num))
}, perfectSquare) */
const map = mapforEach(root, perfectSquare)
console.log(map)
const map2 = perfectSquare.map(function (element) {
  return (Math.pow(element, 2))
})
console.log(map2)
