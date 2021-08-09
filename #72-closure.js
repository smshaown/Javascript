
// First Look at Closure

var b = 10  // global
function a() {
    var x = 5

    return function () {
        console.log(x)
    }
}

var abc = a()
console.dir(abc) // open chromo browser 