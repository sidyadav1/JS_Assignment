console.log(0 / 0 === 0 / 0);
console.log(0 / 0 == 0 / 0);
console.log(Number.isNaN(0 / 0) === Number.isNaN(0 / 0));

// console.log(0 / 0 === 0 / 0); => false
// According to ecma is NaN is present on either side of strict equality operator (===)
// then false will be returned
// https://262.ecma-international.org/5.1/

// console.log(0 / 0 == 0 / 0); => false
// According to ecma is NaN is present on either side of abstract equality operator (===)
// then false will be returned
// https://262.ecma-international.org/5.1/

// console.log(Number.isNaN(0 / 0) === Number.isNaN(0 / 0));
// Number.isNan(0 / 0) will return true, therefore true === true will evaluate to true
