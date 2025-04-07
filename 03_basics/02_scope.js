// Global Scope
var c=300
let a= 300

//Block scope -> {}
if (true){
    let a =10
    const b = 20
    // c= 30 // var c= 30 : same problem
    console.log("Inner: ", a);
    
}

// console.log(a); // Will show error if global scope not defined
// console.log(b); // Will show error
// console.log(c);
