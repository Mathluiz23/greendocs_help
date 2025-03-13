const pessoas = [
  { id: 1, nome: 'Lucas', idade: 23 },
  { id: 2, nome: 'Lucas', idade: 23 },
  { id: 3, nome: 'Lucas', idade: 23 },
  { id: 4, nome: 'Lucas', idade: 23 },
  { id: 5, nome: 'Lucas', idade: 23 },

];

for (const { id, nome, idade } of pessoas) {
  console.log(id, nome, idade);
}