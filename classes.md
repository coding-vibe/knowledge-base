# Classes

## Initialization

```js
class Book {
  constructor(author, title, id) {
    this.author = author;
    this.title = title;
    this._id = id; // Consider as private but still accessible
  }
}

const firstBook = new Book('Margaret Mitchell', 'Gone with the Wind', 1);
const secondBook = new Book('Albert Camus', "L'Étranger", 2);

// Can access properties and methods
console.log(firstBook.title); // Gone with the Wind
console.log(secondBook.author); // Albert Camus
```

## Static methods and properties

```js
class LibraryBook {
  constructor(author, title, id) {
    this.author = author;
    this.title = title;
    this._id = id; // Consider as private but still accessible
  }

  print() {
    console.log(LibraryBook.location) // Ok can use static properties and methods in instance methods but not vice versa
  }

  // Variant 1
  static location = 'library';
  static printLocation() {
    console.log(this.location); // Will print `library`, `this` points to class
    console.log(this.author); // `undefined`, instance properties and methods aren't accessible in static oness
  }
}

// Variant 2
LibraryBook.location = 'library';
LibraryBook.printLocation = function () {
  console.log(this.location); // Will print `library`, `this` points to class
  console.log(this.author); // `undefined`, instance properties and methods aren't accessible in static oness
};

// Can be accessed outside:
book = new LibraryBook('Jane Austen', 'Pride and Prejudice', 3);

console.log(LibraryBook.printLocation());
console.log(book.printLocation()); // Will raise TypeError
```

## Inheritance

```js
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static method() {
    console.log('Fooo!')
  }
}

class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age); // Initialize parent class

    this.color = color;
  }
}

const cat = new Cat('Baggie', 2, 'black');

Cat.foo() // Inherited in custom objects but not inherited in built-in like Array.prototype, Object.prototype etc
console.log(cat.name); // Baggie

// Inheritance checks
console.log(cat instanceof Cat); // true
console.log(cat instanceof Animal); // true because instanceof inspects all inheritance chain
console.log(cat.constructor === Cat); // true
console.log(cat.constructor === Animal); // false but constructor property can be changed
```

## Interfaces

```ts
type SwitcherPosition = 'on' | 'off';

interface ICoffeeMachine {
  capacity: number;
  brewCoffee: () => void;
}

interface ElectricDevice {
  switcher: 'on' | 'off';
}

const DEFAULT_COFFEE_MACHINE_CAPACITY = 4200;

// Class can implement multiple interfaces simultaneously
class CoffeeMachine implements ICoffeeMachine, ElectricDevice {
  switcher: SwitcherPosition = 'off';
  capacity: number;

  constructor(capacity = DEFAULT_COFFEE_MACHINE_CAPACITY) {
    this.capacity = capacity;
  }

  brewCoffee() {
    console.log('Brewing your coffee');
    setInterval(() => {
      console.log('Coffee is ready');
    }, 10000);
  }
}
```

## Access properties

```js
class Book {
  #pages;

  constructor(pages) {
    this.#pages = pages;
  }

  getPages() {
    return this.#pages;
  }
}

bigBook = new Book(1000);
console.log(book.#pages); // Will raise error
console.log(book.getPages()); // Ok, will print 1000
```

```ts
class User {
  private password;
  protected email;

  private readonly id: string;

  constructor(password, username, email) {
    this.password = password;
    this.username = username;
    this.email = email;
  }
}

const user = new User('12345567', 'John', 'john@doe.com');

console.log(user.password); // Will raise error
console.log(user.username); // Ok

class Employee extends User {
  logEmail() {
    console.log(this.email); // Ok
  }

  updatePassword(newPassword) {
    this.password = newPassword // Will raise error because `password` exists only in User type
  }
}

const employee = new Employee('Qwerty123!', 'Joe');
console.log(employee.email); // Will raise error
```
