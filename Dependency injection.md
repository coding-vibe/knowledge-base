# Dependency injection

Implementation of principle described in D letter of SOLID - low-level dependencies shouldn't be depend on high-level ones, both should depend on abstractions.

DI uses **IoC** (inversion of control container) - a box with global dependencies where each component corresponds to mark (interface (better) or class (worse; class is used as type)). 

DI consumers request from IoC container, dependency that implements interface without knowing details of its implementation

Advantages:
- Decoupling of dependencies. It's easy and safe to replace one implementation by another if contract of mark is followed
- Easy to test. Injected components can be replaced by mocks in testing mode.


## Under the hood implementation (Pseudo-code)

```ts
// A contract that describes functionality and contains types for public properties and methods.
// If class implements interface it correctly implementes functionality declared by interface.
interface Interface {
}

// Injectable tells that any component can inject an instance of Class by IoC
@Injectable()
class Class implements Interface {
}

// Pseudocode: IoC container has mappings between Interface and Class where Interface is a mark, Class is specific 
// implementation that corresponds this mark.
const IoCContainer = {
    Inteface: Class
}

// Usage
class Consumer {
    // Important: IoC creates an instance of class that implements Interface and saves it in property
    constructor(property: Interface) {}
}

// I.e. under the hood IoC does the following:
class Consumer {
    // Important: IoC creates an instance of class that implements Interface and saves it in property
    constructor(property: Interface) {
        this.property = new Class();
    }
}

// At any moment Class can be replaced by OtherClass and it still will work in Consumer because both (Class and 
// OtherClass) implements the same Interface.
@Injectable()
class OtherClass implements Interface {
}
```