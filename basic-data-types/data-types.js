//We will treat both data tyoes and variables in this meeting

//These are the basic data types in JavaScript
//String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object, Arrays

//You might not use things like Bigint and Symbol

//The typeof method is used to check what kind of data type the variable or value is

//Examples - Number
const number_1 = 3; //This is how we declare constants in JavaScript. Constants are immutable values
console.log(number_1);

let num_2 = 4; // This is how we declare variables in the ES6 way

//The old way of declaring variables
//It is adviced not to use this one. I'll explain why during the discussion
var num_3 = 3;
console.log(num_2);

console.log(typeof num_2);

//Examples - String
const myName = "Pascal";
let herName = "Irene";
herName = "Adjoa";
console.log(herName);

console.log(typeof herName);

// When you print out the value of herName in the console, you will see Adjoa instead of Irene, but the same isn't true for myName because it's a constant

//Examples - Boolean
const isTrue = true;
const isFalse = false;

console.log(typeof isTrue);

//Examples - Array
const fruits = ["🍏", "🍎", "🍊", "🫐", "🍓"];
//Check if it's an array
console.log(Array.isArray(fruits));

//Example - Object
const items = {
  name: "Phone",
  price: 250,
  storage: 256,
};
console.log(typeof items);

//null and undefined have their various use cases
//We shall over them later

