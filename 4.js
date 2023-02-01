// WAP to sort a string, considering the uppercase letters greater than the
// lowercase. Also remove all the spaces from the output.
// Danny is dancing → aacdDgiinnnnsy

const string = "Danny is dancing";

// Splitting characters by zero or more spaces
const characters = string.split(/[ ]*/);
characters.sort((a, b) => {
  return a.localeCompare(b);
});

const newString = characters.join("");
console.log(newString);
