// Global Scope
var c=300
let a= 300

//Block scope -> {}
if (true){
    let a =10
    const b = 20
    // c= 30 // var c= 30 : same problem
    // console.log("Inner: ", a);
}

// console.log(a); // Will show error if global scope not defined
// console.log(b); // Will show error
// console.log(c);

function one(){
    const username= "randhir"
    
    // Defining Function two()
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);// will give an error as the block scope for website was upto function two() only.
    
    // The child Function can access Parent Variables
    // Calling function two()
    two() // will print "randhir" as username is having global scope for function two()
}

// Calling Function one()
//one()

if(true){
    const username= "hitesh"
    if(username==="hitesh"){
        const website ="youtube"
        //console.log(username+website);
    }
    // console.log(website);// Error: website value not defined outside scope
}

// console.log(username);// Error: username value not defined outside scope

//++++++++++++++++ Ineteresting ++++++++++++++

console.log(addone(5));// No error will come

function addone(num){
    return num+1
}

// Expression

//addtwo(7)// Error will come
const addtwo = function(num){
    return num + 2
}

addtwo(7)

