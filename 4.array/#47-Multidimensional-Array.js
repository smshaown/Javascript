// Multidimensional Array

// 3 dimensional array
// var arr = [
//     [ 
//              [],
//              [],
//              []
//      ],
//      [
//              [],
//              [],
//              []
//      ],
//       [
//              [],
//              [],
//              []
//      ]
// ],

var arr = [
    [78, 71, 80, 90],
    [80, 75, 90, 86],
    [71, 75, 79, 80]
]
// console.log(arr)
// console.log(arr[0][1])
// console.log(arr[1][1])
// console.log(arr[2][0])

for(var i = 0; i<arr.length; i++){
    for(var j = 0; j<arr[i].length; j++){
        console.log('Element ' + i + ': ' + arr[i][j])
    }
}

