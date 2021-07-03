// // Logical Operators
// &&	and	(x < 10 && y > 1) is true	

// ||	or	(x === 5 || y === 5) is false	

// !	not	!(x === y) is true

/**
 * Logical Operators Only Used When We Have Two orMore conditions and Result comes from both of Their Participation. 
 */

// && <----> || <----> !

/**
 *  A && B
    true && true = true
    true && false = false
    false && true = false
    false && false = false
    // && am%
 */

var a = 10
var b = 20
var c = 40
var d = 30

if(a > b && c > d){
    console.log('a is greater than B and C is greater than D')
} else {
    console.log('At least one condition is false')
}

/**
    *  A "" B
    true || true = true 
    true || false = true
    false || true = true
    false || false = false
*/

if(a > b || c > d) {
    console.log('A is greater than B or C is greater than D')
}else {
    console.log('At last one condition is false')
}


// !	not	!(x === y) is true

var check = !!(a > b)
console.log(check)

