/* 

Javascript: Compiled vs Interpreted




Interpreted → যখন আপনি একটা কোড রান করবেন বা একটা কোড লেখবেন instantly সাথে সাথে সে রান করতে পারবে,, আলাদা কোনো স্টেপ এর দরকার নাই 

=============================


>
ইবনে সিনা


জাভাস্ক্রিপ্টে হাতেখড়ি
06 April 2019 — Written by ইবনে সিনা
#জাভাস্ক্রিপ্ট#জেএস

প্রারম্ভিকা
জাভাস্ক্রিপ্ট কি?
জাভাস্ক্রিপ্ট একটি লাইটওয়েট ইন্টারপ্রেটেড অথবা জাস্ট টাইম কম্পাইলড (JIT) প্রোগ্রমিং ল্যাঙ্গুয়েজে যেটাতে ফার্স্ট ক্লাস ফাংশন আছে ।

ফার্স্ট ক্লাস ফাংশন মানে হলো, যেখানে ফাংশন ভেরিয়েবল এর মতো করে ব্যবহার করা যায়। এটা নিয়ে আরো বিস্তারিত আমরা পরে শিখবো, এখন এতটুকু জানলেই চলবে।

জাভাস্ক্রিপ্ট মূলত ওয়েব ব্রাউজারে চলে, তবে এখনকার দিনে শুধু ওয়েব ব্রাউজারে সীমাবদ্ধ নয়। NodeJS দিয়ে আমরা জাভাস্ক্রিপ্ট ওয়েব ব্রাউজারের বাহিরেও লিখতে পারি।

জাভাস্ক্রিপ্ট প্রোটোটাইপ বেজ, মাল্টিপ্যারাডাইম, ডাইনামিক ল্যাঙ্গুয়েজ। এই শব্দ গুলা দেখে মাথা খারাপ করার কিছু নাই। আস্তে আস্তে আমরা সব শিখবো।

এটি অবজেক্ট ওরিয়েন্টেড এবং ডিক্লারেটিভ বা ফাংশনাল দুই ধরণের স্টাইলে লিখা যায়।

জাভাস্ক্রিপ্টের স্ট্যান্ডার্ড মেইনটেইন করে ECMA নামের একটি প্রতিষ্ঠান।

এই পোস্টটি লেখার সময় ECMAScript এর ভার্সন হলো ২০১৮ বা ECMAScript ২০১৮। মডার্ন ওয়েব ব্রাউজারে (গুগল ক্রোম, ফায়ারফক্স) ECMAScript ৫.১ বা ECMAScript ২০১৬ সাপোর্ট করে।

সন ১৯৯৫ তে, ব্রেন্ডএন্ড এইচ নামের ব্যাক্তি, তিনি তখন নেটস্কেপ নেভিগেটরে কাজ করতেন সেটি ছিল একটি ওয়েব ব্রাউজার। ওয়েব ব্রাউজারের জন্য মাত্র ১০ দিনে পুরো জাভাস্ক্রিপ্ট ল্যাংগুয়েজটি ডেভেলপ করেন। বুঝতেই পারছেন মাত্র ১০ দিনে পুরো একটা ল্যাংগুয়েজ! যার ফল আমরা ভোগ করছি , জাভাস্ক্ৰিপ্ট ল্যাঙ্গুয়েজে অনেক অপ্রত্যাশিত জিনিস পেয়েছি। আমি ইতিহাস নিয়ে এখানে খুব বেশি কথা বলবোনা।

এই মোটামুটি জাভাস্ক্রিপ্টের ইতিহাস।

© ইবনে সিনা - ২০১৯

=============================

জাভাস্ক্রিপ্ট কি? জাভাস্ক্রিপ্ট কি কাজে লাগে? কেন আমাদের জাভাস্ক্রিপ্ট শেখা উচিত?
জাভাস্ক্রিপ্ট কি? জাভাস্ক্রিপ্ট কি কাজে লাগে? কেন আমাদের জাভাস্ক্রিপ্ট শেখা উচিত?
মঙ্গলবার, ২৩ মার্চ ২০২১, দুপুর ১১:৪৯ সময়

#fsmdeveloper
#javascript bangla tutorial
fsmdeveloper
fsmdeveloper

২


হ্যালো বন্ধুরা কেমন আছেন সবাই? আশা করছি সবাই ভাল আছেন। যারা নতুন এবং ওয়েব ডেভেলপমেন্ট শিখতে চাচ্ছেন কিন্তু ভালো রিসোর্স পাচ্ছেন না, মূলত তাদের জন্যই আমার এই ছোট্ট প্রচেষ্টা। এখন থেকে নতুন নতুন সব টেকনোলজি এবং মজার মজার সব টিউটোরিয়াল নিয়ে এখানে উপস্থিথ হবো।

অনেক প্যাঁচাল হয়েছে, এবার মুল বিষয়ে আশা যাক। 😂😁

জাভাস্ক্রিপ্ট কি?😏
জাভাস্ক্রিপ্ট হচ্ছে একটি হাই লেভেল ইন্টারপ্রেটেড প্রোগ্রামিং ল্যাঙ্গুয়েজ। জাভাস্ক্রিপ্ট প্রথম প্রকাশ হয় আরো ২২ বছর আগে। (December 4, 1995)

অনেকে জাভা এবং জাভাস্ক্রিপ্ট কে একই ল্যাঙ্গুয়েজ মনে করেন এবং তালগোল পাকিয়ে ফেলে এই দুটোর মাঝে। কিন্তু জাভা এবং জাভাস্ক্রিপ্ট দুটো একদম আলাদা ল্যাঙ্গুয়েজ।

দুটো ল্যাঙ্গুয়েজ তৈরী করা হয়েছে ভিন্ন ভিন্ন কাজ করার জন্য।

জাভা তৈরি করা হয়েছিল কম্পিউটার এর সাথে communicate করার জন্য আর জাভাস্ক্রিপ্ট তৈরী করা হয়েছিল ব্রাউজার এর সাথে communicate করার জন্য। তাই সহজেই বুঝতে পারছেন যে দুটোর কাজ আলাদা।

জাভাস্ক্রিপ্ট কি কাজে লাগে?🤔
যদি প্রশ্ন করেন জাভাস্ক্রিপ্ট কি কাজে লাগে? তাহলে আমি বলবো JavaScript is everywhere!!!

Techdiary: article-image
প্রথমে জাভাস্ক্রিপ্ট ব্রাউজার এর জন্য তৈরী করা হলেও তা এখন আর ব্রাউজার এর মধ্যা সীমাবদ্ধ নেই। জাভাস্ক্রিপ্ট দিয়ে এখন অনেক কিছু করা হয়, যার উদাহরণ সহ ধাপে ধাপে টিউটোরিয়াল প্রকাশ করা হবে এই ওয়েবসাইট এ।

জাভাস্ক্রিপ্ট হচ্ছে একটি ডায়নামিক ল্যাঙ্গুয়েজ। মূলত জাভাস্ক্রিপ্ট ব্যাবহার করে ডায়নামিক ওয়েব পেজ তৈরী করা হয়। এইচটিএমএল এবং সিএসএস দিয়ে একটি ওয়েব পেজ ডিজাইন করতে পারি, আর সেই ডিজাইনটিকে আরো জীবন্ত গড়ে তোলার জন্য আমরা ব্যাবহার করি জাভাস্ক্রিপ্ট।

জাভাস্ক্রিপ্ট ব্যাবহার করে এখন আপনি প্রায় সব কিছুই করতে পারবেন। আরো ৫ বছর আগেও কেও ভাবতে পারেনি যে জাভাস্ক্রিপ্ট দিয়ে এত কিছু করা যাবে!

এত কিছু সম্ভব হয়েছে Node.js এর কারনে। Node.js নিয়ে আলাদা টিউটোরিয়াল প্রকাশ করা হবে খুব শীঘ্রই, তাই চোখ রাখুন এই ওয়েবসাইট।

জাভাস্ক্রিপ্ট ব্যাবহার করে আমরা কি কি তৈরী করতে পারবো? 😎
জাভাস্ক্রিপ্ট ব্যাবহার করে আপনি Modern Interactive Web Page/Website তৈরী করতে পারবেন।
Node.Js এর সাহায্যে জাভাস্ক্রিপ্ট ব্যাবহার করে ওয়েব সার্ভার তৈরী করতে পারবেন।
React native এর সাহায্যে জাভাস্ক্রিপ্ট ব্যাবহার করে Native Android এবং Iphone Apps তৈরী করতে পারবেন।
Express.js এর সাহায্যে জাভাস্ক্রিপ্ট ব্যাবহার করে Cross Platform Desktop Software তৈরী করতে পারবেন। (Linux, Windows, Mac)
Html5 এর সাথে জাভাস্ক্রিপ্ট ব্যাবহার করে গেমস তৈরী করতে পারবেন।
জাভাস্ক্রিপ্ট ব্যাবহার করে Problem Solving ও Algorithms তৈরী করতে পারবেন।
এছারাও নানা ধরনের কাজ করার জন্য জাভাস্ক্রিপ্ট ব্যাবহার করা হয়, আর কি লাগে ভাই?😀😋

কেন আমাদের জাভাস্ক্রিপ্ট শেখা উচিত?🤥
উপরের কারন গুলো যথেষ্ট নয় কি জাভাস্ক্রিপ্ট শেখার জন্য?😌 আচ্ছা ঠিক আছে! তাহলে আরো বলতে হবে!!

প্রথমেই বলতে চাই আপনি যদি একজন ভালো ওয়েব ডেভেলপার হতে চান তাহলে আপনার কাছে আর কোন রাস্তা নেই! অবশ্যই আপনাকে জাভাস্ক্রিপ্ট শিখতে হবে।

জাভাস্ক্রিপ্ট এর কোন বিকল্প নেই।

যদি আপনি একবার জাভাস্ক্রিপ্ট শিখে ফেলতে পারেন তাহলে আপনি একজন Full Stack Developer এ পরিণত হবেন, ফলে আপনি ফ্রন্ট এন্ড এবং ব্যাক এন্ড নিয়ে কাজ করতে পারবেন। সাধারণত ব্যাক এন্ড ডেভেলপার হওয়ার জন্য আপনাকে শিখতে হত Php, Java, Python , Ruby অথবা অন্য কোন ল্যাঙ্গুয়েজ।

আর এখন আপনি জাভাস্ক্রিপ্ট শিখেই ব্যাক এন্ড ডেভেলপার হতে পারবেন, আর এর পেছনে যার অবদান রয়েছে তার নাম হচ্ছে Node.JS.

StackOverflow এর জরিপ অনুযায়ী বিশ্বের জনপ্রিয় ল্যাঙ্গুয়েজ গুলোর মধ্যে জাভাস্ক্রিপ্ট অন্যতম! কারন এটা ওয়েব এর প্রান এবং একটি শক্তিশালী ল্যাঙ্গুয়েজ।

দিন দিন এর চাহিদা বেড়েই চলেছে। একটু খেয়াল করলেই দেখতে পাবেন জাভাস্ক্রিপ্ট এর ব্যাবহার সব জায়গায়। বড় বড় ওয়েবসাইট গুলো তে ৬০% থেকে ৭০% কোড ই থাকে জাভাস্ক্রিপ্ট এর। আপনি যদি ব্রাউজার এর জাভাস্ক্রিপ্ট Disable করে ওয়েব ব্রাউজ করতে জান, দেখবেন বেশিরভাগ সাইট ঠিক মত কাজ করছে না।

এখনই চেষ্টা করে দেখুন, জাভাস্ক্রিপ্ট Disbale করে ফেইসবুকে ঢোকার চেষ্টা করুন, দেখবেন ফেইসবুক বলবে "JavaScript Required" অর্থাৎ জাভাস্ক্রিপ্ট ছাড়া আপনি ফেইসবুক ব্যাবহার করতে পারবেন না। একই সাথে আমার এই ওয়েবসাইট ও পুরো জাভাস্ক্রিপ্ট এর উপর নির্ভরশীল। জাভাস্ক্রিপ্ট ছাড়া এই ওয়েবসাইটি ও চলবে না। 😋🤩

বিশ্বের নাম করা প্রোগ্রামার এবং Stack Overflow’s co-founder বলেছেন ...

Any application that can be written in JavaScript will eventually be written in JavaScript.

ক্যারিয়ার হিসেবে জাভাস্ক্রিপ্ট ডেভেলপার কেমন হবে?😍
যদি আপনি ক্যারিয়ার হিসেবে জাভাস্ক্রিপ্ট কে বেছে নেন তাহলে আপনার কোনদিন কাজের অভাব হবে না।

জাভাস্ক্রিপ্ট ডেভেলপারদের এভারেজ বেতন 95,981 ডলার , যা বাংলা টাকায় অনেক বেশি!

এছারাও আপনি যদি কোন ফার্ম এ জব না করতে চান, আপনার জন্য রয়েছে অনলাইন মার্কেটপ্লেস। অনলাইন মার্কেটপ্লেস গুলো তে জাভাস্ক্রিপ্ট ডেভেলপারদের চাহিদা সব থেকে বেশি।

মার্কেটপ্লেস গুলো তে একজন ফ্রিল্যান্সার হিসেবে কাজ করতে পারবেন। এখানে আপনি পাবেন স্বাধীন ভাবে কাজ করার সুবিধা।

মার্কেট থেকে ক্লাইন্ট এর মাধ্যমে কাজ নিবেন এবং কাজ শেষে জমা দিয়ে আপনি আপনার কাজের পারিশ্রমিক পাবেন। খুবই সিম্পল।

কিভাবে আমরা জাভাস্ক্রিপ্ট শিখবো?🙄
যদি সত্যিই আপনি মন থেকে জাভাস্ক্রিপ্ট শিখতে চান তাহলে আপনাকে কেও আটকাতে পারবে না! অনলাইন এ হাজার হাজার রিসোর্স পাবেন জাভাস্ক্রিপ্ট শেখার জন্য। অথবা একটু অপেক্ষা করে থাকুন, এই ওয়েবসাইট এ জাভাস্ক্রিপ্ট এর উপর পূর্ণাঙ্গ টিউটোরিয়াল আসতে যাচ্ছে। । বর্তমানের সব Hot Technology গুলো নিয়ে ধাপে ধাপে টিউটোরিয়াল প্রকাশ করে যাবো এই ওয়েবসাইট এ। যেমন : Angular, React, Node.js, ES6 ইত্যাদি।

আজকের মত এখানেই বিদায় নিচ্ছি! খুব শীঘ্রই ফিরে আসবো নতুন একটি টিউটোরিয়াল নিয়ে।

ধন্যবাদ এবং Happy coding! < > 💻⌨

এই টিউটোরিয়াল টি প্রথম প্রকাশিত হয় আমার পার্সোনাল ব্লগ FsmDeveloper.Tech সাইটে! ঘুরে আসার জন্য অনুরোধ করা হলো!
Privacy Policy · Terms & Conditions · About Us
 */