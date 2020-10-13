//immutability of objects
const person1 = { name: "Arsalon" };
const updated = Object.assign({}, person1, { name: "Carl" }); //copies all props of obj to empty obj, can pass 3rd arg of updated obj props

//spread operator
const personCopy = { ...person1, name: "Carl M" }; //copies object, can override props like name

const person2 = {
  name: "John",
  address: {
    country: "USA",
    city: "San Francisco",
  },
};

const person2Copy = { ...person2, name: "Bob" };
person2.address.city = "New York";

//deep copy
const person2Copy2 = {
  ...person2,
  address: {
    ...person2.address,
    city: "New York",
  },
  name: "Bob",
};

//arrays
const numbers = [1, 2, 3];

//adding
const index = numbers.indexOf(2);
const added = [
  ...numbers.slice(0, index), //returns a new array, must spread "flatten" (copies all items before target)
  4,
  ...numbers.slice(index),
];

//removing
const removed = numbers.filter((n) => n !== 2);

//updating
const updated = numbers.map((n) => (n === 2 ? 20 : n)); //returns a new array, subst. 20 for any value = 2
