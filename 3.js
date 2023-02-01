// What is the value of x and y?
const arrayValue = [1, 2, 3, 4];
const [x, ...y] = arrayValue;

// x = 1, y = [3, 3, 4]
// first x will be mapped to value at index 0 then due the 'rest operator', remaining elements of the array will be
// assigned to y as a list
