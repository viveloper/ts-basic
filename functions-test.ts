import addNumbers, { addStrings, fetchData, getName } from './functions';

console.log(addNumbers(1, 2));
console.log(addStrings('abc', 'def'));
console.log(fetchData('https://hello'));
console.log(getName({ first: 'kobe', last: 'Bryant' }));
console.log(getName());
