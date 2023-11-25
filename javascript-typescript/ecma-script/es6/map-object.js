// Criando um novo Map
let map = new Map();

// Definindo valores
map.set("name", "John");
map.set("age", 30);

// Obtendo valores
console.log(map.get("name")); // John
console.log(map.get("age")); // 30

// Verificando se uma chave existe
console.log(map.has("name")); // true
console.log(map.has("address")); // false

// Obtendo o número de elementos
console.log(map.size); // 2

// Removendo um elemento
map.delete("name");
console.log(map.has("name")); // false

// Removendo todos os elementos
map.clear();
console.log(map.size); // 0

// Iterando sobre um Map
map.set("name", "John");
map.set("age", 30);
for (let [key, value] of map) {
  console.log(`${key} = ${value}`);
}
// name = John
// age = 30
