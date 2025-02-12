var TabelaChecklist = item.Fields.TABELACHECKLIST; // realizar busca avançada para trazer tabela do checklist e alterar nome interno 
var TabelaMOC = item.Fields.TABELAMOC; // alterar nome interno para buscar a tabela correta

var itensExistentes = [];

// Percorre todas as linhas da TabelaMOC para preencher a lista de itens já cadastrados.
for (var i = 0; i < TabelaMOC.Rows.length; i++) {
    itensExistentes.push(TabelaMOC.Rows[i].Columns["ITEM_DO_CHECKLIST"]);
}

// Percorre todas as linhas da TabelaChecklist para verificar quais itens precisam ser copiados.
for (var j = 0; j < TabelaChecklist.Rows.length; j++) {
    var novoItem = TabelaChecklist.Rows[j].Columns["ITEM_DO_CHECKLIST"];

    // vai ver se o item já existe na TabelaMOC antes de adicionae
    // se não tiver, vai ser inserido
    if (itensExistentes.indexOf(novoItem) === -1) {
        // coloca nova linha na tabela (TABELAMOC).
        item = addTableRow(item, "TABELAMOC");

        // pega referência da última linha adicionada na TabelaMOC.
        var novaLinha = item.Fields.TABELAMOC.Rows[TabelaMOC.Rows.length - 1];

        // Define o valor da coluna "ITEM_DO_CHECKLIST" com o item copiado da TabelaChecklist.
        novaLinha.Columns["ITEM_DO_CHECKLIST"] = novoItem;

        // vai adiciona o item recém-inserido ao array pra nao ter duplicação
        itensExistentes.push(novoItem);
    }
}

