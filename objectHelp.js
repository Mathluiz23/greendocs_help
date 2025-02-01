// / Métodos de Manipulação de Objetos em JavaScript

let obj = { name: "João", age: 25, city: "São Paulo" };

// 1. Acessar Propriedades
console.log(obj.name); // João
console.log(obj["age"]); // 25

// 2. Adicionar e Remover Propriedades
obj.country = "Brasil"; // Adiciona nova propriedade
delete obj.city; // Remove propriedade

// 3. Verificar Propriedades
console.log("name" in obj); // true
console.log(obj.hasOwnProperty("age")); // true

// 4. Iteração em Objetos
for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

// 5. Obter Chaves, Valores e Entradas
console.log(Object.keys(obj)); // ["name", "age", "country"]
console.log(Object.values(obj)); // ["João", 25, "Brasil"]
console.log(Object.entries(obj)); // [["name", "João"], ["age", 25], ["country", "Brasil"]]

// 6. Copiar e Mesclar Objetos
let obj2 = { profession: "Desenvolvedor" };
let mergedObj = Object.assign({}, obj, obj2); // Mescla objetos
let spreadObj = { ...obj, ...obj2 }; // Outra forma de mesclar

// 7. Congelar e Selar Objetos
Object.freeze(obj); // Impede qualquer alteração
Object.seal(obj2); // Permite modificar valores, mas não adicionar/remover propriedades

// 8. Criar Chaves Dinamicamente
let dynamicKey = "email";
obj[dynamicKey] = "joao@email.com";
console.log(obj); // { name: "João", age: 25, country: "Brasil", email: "joao@email.com" }
