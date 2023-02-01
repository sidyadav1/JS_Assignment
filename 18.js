// What will be the output for the following:
var a = () => {
  console.log("a called");
};
a();
var a = 34;
a();

// function call at line 5 will call function a and 'a called' will be printed

// function call at line 7 will throw an type error as 'a' has been reassigned to value 34 which is not a function
