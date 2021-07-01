

// https://www.w3schools.com/jsref/jsref_operators.asp


/*

+	Addition	x = y + 2	y = 5	x = 7	
-	Subtraction	x = y - 2	y = 5	x = 3	
*	Multiplication	x = y * 2	y = 5	x = 10	
/	Division	x = y / 2	y = 5	x = 2.5	
%	Modulus (division remainder)	x = y % 2	y = 5	x = 1	
++	Increment	x = ++y	y = 6	x = 6	
x = y++	y = 6	x = 5	
--	Decrement	x = --y	y = 4	x = 4	
x = y--	y = 4	x = 5




// Arithmetic Operator
// + - * / % ++ --

var a = 11
var b = 6

// console.log(a % b);

//------> Incremental 2 set
//  1. Pre Incremental - 2. Post Incremental

// 1. Pre Incremental
console.log(++a)
console.log(--b)

// 2. Post Incremental
console.log(a++)  // ----------> a = a + 1
console.log(b--);


*/

// JavaScript Assignment Operators 

/*

=	x = y	x = y	x = 5	
+=	x += y	x = x + y	x = 15	
-=	x -= y	x = x - y	x = 5	
*=	x *= y	x = x * y	x = 50	
/=	x /= y	x = x / y	x = 2	
%=	x %= y	x = x % y	x = 0 


var a = 10
var b = 20

// a = a + b

a += b
console.log(a)

a -= b
console.log(a)

a *= b
console.log(a)

a /= b
console.log(a)

a %= b
console.log(a)

*/





// Comparison Operators

var a = 10
var b = 20

console.log(a == b) // false
console.log(a != b) // true

console.log(a > b) // false
console.log(a < b ) // true

a = 20

console.log(a >= b) // true
console.log(a <= b) // true

var c = '50'
var d = 50

console.log(c == d)
console.log(c === b)
console.log(c !== b)




// // Logical Operators
// &&	and	(x < 10 && y > 1) is true	

// ||	or	(x === 5 || y === 5) is false	

// !	not	!(x === y) is true



// JavaScript Bitwise Operators

// Operator	Description	 
// &	        AND	         
// |	        OR	         
// ~	        NOT	        
// <<	        Left        
// >>	        Right       



// The typeof Operator
typeof "John"                 // Returns string
typeof 3.14                   // Returns number
typeof NaN                    // Returns number
typeof false                  // Returns boolean
typeof [1, 2, 3, 4]           // Returns object
typeof {name:'John', age:34}  // Returns object
typeof new Date()             // Returns object
typeof function () {}         // Returns function
typeof myCar                  // Returns undefined (if myCar is not declared)
typeof null 