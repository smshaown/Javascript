

        // What is Currying in javascript

  function add(a, b, c) {
    return a + b + c
  }

//   add(41, 52, 63)

function currying (a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

var result = currying(5)(10)(15)
console.log(result)