/* ====Javascript Execution Context====



##জাভাস্ক্রিপ্টে এক্সিকিউশন কনটেক্সট কি?



January 2, 2021/in Blog /by Saroar Shahan
আপনি যদি জাভাস্ক্রিপ্ট ডেভেলপার হন বা হতে চান, তাহলে আপনাকে অবশ্যই জানতে হবে কিভাবে জাভাস্ক্রিপ্ট প্রোগ্রামগুলি ইন্টার্নালী এক্সিকিউট হয়। এক্সিকিউশন কনটেক্স জাভাস্ক্রিপ্টের অন্যান্য কনসেপ্টগুলি যেমন – হোয়েস্টিং, স্কোপ, এবং ক্লোজার বোঝার জন্য অত্যন্ত গুরুত্বপূর্ণ।

আজকের এই পোস্টে শিখবো, জাভাস্ক্রিপ্টে এক্সিকিউশন কনটেক্স কি। তাহলে বেশি কথা না বলে চলুন শুরু করে দেই আমাদের আজকের মিশন।

এক্সিকিউশন কন্টেক্স কি?
এক্সিকিউশন কন্টেক্স একটি এনভাইরনমেন্ট যেখানে জাভাস্ক্রিপ্ট কোড এক্সিকিউট করা হয়। যখনই জাভাস্ক্রিপ্টে কোন কোড রান করা হয়, এটি একটি এক্সিকিউশন কন্টেক্সের মধ্যে রান করা হয়।

জাভাস্ক্রিপ্টে তিন ধরনের এক্সিকিউশন কন্টেক্স আছেঃ-
গ্লোবাল এক্সিকিউশন কন্টেক্স – এটি ডিফল্ট এক্সিকিউশন কন্টেক্স। যে কোডটি কোন ফাংশনের ভিতরে নেই তা গ্লোবাল এক্সিকিউশন কন্টেক্সে আছে। এটি দুটি জিনিস সম্পন্ন করেঃ
১। এটি একটি গ্লোবাল অবজেক্ট তৈরি করে যা একটি window অবজেক্ট (ব্রাউজারের ক্ষেত্রে) এবং global অবজেক্ট (নোডের ক্ষেত্রে)
২। this এর ভ্যালু হিসাবে গ্লোবাল অবজেক্টকে সেট করে। একটি প্রোগ্রামে শুধুমাত্র একটি গ্লোবাল এক্সিকিউশন কন্টেক্স থাকতে পারে।

ফাংশন এক্সিকিউশন কন্টেক্স – যখনই কোন ফাংশন কল করা হয়, সেই ফাংশনের জন্য জেএস ইঞ্জিন একটি নতুন এক্সিকিউশন কন্টেক্স তৈরি করে। প্রতিটি ফাংশনের নিজস্ব এক্সিকিউশন কন্টেক্স আছে। একাধিক সংখ্যক ফাংশন এক্সিকিউশন কন্টেক্স হতে পারে। ফাংশন এক্সিকিউশন কন্টেক্সের গ্লোবাল এক্সিকিউশন কন্টেক্সের সকল কোড অ্যাক্সেস আছে যদিও গ্লোবাল কন্টেক্সের ফাংশন এক্সিকিউশন কন্টেক্সের কোডের অ্যাক্সেস নেই। গ্লোবাল এক্সিকিউশন কন্টেক্সের কোড এক্সিকিউট করার সময় যদি জেএস ইঞ্জিন কোন ফাংশন কল পায়, এটি সেই ফাংশনের জন্য একটি নতুন ফাংশন এক্সিকিউশন কন্টেক্সত তৈরি করে। ব্রাউজার কন্টেক্সে, যদি কোড strict মোডে এক্সিকিউট করা হয়, তাহলে this এর ভ্যালু undefined অন্যথায় window অবজেক্ট হবে ফাংশন এক্সিকিউশন কন্টেক্সে।

ইভাল এক্সিকিউশন কন্টেক্স – ইভাল ফাংশনের ভিতরে এক্সিকিউশন কন্টেক্স।

নিম্নলিখিত কোড দেখুনঃ

let a = 7;

const multByTen = a => a * 10;

let results = multByTen(a);

console.log(results); // 70
উপরের কোডে লক্ষ্য করুনঃ

প্রথমে, a ভ্যারিয়েবলে 7 অ্যাসাইন করা হয়েছে।
দ্বিতীয়ত, একটি ফাংশন multByTen() ডিক্লেয়ার করা হয়েছে যা 10 এর সাথে তার আর্গুমেন্ট কে গুণ করে।
তৃতীয়ত, একটি প্যারামিটার হিসাবে a পাস করে multByTen() ফাংশনকে কল করে এবং ভ্যারিয়েবল results – এ রিটার্ন মান অ্যাসাইন করা হয়েছে।
পরিশেষে, কনসোলে ভ্যারিয়েবল results আউটপুট করা হয়েছে।
অনেক সহজ কোডটা তাই না? যাইহোক, বিহাইন্ড দ্যা সিন জাভাস্ক্রিপ্ট অনেক কিছু করে। ইতিমধ্যে আমরা এক্সিকিউশন কন্টেক্স সম্পর্কে জেনে গেছি। কিন্তু প্রতিটি এক্সিকিউশন কন্টেক্সে দুটি করে phases আছেঃ ১। creation phase এবং ২। execution phase।

১। CREATION PHASE
একটি গ্লোবাল অবজেক্ট তৈরি করে অর্থাৎ, ওয়েব ব্রাউজারে window বা নোড জেএসে global।
একটি this অবজেক্ট বাইন্ডিং তৈরি করে যা উপরের গ্লোবাল অবজেক্টকে নির্দেশ করে।
ভ্যারিয়েবল এবং ফাংশন রেফারেন্স স্টোর করার জন্য একটি মেমোরি হীপ সেটআপ করে।
ভ্যারিয়েবলের ইনিশিয়াল ভ্যালু হিসাবে undefined গ্লোবাল এক্সিকিউশন কন্টেক্সে এবং ফাংশন ডিক্লেয়ারেশনগুলি মেমোরি হীপে স্টোর করে।
আমাদের উদাহরণে, creation phase – এ জাভাস্ক্রিপ্ট ইঞ্জিন গ্লোবাল এক্সিকিউশন কন্টেক্সে ভ্যারিয়েবল a ও results এবং ফাংশন ডিক্লেয়ারেশন multByTen() স্টোর করে। এছাড়াও, এটি ভ্যারিয়েবল a এবং results কে undefined হিসাবে ইনিশিয়ালাইজ করে।

GLOBAL EXECUTION CONTEXT (CREATON PHASE BROWSER)
window: Global Object
this: window
a: undefined
multByTen: fn()
results: undefined
Creation phase এর পর, গ্লোবাল এক্সিকিউশন কন্টেক্স execution phase শুরু করে।

EXECUTION PHASE
Execution phase – এ, জাভাস্ক্রিপ্ট ইঞ্জিন লাইন বাই লাইন কোড এক্সিকিউট করে। এই phase -এ, এটি ভ্যারিয়েবলের মান অ্যাসাইন করে এবং ফাংশন কল এক্সিকিউট করে।

GLOBAL EXECUTION CONTEXT (EXECUTION PHASE BROWSER)
window: Global Object
this: window
a: 7
multByTen: fn()
results: multByTen(a)
আমরা আগেই জেনেছি প্রতিটি ফাংশন কলের জন্য জাভাস্ক্রিপ্ট ইঞ্জিন একটি নতুন ফাংশন এক্সিকিউশন কন্টেক্স তৈরি করে। ফাংশন এক্সিকিউশন কন্টেক্স গ্লোবাল এক্সিকিউশন কন্টেক্সের মতই কিন্তু ফাংশন এক্সিকিউশন কন্টেক্স গ্লোবাল অবজেক্ট তৈরি করার পরিবর্তে এটি arguments অবজেক্ট তৈরি করে যা ফাংশনে পাস করা সকল প্যারামিটারের একটি রেফারেন্স ধারণ করে:

FUNCTION EXECUTION CONTEXT (CREATION PHASE BROWSER)
arguments: Local Object
this: window
a: undefined
আমাদের উদাহরণে, ফাংশন এক্সিকিউশন কন্টেক্স arguments অবজেক্ট তৈরি করে যা ফাংশনে পাস করা সকল প্যারামিটারকে নির্দেশ করে, this এর মান হিসাবে গ্লোবাল অবজেক্টে window কে সেট করে। এবং a প্যারামিটার কে undefined হিসাবে ইনিশিয়ালাইজ করে।

FUNCTION EXECUTION CONTEXT (EXECUTION PHASE BROWSER)
arguments: Local Object
this: window
a: 7
ফাংশন এক্সিকিউশন কন্টেক্সে Execution phase চলার সময়, এটি a প্যারামিটারে 7 অ্যাসাইন করে এবং ফলাফল (70) গ্লোবাল এক্সিকিউশন কন্টেক্সের results ভ্যারিয়েবলে রিটার্ন করেঃ

GLOBAL EXECUTION CONTEXT (EXECUTION PHASE BROWSER)
window: Global Object
this: window
a: 7
multByTen: fn()
results: 70
আজকের লেখায়, ৭৩০ এর বেশি শব্দ পড়ে আমি বলতেই পারি আপনি জাভাস্ক্রিপ্টের এক্সিকিউশন কন্টেক্স, গ্লোবাল এক্সিকিউশন কন্টেক্সট এবং ফাংশন এক্সিকিউশন কন্টেক্স সম্পর্কে শিখেছেন। যদি কোন প্রশ্ন বা মতামত থাকে তাহলে অবশ্যই কমেন্ট করে জানাবেন। জাভাস্ক্রিপ্ট ইঞ্জিন সকল এক্সিকিউশন কন্টেক্স ট্র্যাক রাখতে কল স্ট্যাক নামক একটি Data Structure ব্যবহার করে। পরবর্তি কোন একটি আর্টিকেলে সেটি নিয়ে বিস্তারিত আলোচনা করার চেষ্টা করবো ইনশাআল্লাহ্‌।

SHARE THIS ENTRY

 */