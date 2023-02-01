// What will be the output of the following code?
let a;
console.log(a === undefined);
console.log(a === null);
console.log(a * 2);
console.log(`${a} is the value of a`);

// true
// false
// NaN
// undefined is the value of a

// console.log(a === undefined); => true
// Since a hasn't been initialized, it's undefined

// console.log(a === null); => false
// null is identical to undefined but not equal, therefore === will give false while == will give true

//console.log(a * 2);
// isNan(undefined) gives true, undefined is not a number, multiplying it with a number will result in NaN

// console.log(`${a} is the value of a`);
// a is undefined and it's value as undefined will be substituted inside the template literal string
