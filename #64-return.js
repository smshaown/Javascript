
// Return Function

function addAll() {
    var sum = 0 
    for(var i = 0; i<arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}

var result = addAll(1, 2, 3)
console.log(result)


// Object return

function person(name, email){
    return {
        name: name,
        email: email
    }
}

var pi  = person('sm nayem', 'hasan.m.nayem@gmail.com')
console.log(pi)
