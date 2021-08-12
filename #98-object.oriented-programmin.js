

// OOP: Object Oriented Programming
// is paradigm paradigm based on the concept of "Objects", which can contain data, in the form of fields(often known as attributes), and code, in the form of procedures (often known as methods), [Source - Wikipedia]

// Example-1

Procedural 
var width = 10
var height = 20

function calculateArea(width, height){
    return width*height
}

function calculateRange(width, height){
    return2 (width+height)
}

var area = calculateArea(width,height)
var range = calculateRange(width,height)



// Object Oriented
var rect = {
    width: 10,
    height: 20,

    calculateArea: function() {
        return this.width * this.height
    },

    calculateRange: function() {
        return this.width + this.height
    }
}

var area = rect.calculateArea()
var range = react.calculateRange()















