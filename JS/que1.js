'use strict';

var jeffHeight = 1.68
var jeffMass = 67
var toddHeight = 1.72
var toddMass = 70

console.log(`Jeff's height is ${jeffHeight}`)
console.log(`Todd's height is ${toddHeight}`)

var jeffBMI
var toddBMI

jeffBMI = jeffMass / (jeffHeight*jeffHeight)

console.log(`Jeff's BMI is ${jeffBMI}`)

toddBMI = toddMass / (toddHeight*toddHeight)

console.log(`Todd's BMI is ${toddBMI}`)

var jeffVsTodd

jeffBMI>=toddBMI ? jeffVsTodd = true : jeffVsTodd=false

console.log(`does Jeff has higher BMI than John : ${jeffVsTodd}`)