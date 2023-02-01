const array = [2, 45, 56, 32, 55, 21, 17, 16, 11, 9, 7, 20, 22];

array.push(91);
console.log("Element added at the end of array, New array => ", array);
// Element added at the end of array, New array =>  [
//     2, 45, 56, 32, 55, 21,
//    17, 16, 11,  9,  7, 20,
//    22, 91
//  ]

const ele = array.pop();
console.log("element removed from end => ", ele, ", new array => ", array);
// element removed from end =>  91 , new array =>  [
//     2, 45, 56, 32, 55, 21,
//    17, 16, 11,  9,  7, 20,
//    22
//  ]

const ele2 = array.shift();
console.log("element removed from start => ", ele2, ", new array => ", array);
// element removed from start =>  2 , new array =>  [
//     45, 56, 32, 55, 21,
//     17, 16, 11,  9,  7,
//     20, 22
//   ]

array.unshift(45);
console.log("Element added at the start of array, New array => ", array);
// Element added at the start of array, New array =>  [
//     45, 45, 56, 32, 55, 21,
//     17, 16, 11,  9,  7, 20,
//     22
//   ]

const map = array.map((element) => {
  return `n-${element}`;
});
console.log("mapped array => ", map);
// mapped array =>  [
//     'n-45', 'n-45', 'n-56',
//     'n-32', 'n-55', 'n-21',
//     'n-17', 'n-16', 'n-11',
//     'n-9',  'n-7',  'n-20',
//     'n-22'
//   ]

const evenArray = array.filter((element) => {
  return element % 2 === 0;
});
console.log("Filtered even array => ", evenArray);
// Filtered even array =>  [ 56, 32, 16, 20, 22 ]

const reduced = array.reduce((acc, element) => {
  return acc + element;
}, 0);
console.log("total sum => ", reduced);
// total sum =>  356

array.splice(3, 2, 12, 67, 65, 89);
console.log(
  "two elements removed starting from index 3 and rest of numbers are added to the array => ",
  array
);
// two elements removed starting from index 3 and rest of numbers are added to the array =>  [
//   45, 45, 56, 12, 67, 65,
//   89, 21, 17, 16, 11,  9,
//    7, 20, 22
// ]

const newArr = array.slice(3, 9);
console.log("array sliced between two indices => ", newArr);

array.sort();
console.log("sorted array elements as strings => ", array);
// sorted array elements as strings =>  [
//   11, 12, 16, 17, 20, 21,
//   22, 45, 45, 56, 65, 67,
//    7, 89,  9
// ]

const join = array.join("-");
console.log("join => ", join);
// join =>  11-12-16-17-20-21-22-45-45-56-65-67-7-89-9
