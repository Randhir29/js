// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB Connected`);
})(); // semi- colon is necessary as IIFE function doesnot know where to end.

//()() // First parenthesis is where we will write function definition i.e. wrapping the function & Second parenthesis will be it's execution. It is done to eliminate the pollution from global scope variable

((name)=>{
    console.log(`DB Connected two ${name}`);
} )('hitesh')