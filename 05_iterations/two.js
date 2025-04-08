// while
// A while loop is used when the number of iterations is unknown, like reading user input until it meets a condition.
// A for loop is better when the number of iterations is predefined, like iterating over a fixed range.

let index=0
while (index<=10) {
//    console.log(`Value of index is ${index}`);
    index= index+2
}

myArray= ['flash','batman','superman']

let arr = 0
while (arr < myArray.length) {
    // console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1 
}

let score = 11

do {
   console.log(`Score is ${score}`);
   score++
} while (score <= 10);