


/* function greet(msg) {
    function greetings (name) {
        return msg + ', ' + name + '! '
    }

    return greetings
}

var gm = greet('Good Morning')
var gn = greet('Good Night')
var hello = greet('Hello')


var msg = gm('sm shaown')
console.log(gn('Twinkle Cats'))
console.log(msg)
console.log(hello('Shegufa Taranjum')) */


// kun akita number ke power ke aqliment korbo

function base(b) {
    return function(n) {
        var result = 1 
        for(var i = 0; i< b; i++) {
            result *= n
        }
        return result
    }
}

var base10 = base(10)
console.log(base10(2))

var base5 = base(5)
console.log(base5(2))
console.log(base5(3))
console.log(base5(4))
console.log(base5(5))