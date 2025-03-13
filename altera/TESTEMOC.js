var stringDeBusca = "[{'Nome_interno': 'TIPO_ITEM','Op': 0, 'Valor':'MOC','Tipo': 0}]";
var MOC_itemsSearched = searchItems(item, stringDeBusca);

if (!MOC_itemsSearched || MOC_itemsSearched.length === 0) {
    log("Nenhum item MOC encontrado.");
    return;
}

// Itera sobre todas as MOCs encontradas
for (var mocIndex = 0; mocIndex < MOC_itemsSearched.length; mocIndex++) {
    var MOC_item = MOC_itemsSearched[mocIndex];
    log("MOC " + mocIndex + " encontrado: " + MOC_item.Name);

    let tabela = item.Fields.Checklist;
    if (!tabela || !tabela.Rows || tabela.Rows.length === 0) {
        log("A tabela do checklist está vazia ou não existe.");
        continue;
    }
    log("Total de linhas na tabela do checklist: " + tabela.Rows.length);

    let tabela_processos = MOC_item.Fields.Checklist_Processos;
    if (!tabela_processos) {
        log("Tabela Checklist_Processos não encontrada na MOC.");
        continue;
    }

    // Itera sobre as linhas do checklist e adiciona cada uma na MOC
    for (var index = 0; index < tabela.Rows.length; index++) {
        let nomeChecklist = tabela.Rows[index].Columns["Item_do_Checklist"];

        if (!nomeChecklist) {
            log("Linha " + index + " inválida: Item_do_Checklist ausente.");
            continue;
        }

        log("Processando checklist: " + nomeChecklist);

        // Cria uma nova linha na tabela de processos para cada item do checklist
        let novaLinha = addTableRow(MOC_item, "Checklist_Processos");

        if (novaLinha) {
            // Agora pegamos a nova linha diretamente em vez de confiar no índice
            let ultimaLinha = tabela_processos.Rows[tabela_processos.Rows.length - 1];

            if (ultimaLinha) {
                ultimaLinha.Columns["Item_do_Checklist"] = nomeChecklist;
                log("Item '" + nomeChecklist + "' adicionado corretamente.");
            } else {
                log("Erro ao acessar a nova linha criada.");
            }
        } else {
            log("Falha ao adicionar nova linha em Checklist_Processos.");
        }
    }

    // Salvar a MOC após alterações
    saveItem(MOC_item);
    log("Atualização da MOC " + mocIndex + " concluída.");
}