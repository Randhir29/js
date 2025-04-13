// Promise object comprises of a callback function consisting of resolve & reject
const promiseOne = new Promise(function (resolve, reject) {
  //Do an async Task
  // DB Calls, cryptography, network calls
  // Mimicing the async Task by setTimeout Function
  setTimeout(function () {
    console.log('Async task is completed');
    // Upon calling resolve function within setTimeout function, then only result (values, files and data) from setTimeout function will be returned upon execution of ".then" method on promiseOne function.
    resolve()
  },1000)   
})

//whatever the setTimeout function returns after One Second through relaying effect from resolve() method is received in callback function of promiseOne.then(...) 

promiseOne.then(function () {
    console.log("Promise consumed");
})


// 2nd Way of writing Promise Object:

new Promise(function(resolve,reject){
setTimeout(function(){
    console.log("Async Task 2 completed");
    resolve()
},1000)
}).then(function(){
    console.log("Async 2 Resolved");
})

// Passing Object in resolve method

const promiseThree= new Promise (function (resolve,reject) {
    setTimeout(function () {
      resolve({username:"Chai",email:"example.com"})  
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// Introducing reject & finally now

const promiseFour = new Promise (function(resolve,reject){
    setTimeout(function(){
       let error =false
       if (!error){
        resolve({username:"randhir",password:"12345"})
       }else{
        reject('ERROR: Something went wrong')
    }}
    ,1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username
    // value returned at first level will be value for second level of ".then"
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("The promise is either got resolved or rejected"))


// const userName = promiseFour
//                 .then(function(user){
//                     console.log(user);
//                     return user.username
//                 })

//console.log(userName);This will not work when storing output of promiseFour () in variable userName

// Introducing async & await

const promiseFive = new Promise (function(resolve,reject){
    setTimeout(function(){
       let error =true
       if (!error){
        resolve({username:"Javascript",password:"12345"})
       }else{
        reject('ERROR: JS went wrong')
    }}
    ,1000)
})

async function consumepromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
       console.log( error);
    }
}

consumepromiseFive()

// Introducing fetch() now:
//fetch() is a global function which starts the process of fetching a resource from the network, returning a promise
// A fetch() promise only rejects when a network error is encountered (which is usually when there's a permission issue or similar). A fetch() promise doesnot reject on Http errors (404, etc.).Instead a then() handler must check the Response.ok and/or Response.status properties.
// Resources to read: https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// async function getAllUsers() {
//    try {
//     const response= await fetch('https://jsonplaceholder.typicode.com/users')
//    const data=await response.json()
//    console.log(data);
//    } catch (error) {
//     console.log('E:', error);
//    }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
    return response.json()// response returned / fetched is in string format
    // value returned at first level will be value for second level of ".then"
})
.then((data)=> console.log(data))
.catch((error)=> console.log(error))
