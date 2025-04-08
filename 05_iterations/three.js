// for of

// ["","",""]
// [{},{},{}]

const arr= [1,2,3,4,5]

for (const element of arr) {
    // console.log(element);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if(greet==" "){
        continue
    }
    // console.log(`Each char is ${greet}`);
}

// Maps : Known for Unique Key - value Pairs & no duplicates will be allowed

const map = new Map()
map.set=('IN',"India")
map.set=('USA',"United States of America")
map.set=('FR',"France")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    'game1':'NFS',
    'game2':'Spiderman',
}

// for (const [key , value] of myObject) {
//     console.log(key, ':-', value);
// } => will not work for objects as objects as non- iterable