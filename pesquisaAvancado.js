// Pesquisa avançada
// Nome_interno: Nome interno do metadado ou alguma opção built-in (NOME, TIPO_ITEM [Nome], ATIVIDADE [Nome interno], DATA_CRIACAO ou CONTEUDO)

// Op: Operação a ser feita:

// 0 - igual a
// 1 - contém
// 2 - diferente de / não contém
// Valor: Valor do parâmetro da pesquisa

// Tipo: 0 para built-in e 1 para metadados

// Exemplo sintático de utilização:

var itemsSearched = searchItems(item,"[{'Nome_interno': 'Nome','Op': 1, 'Valor':'001','Tipo': 0},{'Nome_interno': 'Fornecedor','Op': 0, 'Valor':'ABB LTDA','Tipo': 1},{'Nome_interno': 'Unidade','Op': 0, 'Valor':'PUMA - Puma','Tipo': 1}]");
    
for (var i=0; i< itemsSearched.length;i++){
    log(itemsSearched[i].Name);        
}