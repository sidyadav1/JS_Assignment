// What will be the output of the following code?
var a = { a: 1 };
var b = { a: 1 };

console.log(a == b);
console.log(a === b);

// console.log(a == b) => false
// console.log(a === b); false

// inside both console log a and b are object references and point to different memory
// location and hence a and b are not equal

var c = a;
console.log(a == c);
console.log(a === c);

// console.log(a == c); true
// console.log(a === c); true

// var c point to thr same memory location as a
// hence the a and c are same memory references
