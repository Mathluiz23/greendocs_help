// Pesquisa avançada de itens usando critérios definidos.

// Estrutura esperada dos critérios de busca:
// [
//   {
//     'Nome_interno': 'Nome', // Nome interno do campo ou metadado a ser pesquisado
//     'Op': 1,               // Operação a ser realizada (ver explicação abaixo)
//     'Valor': '001',        // Valor a ser pesquisado
//     'Tipo': 0              // Tipo: 0 para campos built-in, 1 para metadados
//   },
//   ...
// ]

// **Parâmetros para 'Op' (Operação):**
// 0 - igual a
// 1 - contém
// 2 - diferente de / não contém

// **Parâmetros para 'Tipo':**
// 0 - Built-in (campos padrão como NOME, TIPO_ITEM, DATA_CRIACAO, etc.)
// 1 - Metadados personalizados (como "Fornecedor" ou "Unidade")

// Exemplo de uso da função `searchItems`:
// A função recebe o item atual e um array de critérios de busca no formato JSON.

// Neste exemplo, a busca será feita com os seguintes critérios:
// 1. O nome do item deve conter "001".
// 2. O fornecedor deve ser igual a "ABB LTDA".
// 3. A unidade deve ser igual a "PUMA - Puma".
var itemsSearched = searchItems(item, "[{'Nome_interno': 'Nome', 'Op': 1, 'Valor': '001', 'Tipo': 0}, {'Nome_interno': 'Fornecedor', 'Op': 0, 'Valor': 'ABB LTDA', 'Tipo': 1}, {'Nome_interno': 'Unidade', 'Op': 0, 'Valor': 'PUMA - Puma', 'Tipo': 1}]");

// Loop para iterar pelos itens encontrados na pesquisa
for (var i = 0; i < itemsSearched.length; i++) {
    // Loga o nome de cada item encontrado na busca
    log(itemsSearched[i].Name);
}
