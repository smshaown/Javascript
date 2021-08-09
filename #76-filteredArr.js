

var arr = [4, 8, 1, 4, 5, 6, 4, 3, 9]
/* 
var filteredArr = arr.filter(function (value) {
    return value % 2 === 1
})
console.log(filteredArr)
 */

function myFilter(arr, cb) {
    var newARr = []
    for(var i = 0; i<arr.length; i++){
        if(cb(arr[i], i, arr)){
            newARr.push(arr[i])
        }
    }
    return newARr
}

console.log(myFilter(arr, function (value){
    return value % 2 === 1
}))

console.log(myFilter(arr, function (value){
    return value > 5
}))