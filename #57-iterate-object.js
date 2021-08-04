
// Iterate js

var obj = {
    x: 40,
    y: 60,
    z: 75
}

console.log('x' in obj)
// Ans: true ache 
console.log('p' in obj)
// Ans: false nai

for(var i in obj){
    // console.log(i)
    console.log(i + ': ' + obj[i])
}
