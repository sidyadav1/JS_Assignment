console.log("0 || 1 = " + (0 || 1));
// 0 || 1 = 1 => || will rseult in the first true value it finds,
//  0 evaluates to false so answer is 1

console.log("1 || 2 = " + (1 || 2));
// 1 || 2 = 1 => || will result in the first true value it finds,
// 1 evaluates to true

console.log("0 && 1 = " + (0 && 1));
// 0 && 1 = 0 => since 0 evaluates to false, expression will also evaluate to 0

console.log("1 && 2 = " + (1 && 2));
// 1 && 2 = 1 => if both values evaluate to true then, answer will be RHS of expression
