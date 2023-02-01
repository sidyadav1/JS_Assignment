// What is the output of the following code?
(function () {
  setTimeout(() => console.log(1), 2000);
  console.log(2);
  setTimeout(() => console.log(3), 0);
  console.log(4);
})();

// given function is a IIFE
// first setTimeout(() => console.log(1), 2000) will be mounted
// then the execution will continue and console.log(2) will be executed
// setTimeout(() => console.log(3), 0) will be mounted and execution will move forward
// then console.log(4) will be executed
// then setTimeout(() => console.log(3), 0) timer will expire and the code inside will be executed and 3 will be printed
// then setTimeout(() => console.log(1), 2000) timer will expre and the code inside will be executed and 1 will be printed
