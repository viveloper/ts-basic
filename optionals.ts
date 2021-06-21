interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  return user.info?.email ?? '';
}

console.log(getEmail({ id: 'abc', info: { email: 'aaa' } }));
console.log(getEmail({ id: 'abc', info: { email: undefined } }));

function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y]);
  callback?.();
}

addWithCallback(10, 15, () => console.log('cb!!'));
addWithCallback(10, 15);
