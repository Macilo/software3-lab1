'use strict'
const dolor = require('dolor')
const fs = require('fs')
// const courses = ['./ELEN4010.txt', './ELEN4020.txt', './ELEN4002.txt']
fs.readFile('./ELEN4010.txt', 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
})
dolor.paragraphs(10)
