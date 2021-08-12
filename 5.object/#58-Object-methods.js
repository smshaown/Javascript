
// Object.keys()
var obj = {
    x: 40, 
    y: 60,
    z: 75
}

console.log(Object.keys(obj))
// Ans:[ 'x', 'y', 'z' ]
console.log(Object.values(obj))
// Ans:[ 40, 60, 75 ]
console.log(Object.entries(obj))
// Ans: [ [ 'x', 40 ], [ 'y', 60 ], [ 'z', 75 ] ]


// Object assign({}, )

var obj2 = Object.assign({}, obj)
obj2.x = 100

console.log(obj)
// Ans: { x: 40, y: 60, z: 75 }
console.log(obj2)
// Ans: { x: 100, y: 60, z: 75 }