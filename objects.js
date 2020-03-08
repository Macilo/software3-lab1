'use strict'
const course = {
  courseCode: 'ELEN4010'
}

const course2 = {
  courseCode: 'ELEN3009'
}
const course3 = {
  courseCode: 'ELEN1000'

}
// use a function to add a property of an object

const addYearOffered = function ($course) { // it seems like this function refuses to work
  let yearOffered
  const _yearOffered = $course.courseCode.substr(4, 1)
  if ($course.courseCode.includes('40')) {
    yearOffered = _yearOffered
  } else if ($course.courseCode.includes('30')) {
    yearOffered = _yearOffered
  } else if ($course.courseCode.includes('20')) {
    yearOffered = _yearOffered
  } else {
    yearOffered = 1
  }

  $course.yearOffered = yearOffered
}

const courseInfo = function (_course) {
  const message = `${_course.courseCode} is offered in year ${_course.yearOffered}` // instead i just made a string and returned it
  return message
}
console.log(`Courses offerred: ${course.courseCode} ${course2.courseCode} ${course3.courseCode}.`)
addYearOffered(course)
addYearOffered(course2)
addYearOffered(course3)
console.log(courseInfo(course))
console.log(courseInfo(course2)) // i don't know why i'm getting undefined after the execution of this function
console.log(courseInfo(course3))

// so the problem was that i'm not returning anything after logging the message on the console
