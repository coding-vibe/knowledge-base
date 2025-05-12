class Counter {
  count: number;

  static count = 2;

  constructor(initialValue: number = 1) {
    this.count = initialValue;
    Counter.count++;

    Counter.logCount();

    this.printCount();
  }

  printCount() {
    console.log(`Instance count: ${this.count}`); // 1
  }

  static getCount() {
    return this.count;
  }

  static logCount() {
    console.log(`Count: ${this.count}`); // 2
  }
}

const counter = new Counter(1);
