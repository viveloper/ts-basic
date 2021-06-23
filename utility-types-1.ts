interface MyUser {
  id: number;
  name: string;
  email?: string;
}

type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    { id: 1, name: 'Kim', email: 'kim@email.com' },
    { email: 'kim2@email.com' }
  )
);

type RequiredMyUser = Required<MyUser>;

type JustNameAndEmail = Pick<MyUser, 'name' | 'email'>;

type UserWithoutId = Omit<MyUser, 'id'>;

const mapById = (users: MyUser[]): Record<MyUser['id'], UserWithoutId> => {
  return users.reduce((acc, user) => {
    const { id, ...other } = user;
    return {
      ...acc,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    {
      id: 1,
      name: 'Kim',
      email: 'kim@email.com',
    },
    {
      id: 2,
      name: 'Hong',
      email: 'hong@email.com',
    },
  ])
);
