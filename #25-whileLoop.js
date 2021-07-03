

// var n = 0;
// while(n < 10){
//     console.log(n)
//     n++
// }


var isRunning = true 
while(isRunning) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if(rand === 9){
        console.log('Winner Winner Chicken Dinner')
        isRunning = false
    }else{
        console.log('You have got ' + rand)
    }
}