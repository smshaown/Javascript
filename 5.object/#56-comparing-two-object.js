// Comparing Two Object

// #first step

var obj1 = {
    a: 10,
    b: 20
}

var obj2 = {
    a: 10,
    b: 20
}

if(obj1.a === obj2.a && obj1.b === obj2.b){
    console.log(true)
}else{
    console.log(false)
}
// Ans: true // two comparing done true sem

// ### two step
// JSON.stringify()
console.log(obj2)
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))
// ans: true / false