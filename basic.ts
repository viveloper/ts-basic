interface Person {
  name: string;
  age: number;
}

const person1: Person = {
  name: 'casio',
  age: 30,
};

const ids: Record<number, string> = {
  1: 'a',
  2: 'b',
};
ids[30] = 'c';

console.log(ids);
