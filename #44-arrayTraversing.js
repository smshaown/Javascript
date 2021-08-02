// Array Traversing

var arr = [1, 2, 3, 4, 5, 6, 9, 10, 50]
// arr[0]
// arr[1]
// arr[2]
// arr[3]
// arr[4]
// arr[5]
// arr[6]
            // Traversing
for(var i = 0; i< arr.length; i++){
    // console.log(arr[i])
    // Ans:1 2 3, 4, 5, 6, 9, 10, 50,
}


        // Increach 
for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i] + 2
}
// console.log(arr)
// ans: [3,  4,  5,  6, 7, 8, 11, 12, 52 ]

  
        // sum
var sum = 0
for(var i=0; i<arr.length; i++){
    sum += arr[i]
}
// console.log(sum)
// Ans: 108

// Array even number
var even = [1, 2, 3, 4, 5, 6, 9, 10, 50]

// var arr = [1, 2, 3, 4, 5, 6, 9, 10, 50]
for(var i = 0; i<arr.length; i++){
    if(even[i] % 2 === 0){
        console.log(even[i])
        /**ans: 4 6 8 12 52 */
    }
}

// Array odd number
var odd = [1, 2, 3, 4, 5, 6, 9, 10, 50]
for(var i =0; i<odd.length; i++){
    if(odd[i] % 2 === 1){
        console.log(odd[i])
        /**ans: 3 5 9 */
    }
}
