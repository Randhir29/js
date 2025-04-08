const myObject={
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for in loops are suitable for looping on objects
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming =["js","rb","py","java","cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set=('IN',"India")
map.set=('USA',"United States of America")
map.set=('FR',"France")

for (const key in map) {
    // console.log(key);// => will not give any output as maps are non- iterable
}