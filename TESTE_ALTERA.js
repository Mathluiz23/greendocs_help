// TESTE ALTERA PARA PREENCHER TABELAS DO CHECKLIST NAS TABELAS DO CHECKLIST MOC

var stringDeBusca = "[{'Nome_interno': 'TIPO_ITEM','Op': 0, 'Valor':'MOC','Tipo': 0}]";
var MOC_itemSearched = searchItems(item, stringDeBusca);

if (!MOC_itemSearched || MOC_itemSearched.length === 0) {
    log("Nenhum item MOC encontrado.");
    return;
}

log("MOC encontrado: " + MOC_itemSearched[0].Name);

let tabela = item.Fields.Checklist; // Tabela do checklist
if (!tabela || tabela.Rows.length === 0) {
    log("tabela do checklist vazia ou não existe.");
    return;
}
log("Total de linhas na tabela do checklist: " + tabela.Rows.length);

// tabela de processos no MOC
let tabela_processos = MOC_itemSearched[0].Fields.Checklist_Processos;
if (!tabela_processos || tabela_processos.Rows === undefined || tabela_processos.Rows.length === 0) {
    log("A tabela de processos na MOC está vazia ou não existe.");
    return;
}
log("Total de linhas na tabela de processos do MOC antes da verificação: " + tabela_processos.Rows.length);

// Itera sobre as linhas do checklist
for (var t = 0; t < tabela.Rows.length; t++) {
    let nomeChecklist = tabela.Rows[t].Columns["Item_do_Checklist"];

    if (!nomeChecklist) {
        log("Linha " + t + " inválida: Item_do_Checklist ausente.");
        continue;
    }

    log("Processando checklist: " + nomeChecklist);

    // Verifica se o item já foi adicionado à tabela de processos
    let itemExistente = false;

    // Verifica se o nomeChecklist já está na tabela de processos
    for (let i = 0; i < tabela_processos.Rows.length; i++) {
        if (tabela_processos.Rows[i].Columns["Item_do_Checklist"] === nomeChecklist) {
            itemExistente = true;
            break;
        }
    }

    if (itemExistente) {
        log("O item '" + nomeChecklist + "' já existe na tabela de processos. Vericando próxima linha ...");
        continue; // Pula a inserção se o item já existir
    }

    // Adiciona uma nova linha à tabela Checklist_Processos na MOC
    item = addTableRow(MOC_itemSearched[0], "Checklist_Processos");

    var tabela_processos_atualizada = MOC_itemSearched[0].Fields.Checklist_Processos;
    tabela_processos_atualizada.Rows[tabela_processos_atualizada.Rows.length - 1].Columns["Item_do_Checklist"] = nomeChecklist;
    log("Item '" + nomeChecklist + "' adicionado à tabela Checklist_Processos.");
}

saveItem(MOC_itemSearched[0]);
log("Atualização da MOC concluída.");





















// -----------------------------------------------------------------------------------------------


var stringDeBusca = "[{'Nome_interno': 'TIPO_ITEM','Op': 0, 'Valor':'MOC','Tipo': 0}]";
var MOC_itemSearched = searchItems(item, stringDeBusca);

if (!MOC_itemSearched || MOC_itemSearched.length === 0) {
    log("Nenhum item MOC encontrado.");
    return;
}

log("MOC encontrado: " + MOC_itemSearched[0].Name);

let tabela = item.Fields.Checklist; // Tabela do checklist
if (!tabela || tabela.Rows.length === 0) {
    log("A tabela do checklist está vazia ou não existe.");
    return;
}
log("Total de linhas na tabela do checklist: " + tabela.Rows.length);

// Obtém a tabela de processos no MOC
let tabela_processos = MOC_itemSearched[0].Fields.Checklist_Processos;
if (!tabela_processos || tabela_processos.Rows === undefined || tabela_processos.Rows.length === 0) {
    log("A tabela de processos na MOC está vazia ou não existe.");
    return;
}
log("Total de linhas na tabela de processos do MOC antes da inserção: " + tabela_processos.Rows.length);

// **Remover linhas que não estão no checklist**
let itemsNoChecklist = tabela.Rows.map(row => row.Columns["Item_do_Checklist"]); // Lista de itens no checklist

for (let i = tabela_processos.Rows.length - 1; i >= 0; i--) {
    let itemProcesso = tabela_processos.Rows[i].Columns["Item_do_Checklist"];
    if (!itemsNoChecklist.includes(itemProcesso)) {
        // Se o item não está mais no checklist, remove da MOC
        tabela_processos.Rows.splice(i, 1); // Remove a linha
        log("Item '" + itemProcesso + "' removido da tabela Checklist_Processos.");
    }
}

// Itera sobre as linhas do checklist
for (var t = 0; t < tabela.Rows.length; t++) {
    let nomeChecklist = tabela.Rows[t].Columns["Item_do_Checklist"];

    if (!nomeChecklist) {
        log("Linha " + t + " inválida: Item_do_Checklist ausente.");
        continue;
    }

    log("Processando checklist: " + nomeChecklist);

    // Verifica se o item já foi adicionado à tabela de processos
    let itemExistente = false;

    // Loop para verificar se o nomeChecklist já está na tabela de processos
    for (let i = 0; i < tabela_processos.Rows.length; i++) {
        if (tabela_processos.Rows[i].Columns["Item_do_Checklist"] === nomeChecklist) {
            itemExistente = true;
            break; // Sai do loop assim que encontrar uma correspondência
        }
    }

    if (itemExistente) {
        log("O item '" + nomeChecklist + "' já existe na tabela de processos. Pulando...");
        continue; // Pula a inserção se o item já existir
    }

    // Adiciona uma nova linha à tabela Checklist_Processos na MOC
    item = addTableRow(MOC_itemSearched[0], "Checklist_Processos");

    var tabela_processos_atualizada = MOC_itemSearched[0].Fields.Checklist_Processos;
    tabela_processos_atualizada.Rows[tabela_processos_atualizada.Rows.length - 1].Columns["Item_do_Checklist"] = nomeChecklist;
    log("Item '" + nomeChecklist + "' adicionado à tabela Checklist_Processos.");
}

// Salvar a MOC após alterações
saveItem(MOC_itemSearched[0]);
log("Atualização da MOC concluída.");



















var stringDeBusca = "[{'Nome_interno': 'TIPO_ITEM','Op': 0, 'Valor':'MOC','Tipo': 0}]";
var MOC_itemSearched = searchItems(item, stringDeBusca);

if (!MOC_itemSearched || MOC_itemSearched.length === 0) {
    log("Nenhum item MOC encontrado.");
    return;
}

log("MOC encontrado: " + MOC_itemSearched[0].Name);

let tabela = item.Fields.Checklist; // Tabela do checklist
if (!tabela || !tabela.Rows) {
    log("A tabela do checklist está vazia ou não existe.");
    return;
}
log("Total de linhas na tabela do checklist: " + tabela.Rows.length);

// Obtém a tabela de processos no MOC
let tabela_processos = MOC_itemSearched[0].Fields.Checklist_Processos;
if (!tabela_processos || !tabela_processos.Rows) {
    log("A tabela de processos na MOC está vazia ou não existe.");
    return;
}
log("Total de linhas na tabela de processos do MOC: " + tabela_processos.Rows.length);

// Itera sobre as linhas do checklist
for (var t = 0; t < tabela.Rows.length; t++) {
    let nomeChecklist = tabela.Rows[t].Columns["Nome"];

    log("Processando checklist: " + nomeChecklist);

    if (nomeChecklist === "CHECKLIST-E&I") {
        log("Adicionando item ao Checklist_EI da MOC");

        let tabela_EI = MOC_itemSearched[0].Fields.Checklist_EI;
        if (!tabela_EI || !tabela_EI.Rows) {
            log("Erro: Checklist_EI na MOC está ausente.");
            continue;
        }

        let novaLinha = addTableRow(MOC_itemSearched[0], "Checklist_EI");

        if (novaLinha) {
            tabela_EI.Rows[tabela_EI.Rows.length - 1].Columns["Item_do_Checklist"] =
                tabela.Rows[t].Columns["Item_do_Checklist"];

            log("Item '" + tabela.Rows[t].Columns["Item_do_Checklist"] + "' adicionado com sucesso.");
        } else {
            log("Falha ao adicionar nova linha em Checklist_EI.");
        }
    }
}

// Salvar a MOC após alterações
saveItem(MOC_itemSearched[0]);
log("Atualização da MOC concluída.");
