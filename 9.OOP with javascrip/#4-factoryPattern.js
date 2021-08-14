/* var rect = {
    width: 100,
    hight: 50,

    draw: function() {
        console.log('I am ra rectangle')
        this.printProperties();
        console.log(this)
    },
    printProperties: function() {
        console.log('My width is ' + this.width)
        console.log('My height is ' + this.height)
    }
} */


     /*  Factory Pattern */

var createReact = function (width, height)  {
     return {
        width: width,
        hight: height,
    
        draw: function() {
            console.log('I am ra rectangle')
            this.printProperties();
            console.log(this)
        },
        printProperties: function() {
            console.log('My width is ' + this.width)
            console.log('My height is ' + this.height)
        }
    }
}

var rect1 = createReact(10, 8)
rect1.draw()


var rect2 = createReact(40, 30)
rect2.draw()    
