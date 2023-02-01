// What is Regex? Write a function that uses a regex in javascript to check if the
// input string is alphanumeric or not.

// Regex is a sequence of characters that specifies a pattern. Regex is used for string searching to find
// wheather a specific patter is present in string or to validate string if entire string matches a patters.

const isAlphaNumeric = (string) => {
  const regex = /^[0-9a-zA-Z]*$/;
  return regex.test(string);
};

console.log(isAlphaNumeric("KBIKG09]{"));
