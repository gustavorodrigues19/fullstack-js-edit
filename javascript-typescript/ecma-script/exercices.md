1. Arrow Functions e Template Strings (ES6): Reescreva a seguinte função para usar uma arrow function e uma template string.

   ```
   function greet(name) {
    return 'Hello, ' + name + '!';
   }
   ```

2. Async/Await (ES8): Reescreva a seguinte função que usa Promises para usar async/await em vez disso.

   ```
   function fetchData() {
    fetch('https://random-data-api.com/api/v2/users')
        .then(response => response.json())
        .then(data => console.log(data));
   }
   ```

3. Optional Chaining (ES11): Use o encadeamento opcional para acessar a propriedade street do seguinte objeto, sem causar um erro se address ou street não existirem.

   ```
   let user = {
    name: 'John',
    address: {
        street: '123 Main St'
    }
   };
   ```
