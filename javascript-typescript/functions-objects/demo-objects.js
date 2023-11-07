const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// Access properties from object person
// If a property is undefined, what should I do?
// How to invoke a function inside object?
// How to interact over properties?
// How to interact over values?
