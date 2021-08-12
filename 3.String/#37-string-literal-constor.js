/*String Literal vs Constor

#Note: দুই টা কোডের ভিতরে বা ডাবল কোডের ভিতরে টেক্সট দিয়ে সেই টেক্সটা কোন একটা ভ্যারিয়েবলে এসাইন্ট করার পদ্ধতি টা কে বলা হয় String Literal 
যেমন : var str = 'something' "something"


### আমরা আরেক টা ধাপে স্ট্রিং নিতে পারি আর একটা কে বলা হয় String Constructor. 
যেমন: var str2 = String('something')


#Note: যে কোন স্ট্রিং এর সাথে কোন নাম্বার যদি +প্লাস সাইন দিয়ে কন্টাক্ট হয় তাহলে সেটা স্ট্রিং এ কনভার্ট হয়ে যাই  */

var n = 10 
var str = n + ''
console.log(str)

var n = 10 
var str = n.toString()
console.log(str)
 
/*
#Note:এছাড়া আমরা constructor ব্যবহার করে ডিরেক্ট লি একটা নাম্বার কে বা যে কোন টাইপের ডেটা কে স্ট্রিং এ কনভার্ট করতে পারি  */

var n = 10
var str = String(n)
console.log(str)






