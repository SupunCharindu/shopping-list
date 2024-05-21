//Value stored on the stack
const name = 'John';
const age = 30;

//Reference valyes are stored on the heap
const person = {
  name:'Brad',
  age: 40
}

let newName = name;
newName = 'Sudda';

let newPerson = person;
newPerson.name = 'yaka';

console.log(name, newName);
console.log(person, newPerson);