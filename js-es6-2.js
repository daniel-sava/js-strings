let randomNumber = 44;

// cum faceam inainte
console.log('Numarul random este: ' + randomNumber + '.');

// string literals
console.log(`Numarul random este: ${randomNumber}.`);

let a = 42;
let b = 38;

// cum faceam inainte
console.log('Suma lui a + b este: ' + (a + b) + '.');

console.log(`Suma lui a + b este: ${a + b}.`);

// Object Destructuring
const person = {
    firstName: 'Andrei',
    lastName: 'Popescu',
    age: 29,
    nationality: 'Romanian',
};

// let firstName = person.firstName;
// let lastName = person.lastName;
// let nationality = person.nationality;

let { firstName, lastName, nationality } = person;

console.log(firstName);
console.log(lastName);
console.log(nationality);

// Array Spread Operator

const numbersFromOneToFive = [1, 2, 3, 4, 5];
const numbersFromSixToTen = [6, 7, 8, 9, 10];

const numbersFromOneToTen = [...numbersFromOneToFive, ...numbersFromSixToTen];
const numbersFromZeroToTen = [
    0,
    ...numbersFromOneToFive,
    ...numbersFromSixToTen,
];

console.log(numbersFromOneToTen);
console.log(numbersFromZeroToTen);

// Object Sprea Operator
console.log(person);

const person2 = {
    ...person,
    age: 44,
    birthday: new Date(),
};

console.log(person2);
