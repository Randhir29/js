// singleton
//Object.create

//object literals
const mySym = Symbol("key1")

const Jsuser= {
    name:"Randhir",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    [mySym]:"mykey1",
    lastLoggingDays:["Monday","Saturday"],
    "full name" : "Randhir Kumar"
}
// console.log(Jsuser.email)
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email="hitesh@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email="hitesh@microsoft.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log(`Hello Js User, ${this.name}`);
}
Jsuser.greetingTwo = function(){
    console.log("Hello Js User");
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
