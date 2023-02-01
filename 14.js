// Write a function that takes in an array of objects ({ name: “”, age: 2}) and
// returns the names of all the persons whose age is even.

const evenAge = (persons) => {
  const newArr = persons.reduce((acc, person) => {
    if (person.age % 2 == 0) {
      acc.push(person.name);
    }
    return acc;
  }, []);
  return newArr;
};

const persons = [
  { name: "Uday", age: 20 },
  { name: "Shiv", age: 35 },
  { name: "Vaibhav", age: 27 },
  { name: "Vivek", age: 28 },
  { name: "Abhinav", age: 32 },
  { name: "Hritik", age: 34 },
  { name: "Laksh", age: 31 },
  { name: "Aayush", age: 37 },
];

const newList = evenAge(persons);
console.log(newList);
