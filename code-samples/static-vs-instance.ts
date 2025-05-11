class Counter {
  count: number;

  static count = 0;

  constructor() {
    this.count = 0;
    Counter.count++;
  }

  static getCount() {
    return this.count;
  }

  static logCount() {
    console.log(`Count: ${this.count}`);
  }
}
