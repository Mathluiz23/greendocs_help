const groupBy = (arr, key) => 
    arr.reduce((acc, obj) => {
      (acc[obj[key]] = acc[obj[key]] || []).push(obj);
      return acc;
    }, {});
  
  const pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 25 },
  ];
  
  console.log(groupBy(pessoas, "idade"));
  // { 25: [{nome: "Ana", idade: 25}, {nome: "Maria", idade: 25}], 30: [{nome: "João", idade: 30}] }
  