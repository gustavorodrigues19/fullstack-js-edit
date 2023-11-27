"use strict";
class Person {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  #getDoubleAge() {
    console.log(this.age * 2);
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
    this.#getDoubleAge();
  }
}

class MapperPerson {
  static map(person) {
    return {
      name: person.name,
      lastName: person.lastName,
      age: person.age,
    };
  }
}

const john = new Person("John", "Lenon", 55);
john.greet(); // Hello, John!
console.log(john.name);

// Static methods
const mappedPeson = MapperPerson.map(john);
console.log(mappedPeson);

// Construtor não é obrigatório
class Car {
  getCarName() {
    return "Ferrari";
  }
}

const ferrari = new Car();
console.log(ferrari.getCarName());

// Herança
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} falando...`);
  }
}

class Horse extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  run() {
    console.log(`${this.name} correndo...`);
  }
}

const horse = new Horse("Spirit", "Black");
horse.speak();
horse.run();
horse.name = "Spirit Jr.";
console.log(horse.name);

// https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/
