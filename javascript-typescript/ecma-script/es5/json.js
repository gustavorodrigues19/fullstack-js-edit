const jsonStringfied = '{"name":"John", "age":30, "city":"New York"}';
const objParsed = JSON.parse(jsonStringfied);
console.log(objParsed.name); // John

const obj = { name: "John", age: 30, city: "New York" };
const json = JSON.stringify(obj);
console.log(json); // '{"name":"John","age":30,"city":"New York"}'
