var obj = {
  _value: 1,
  get value() {
    return this._value;
  },
  set value(value) {
    this._value = value;
  },
};

console.log(obj.value); // 1
obj.value = 2;
console.log(obj.value); // 2
