'use strict'
const electives = [
  {
    courseCode: 'ELEN4010',
    yearOffered: 4
  },
  {
    courseCode: 'ELEN4001',
    yearOffered: 4
  },
  {
    courseCode: 'ELEN4020',
    yearOffered: 4
  }]
console.log(electives.indexOf({ // no element found
  courseCode: 'ELEN4001',
  yearOffered: 4
}))
console.log(electives.findIndex(function (element) { // prints 1
  return element.courseCode === 'ELEN4001' &&
    element.yearOffered === 4
}))
