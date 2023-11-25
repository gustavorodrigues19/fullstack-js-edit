// Criando um novo Set
let set = new Set();

// Adicionando valores
set.add("apple");
set.add("banana");
set.add("apple"); // Isso não será adicionado novamente, pois 'apple' já existe no Set

// Verificando se um valor existe
console.log(set.has("apple")); // true
console.log(set.has("grape")); // false

// Obtendo o número de valores
console.log(set.size); // 2

// Removendo um valor
set.delete("apple");
console.log(set.has("apple")); // false

// Removendo todos os valores
set.clear();
console.log(set.size); // 0

// Iterando sobre um Set
set.add("apple");
set.add("banana");
for (let value of set) {
  console.log(value);
}
// apple
// banana
