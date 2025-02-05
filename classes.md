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
book = new Book('Jane Austen', 'Pride and Prejudice', 3);

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
}

class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age); // Initialize parent class

    this.color = color;
  }
}

const cat = new Cat('Baggie', 2, 'black');

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

  constructor(password) {
    this.password = password;
  }
}
```
