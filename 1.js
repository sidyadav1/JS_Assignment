// What will be the values of x,y and z?
let arrayValue = [13];
let [x = 5, y = 7, z = 10] = arrayValue;

// x = 13, y = 7, z = 10
// First x = 5, y = 7, z = 10 will be assigned as initial values,
// then x, y, z will be mapped according to their with indices of arrayValue.
// x will be assigned 13, since arrayValue only have one value y and z will have their default values as 7 and 10
