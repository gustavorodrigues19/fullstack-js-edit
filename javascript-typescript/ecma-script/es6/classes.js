class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}

// explicar o this
// explicar metodo privado #
// explicar metodo estatico
// explicar metodo publico

let john = new Person("John");
john.greet(); // Hello, John!
