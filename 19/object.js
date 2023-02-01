const obj = { name: "Rahul", age: 23, gender: "M" };

const keys = Object.keys(obj);
console.log("obj keys", keys);
// obj keys [ 'name', 'age', 'gender' ]

const values = Object.values(obj);
console.log("obj values", values);
// obj values [ 'Rahul', 23, 'M' ]

const source = { address: "Noida", id: "76576", bloodGroup: "O+" };
Object.assign(obj, source);
console.log(obj);
// {
//     name: 'Rahul',
//     age: 23,
//     gender: 'M',
//     address: 'Noida',
//     id: '76576',
//     bloodGroup: 'O+'
//   }

const prop = obj.hasOwnProperty("age");
console.log(prop);
const prop2 = obj.hasOwnProperty("dob");
console.log(prop2);
// true
// false
