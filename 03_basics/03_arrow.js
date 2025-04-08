const user ={
    username:"hitesh",
    price:999,

    welcomeMessage :function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
    // this keyword refers current context
}

// user.welcomeMessage()// without parenthesis no output will come since it is a function
// user.username="sam"
// user.welcomeMessage()// output will be with sam as username

// console.log(this);// output will be -> {} (empty) sine there is no any global context in node enviroment

// function chai(){
//     console.log(this);// it will print a lot of things
//     let username ="hitesh"
//     console.log(this.username);// Output will be undefined. this represents context only in case of objects
// }

// chai()

// const chai = function(){
//     let username ="hitesh"
//     console.log(this.username);
// }

// One more way declaring functions as arrow functions:
// Remove function keyword and add "=>" after () to define function
const chai = () => {
    let username ="hitesh"
    console.log(this.username);
}

// chai()

//+++++++++++ Arrow Function ++++++++++++++++

// const addTwo= (num1,num2)=> {
//     return num1+num2
// }

// Implicit return
// const addTwo= (num1,num2)=> num1+num2
// const addTwo= (num1,num2)=> (num1 + num2) // Most used in React
const addTwo= (num1,num2)=> ({username:"hitesh"}) // undefined value will come when we are not wrapping objects in paranthesis

// console.log(addTwo(7,5));

const myArray =[1,4,5,67,8]

// myArray.forEach(()=> ())

    const userOne = {
        name: "Alice",
        sayHello: function () {
          console.log("Hello from", this.name);
        }
      };
      
      userOne.sayHello(); // 👉 Hello from Alice
      // In regular functions, this refers to the object before the dot. In this case: userOne.
    
      const userTwo = {
        name: "Alice",
        sayHello: function () {
          setTimeout(function () {
            console.log("Hello from", this.name);
          }, 1000);
        }
      };
      
      userTwo.sayHello(); // 👉 Hello from undefined
      //Because inside setTimeout, the function is no longer called by userTwo. It’s just a plain function call, and in that case, this refers to the global object (window in browsers), not userTwo.

    //   A regular function decides this at runtime,    when it's called.

    //   🧭 It does not care about where it was written or where it originally came from.
    
    //   That’s why we say:
    
    //   "How it's called" matters more than "where it's written."

      //Arrow functions don’t get their own this. Instead, they use this from the surrounding code (lexical scope).

      const userThree = {
        name: "Alice",
        sayHello: function () {
          setTimeout(() => {
            console.log("Hello from", this.name);
          }, 1000);
        }
      };
      
      userThree.sayHello(); // 👉 Hello from Alice ✅

    //The arrow function inside setTimeout used this from sayHello().

    // Since sayHello() was called by userThree, this is userThree, even inside the arrow function.

    //Case	What this refers to
    // Inside a regular method:The object calling the method
    // Inside a regular nested function	The global object (window or undefined)
    // Inside an arrow function	The this of the surrounding scope

    function Person(name) {
        this.name = name;
        this.sayHello = function () {
          console.log("Hi, I'm", this.name); // 👈 this = Person
          setTimeout(() => {
            console.log("Still me:", this.name); // 👈 this = Person (arrow inherits)
          }, 1000);
        };
      }
      
const p1 = new Person("Bob");
p1.sayHello();
// Output:
// Hi, I'm Bob
// Still me: Bob


// Don’t use arrow functions as object methods if you want access to this inside the object.

const user4 = {
    name: "Alice",
    greet: () => {
      console.log("Hi, I'm", this.name);
    }
  };
  
  user4.greet(); // 👉 "Hi, I'm undefined" 😵
  
// Because:

// Arrow functions don’t get their own this.

// this inside greet: () => {} does not refer to the object (user)!

// It takes this from the outer scope, which in this case is the global object (e.g. window in browser, or undefined in strict mode).

function outer() {
    let outerVar = "I am from outer";

    function inner() {
      console.log(outerVar); // inner() can access outerVar
    }
  
    inner();
  }
  
  outer();

// Lexical = "Written" Location
// JavaScript looks at where the function was written (lexical position in code), not how or where it was called.
  

  
      
      