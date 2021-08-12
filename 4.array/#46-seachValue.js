var arr = [7, 3, 5, 6, 9, 10, 11, 12, 15, 17] 
var find = 100
var isFound = false
for(var i = 0; i<arr.length; i++){
    if(arr[i] === find){
        console.log('Data Found at Index ' + i)
        isFound = true
        break;
    }
}

if(!isFound){
    console.log('Data Not Found')
}