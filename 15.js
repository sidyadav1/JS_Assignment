// What is the output of the following code?
function f1(object) {
  const obj = { name: "Daniel", age: 27 };
  if (object.age === 20) {
    const obj = { name: "Jack" };
    object.name = "Sam";
    console.log(obj.age);
  } else {
    const obj = { name: "Emily" };
    object = null;
    console.log(obj.name);
  }
}
const ob1 = { name: "Mark", age: 20 };
const ob2 = { name: "Karl", age: 21 };
f1(ob1);
console.log(ob1);
f1(ob2);
console.log(ob2);

// undefined
// { name: 'Sam', age: 20 }
// Emily
// { name: 'Karl', age: 21 }

// undefined => const variables are block scoped and obj inside if block is initialized to object { name: "Jack" },
// console.log(obj.age) print undefined because obj does not contain key 'age'

// { name: 'Sam', age: 20 } => Since objects are passed by reference, object in function f1 will also point to ob1  and any changes to keys and values of object in function f1 will
// change ob1, i.e. value of name key is changed to Sam on line 6

// Emily => since value of age in ob2 is not equal to 20 else block will be executed
// const variables are block scoped and obj inside if block is initialized to object { name: "Emily" },
// console.log(obj.name) prints "Emily"

// console.log(ob2); => object = null; on line 10 will not set ob2 to null, only the reference of object in f1 will change to null
