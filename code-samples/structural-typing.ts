interface Person {
  firstName: string;
  lastName: string;
}

interface User {
  firstName: string;
  lastName: string;
}

function logUser(user: User) {
  console.log(user);
}

const person: Person = {
  firstName: 'John',
  lastName: 'Doe',
};

logUser(person); // This works because TypeScript uses structural typing
