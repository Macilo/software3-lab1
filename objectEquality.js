'use strict'
const students = [
  {
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudy: 4
  },
  {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudy: 3
  },
  {
    name: 'Jade',
    studentNumber: 678343,
    yearOfStudy: 4
  },
  {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4
  }
]
function deleteStudent (studentToDelete, array) {
  // let newArray = []     there is no need to make a new array because arrays are passed by reference so any modifications reflect
  const index = array.findIndex(function (student) {
    return student.name === studentToDelete.name && student.studentNumber === studentToDelete.studentNumber &&
    student.yearOfStudy === studentToDelete.yearOfStudy
  })
  if (index !== -1) {
    array.splice(index, 1)
    // newArray = array.slice(0, array.length)
  } // else newArray = array
  return array
}
const modifiedArray = deleteStudent({
  name: 'Kiren',
  studentNumber: 567893,
  yearOfStudy: 4
}, students)

console.log(modifiedArray)
