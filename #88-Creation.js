/* "জাভাস্ক্রিপ্টঃ হোইস্টিং(Hoisting) নিয়ে ধারণা | হাতেকলমে জাভাস্ক্রিপ্ট" https://zonayed.js.org/basic/post-14

#88-Creation and Execution of Context in Javascript

জাভাস্ক্রিপ্টঃ হোইস্টিং(Hoisting) নিয়ে ধারণা
হোইস্টিং নিয়ে আসলে আমাদের কিছু করতে হবে না। এটা জাভাস্ক্রিপ্ট এর ডিফল্ট বিহেভিয়ার। আগের পর্বে যেখানে আমি জাভাস্ক্রিপ্ট এর বিহ্যাইন্ড দ্যা সীন নিয়ে আলোচনা করেছি সেখানে দেখে থাকবেন জাভাস্ক্রিপ্ট যাবতীয় ডিক্লেয়ারেশনগুলোকে সবসময় সবকিছুর আগে নিয়ে যায়। এটাই মূলত হোইস্টিং। এটা যেহেতু ডিফল্ট বিহেভিয়ার তাই হয়তো অনেকজায়গায় এটা নিয়ে লেখা নাও পেতে পারেন। তবে জাভাস্ক্রিপ্ট এর বেস স্ট্রং করার জন্যে সবকিছু নিয়ে জানা উচিত। আর হোইস্টিং এর উদাহরন আমি বেশ কয়েকটা আগের পর্বেও উল্ল্যেখ করেছি। কিন্তু এই পর্বে শুধুমাত্র স্পেসেফিকলি হোইস্টিং নিয়েই আলোচনা করবো।
যেহেতু হোইস্টিং ডিফল্ট বিহেভিয়ার, তাই জাভাস্ক্রিপ্ট এ সব ফাংশনগুলো ক্রিয়েশন ফেজে হোইস্টেড করা থাকে। এজন্যে আসলে আমরা চাইলে একটা ফাংশন ডিক্লেয়ার করার আগে সেটাকে কল করতে পারি।
aFunc();

function aFunc() {
   var a = 10;
   var b = 20;
   var sum = a + b;
   console.log('Sum: ' + sum);
}

আউটপুটঃ

কাজ করার কারণ ক্রিয়েশন ফেজে জাভাস্ক্রিপ্ট এর ডিফল্ট বিহেভিয়ারের জন্যে। আমি ক্রিয়েশন ফেজ নিয়ে গত পর্বে আলোচনা করেছিলাম, তারপরেও সুবিধার্থে এখানেও কিছু পয়েন্ট তুলে ধরলামঃ
ফাংশনে যতগুলো আর্গুমেন্ট পাস করা হয়েছে সেগুলার আর্গুমেন্ট লিস্ট তৈরী করা হয়
কোড সব ফাংশন স্ক্যান করে এবং প্রত্যেকটা ফাংশন একটা ভ্যারিয়েবল অবজেক্ট এ স্টোর করা হয় যেটা সাধারণত ফাংশনটাকে পয়েন্ট করে।
তারপর কোড ভ্যারিয়েবল এর ডিক্লেয়ারেশনগুলো খোঁজ করে। এবং প্রত্যেকটা ডিক্লেয়ারকৃত ভ্যারিয়েবলের জন্যে undefined প্রপার্টি সেট করে দেয়।
তারপর কোড এক্সিকিউশেন ফেজে যায় এবং এক্সকিউশেন কন্টেক্সট অনুযায়ী লাইন বাই লাইন কোড এক্সিকিউট হয়।
আর এজন্যেই ফাংশন ডিক্লেয়ারেশন আগে আগে ক্রিয়েশন ফেজে থাকার কারনে এবং ফাংশন কল এক্সিকিউশেন ফেজে এক্সিকিউট হওয়ার কারণে আমরা ফাংশন ডিক্লেয়ার করার আগেও চাইলে ব্যবহার করতে পারি।
কিন্তু ফাংশন এক্সপ্রেশন এইভাবে কাজ করবে না। কারণ ফাংশন এক্সপ্রেশনে আমাদের ফাংশন একটা ভ্যারিয়েবলে স্টোর করে রাখি। আর সেই ভ্যারিয়েবল ক্রিয়েশন ফেজে undefined হিসাবে সেট করা হয়। অরিজিনাল ফাংশনটা পরে এক্সিকিউট হয়, তাই ফাংশন এক্সপ্রেশনের ক্ষেত্রে ডিক্লেয়ারের আগে ফাংশন কল করলে সেটা ফাংশন না বলে এরর দেখাবে। কারণ আসলেই সেটা এই মূহূর্তে ফাংশন না, জাস্ট একটা ভ্যারিয়েবল।
name();

var name = function() {
   console.log('My name is Zonayed Ahmed');
}


সেইমভাবে আমরা চাইলে একটা ভ্যারিয়েবলও ডিক্লেয়ার করার আগে সেটা ব্যবহার করতে পারি। ক্রিয়েশন ফেজের কারণে আপনি একটা ভ্যারিয়েবল ডিক্লেয়ার করার আগে সেটা ব্যবহার করলে কোনো এরর দেখাবে না, কিন্তু সেই ভ্যারিয়েবলটা undefined দেখাবে যেহেতু ক্রিয়েশন ফেজে এটাকে undefined হিসাবে সেট করা হয়েছে।
console.log('Value: ' + a);
var a = 10;


কিন্তু পরে যদি কখনোই সেই ভ্যারিয়েবল ডিক্লেয়ার করে না থাকেন তাহলে সেটা ব্যবহার করতে চাইলে এরর আসবেঃ
console.log('Value: ' + x);


তো আশা করি এবার হোইস্টিং সম্পর্কে ক্লিয়ার ধারণা হয়েছে। তবে ভালো প্র্যাক্টিসের জন্যে কখনোই ফাংশন ডিক্লেয়ার করার আগে সেটা ইউজ করা ঠিক না। কিন্তু জাভাস্ক্রিপ্ট বিহ্যাইন্ড দ্যা সীনে কীরকমভাবে কাজ করে সেটা বুঝার জন্যে অবশ্যই অনেক কাজের। কোনো কোনো সিচুয়েশানে হয়তো এধরনের টেকনিকের জন্যে অনেক হেল্পফুল হতে পারে।
তো আজকে এই পর্যন্তই, ভালো থাকবেন আর পাশের মানুষটিকে ভালো রাখবেন।

 */