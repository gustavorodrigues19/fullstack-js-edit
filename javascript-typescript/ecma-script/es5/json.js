var json = '{"name":"John", "age":30, "city":"New York"}';
var obj = JSON.parse(json);
console.log(obj.name); // John

var obj = { name: "John", age: 30, city: "New York" };
var json = JSON.stringify(obj);
console.log(json); // '{"name":"John","age":30,"city":"New York"}'
