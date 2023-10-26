# `this` and Closures in JavaScript

## Closures

Useful links:

- [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [closures](https://uk.javascript.info/closure)

1. Repeat variables scope

- Variables used in closures have access to the scope in which they were created. This means they can access variables within the same function where the closures were created, as well as global variables

2. Lexical environment

- Lexical Environment is the environment of the function where it is written. That is, the static order/place where it is situated, regardless from where it is called from

- The Lexical Environment object consists of two parts:
  - Environment Record - an object that stores all local variables as its properties (and some other information like the value of this)
  - A reference to the outer lexical environment, the one associated with the outer code

3. Closures in JavaScript

- A closure is a function that remembers its outer variables and can access them

4. [Static and Dynamic scoping](https://www.linkedin.com/pulse/static-dynamic-scoping-javascript-wafula-allan/)

- Static scoping determines the value of a variable by its location in the source code, that is, at the stage of writing the code
- Dynamic scoping determines the value of a variable based on the call stack at runtime

## `this`

1. Definition of [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

- 'This' keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function. If the function being referenced is a regular function, 'this' references the global object

2. Purpose and differences between methods `.bind`, `.call`, `.apply`

- .bind():

  - Purpose: Creates a new function that is bound to a specific context (object) and returns that function
  - Usage: To create a new function that will always execute in the specified context

- .call():

  - Purpose: Invokes a function with the specified context and passes arguments explicitly
  - Usage: To call a function with a specific object at the moment of the call and pass the function's parameters

- .apply():

  - Purpose: Invokes a function with the specified context and passes parameters as an array
  - Usage: To pass function arguments as an array and specify the calling context

- The main difference between these methods lies in how they pass parameters and change the function's context. .bind() returns a new function with a bound context, .call() invokes the function with the specified context and passes parameters separately, and .apply() invokes the function with the specified context and passes parameters as an array

3. 4 rules of `this` from the book ['You don't know JavaScript'](https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes)

- Determining the this binding for a function call requires finding the immediate point at which that function is called. As it turned out, four rules can be applied to a call point, in this order of priority:

  - Called with new? Let's use the newly created object

    ```function Person(name) {
    this.name = name;
    }
    const person = new Person('John');
    ```

  - Called with call or apply (or bind)? We use the specified object
  - Called with a context object owning the function call? Let's use this context object
  - Default: undefined in strict mode, otherwise a global object

4. `this` in arrow functions

- Arrow functions don't provide their own this binding (it retains the this value of the enclosing lexical context)
