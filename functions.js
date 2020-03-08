'use strict'
const multiplier = 5 / 9
const convertTemp = function (tempInFahrenheit) {
  return (tempInFahrenheit - 32) * multiplier
}

const tempInCelcius = convertTemp(0)
console.log(tempInCelcius)

const anotherConversion = convertTemp
console.log(anotherConversion(32))

// I want to know how I can prompt a user for an input
