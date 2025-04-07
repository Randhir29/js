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

myArray.forEach(()=> ())