// Remove all the duplicate names objects from an array of objects. The object can
// contain name and age.
const arr = [
  { name: "Karl", age: 20 },
  { name: "Karl", age: 23 },
  { name: "Marry", age: 20 },
  { name: "Aston", age: 20 },
];

const count = arr.reduce((acc, person) => {
  acc[person.name] = (acc[person.name] || 0) + 1;
  return acc;
}, {});

const newList = arr.filter((person) => {
  if (count[person.name] == 1) {
    return true;
  }
  return false;
});

console.log(newList);
