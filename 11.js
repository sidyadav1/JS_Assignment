// Create a calculator that supports +, -, * and /. The calculator should take a string
// expression as an input. The string can
// Example:
// “2*2” → 4
// “8-8” → 0
// “9+9” → 18
// “a*a” → invalid
// “2” → invalid
// “9/2” → 2.5

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const string = "3/2";
const [a, b] = string.split(/[\+|-|\*|/]/);
const sign = string.match(/[\+|-|\*|/]/)[0];
const signs = ["+", "-", "*", "/"];

const num1 = parseFloat(a);
const num2 = parseFloat(b);

if (isNaN(a) || isNaN(b) || !signs.includes(sign)) {
  console.log("invalid");
} else {
  const result = operations[sign](num1, num2);
  console.log(result);
}
