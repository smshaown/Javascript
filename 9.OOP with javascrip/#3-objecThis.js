var rect = {
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
}




function myFunc() {
    console.this(this)
}
new myFunc()


/// sob mahtar upor diye geche