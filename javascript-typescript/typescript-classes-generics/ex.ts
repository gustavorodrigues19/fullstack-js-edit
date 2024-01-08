// 1
class Car {
  constructor(public make: string, public model: string, public year: number) {}

  startEngine() {
    return "Engine started";
  }
}

// 2
function identity<T>(arg: T): T {
  return arg;
}

// 3
class Rectangle {
  constructor(public width: number, public height: number) {}

  calculateArea() {
    return this.width * this.height;
  }
}

// 4
class Queue<T> {
  private data: T[] = [];

  push(item: T) {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.shift();
  }
}

// 5
class Person {
  constructor(public firstName: string, public lastName: string) {}

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
