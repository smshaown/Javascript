// Array Methods

var arr = [1, 2, 3, 4, 5, 6]
var arr2 = [4, 5, 55, 50, 100]
// console.log(arr.join(' | '))
// ans: 1 | 2 | 3 | 4 | 5 | 6 

// arr.fill(true)
// console.log(arr)
// ans:[ true, true, true, true, true, true ]

// var arr3 = arr.concat(arr2)
// console.log(arr3)
// ans:[1, 2, 3,  4,  5, 6, 4, 5, 55, 50, 100 ]

// console.log(Array.isArray(arr))
// ans: true

// var arr3 = Array.from(arr)
// console.log(arr3)

var a = [1, 2] 
var b = Array.from(a)
b[0] = 5 
console.log(a)