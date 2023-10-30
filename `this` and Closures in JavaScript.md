# `this` and Closures in JavaScript

## Closures

Useful links:

- [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [closures](https://uk.javascript.info/closure)

1. Repeat variables scope

- Variables used in closures have access to the scope in which they were created.

2. Lexical environment

- Lexical Environment is the environment of the function where it is written. That is, the static order/place where it is situated, regardless from where it is called from.

- The Lexical Environment object consists of two parts:
  - Environment Record - an object that stores all local variables as its properties (and some other information like the value of this)
  - A reference to the outer lexical environment, the one associated with the outer code.

3. Closures in JavaScript

- A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables — a scope chain.

4. [Static and Dynamic scoping](https://www.linkedin.com/pulse/static-dynamic-scoping-javascript-wafula-allan/)

- Static scoping determines the value of a variable by its location in the source code, that is, at the stage of writing the code
- Dynamic scoping determines the value of a variable based on the call stack at runtime.

## `this`

1. Definition of [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

- 'This' keyword refers to an object that is executing the current piece of code.

2. Purpose and differences between methods `.bind`, `.call`, `.apply`

- `.bind` create a new copy of the function and sets the this keyword

```js
function.bind(thisArg, optionalArguments)
```

- `.call` sets the this inside the function and immediately executes that function, also accepts a comma-separated list of arguments

```js
function.call(thisArg, arg1, agr2, ...)
```

- `.apply` is very similar to the call function, but it accepts an array of arguments instead of comma separated values

```js
function.apply(thisArg, [argumentsArr])
```

3. 4 rules of `this` from the book ['You don't know JavaScript'](https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes)

- Determining the this binding for a function call requires finding the immediate point at which that function is called. As it turned out, four rules can be applied to a call point, in this order of priority:

  - Called with new? Let's use the newly created object

  ```js
  function Person(name) {
    this.name = name;
  }
  const person = new Person("John");
  ```

  - Called with call or apply (or bind)? We use the specified object

  ```js
  function greet() {
    console.log(`Hello, ${this.name}!`);
  }
  const user = { name: "Alice" };
  greet.call(user);
  ```

  - Called with a context object owning the function call? Let's use this context object

  ```js
  const car = {
    brand: "Toyota",
    start: function () {
      console.log(`Starting the ${this.brand} car.`);
    },
  };
  car.start();
  ```

  - Default: undefined in strict mode, otherwise a global object.

  ```js
  function sayHello() {
    console.log(`Hello, ${this}`);
  }
  sayHello();
  ```

4. `this` in arrow functions

- Arrow functions don't provide their own this binding (it retains the this value of the enclosing lexical context).
