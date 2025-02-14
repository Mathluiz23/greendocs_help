    // CÓDIGO PARA PREENCHER AS TABELAS DA MOC CONFORME AS TABELAS DO CHECKLIST, TESTADO APENAS EM UMA TABELA (TABELA PROCESS) , REPLICAR PARA AS RESTANTES
    var stringDeBusca = "[{'Nome_interno': 'TIPO_ITEM','Op': 0, 'Valor':'MOC','Tipo': 0}]";
var MOCs = searchItems(item, stringDeBusca);

if (!MOCs || MOCs.length === 0) {
    log("Nenhuma MOC encontrada.");
    return;
}

var tabelaChecklist = item.Fields.Checklist;
if (!tabelaChecklist || !tabelaChecklist.Rows || tabelaChecklist.Rows.length === 0) {
    log("A tabela do checklist está vazia ou não existe.");
    return;
}

log("Total de linhas na tabela do checklist: " + tabelaChecklist.Rows.length);

// Lista das tabelas a serem verificadas na MOC
var tabelasMOC = [
    "Checklist_Processos",
    "Checklist_HSEQ",
    "Checklist_EI",
    "Checklist_Naval",
    "Checklist_Integridade",
    "Checklist_Rotating_Equipments",
    "Checklist_Metering",
    "Checklist_Process_Safety",
    "Checklist_Manutencao"
];

for (var i = 0; i < MOCs.length; i++) {
    var moc = MOCs[i];
    log("Processando MOC: " + moc.Name);

    for (var j = 0; j < tabelasMOC.length; j++) {
        var tabelaNome = tabelasMOC[j];
        var tabelaMOC = moc.Fields[tabelaNome];

        if (!tabelaMOC || !tabelaMOC.Rows) {
            log("A tabela " + tabelaNome + " na MOC está vazia ou não existe.");
            continue;
        }

        log("Total de linhas na tabela " + tabelaNome + " do MOC antes da atualização: " + tabelaMOC.Rows.length);

        // Remover itens da MOC que não estão mais no checklist
        for (var x = tabelaMOC.Rows.length - 1; x >= 0; x--) {
            var itemProcesso = tabelaMOC.Rows[x].Columns["Item_do_Checklist"];
            var encontrado = false;

            for (var y = 0; y < tabelaChecklist.Rows.length; y++) {
                if (tabelaChecklist.Rows[y].Columns["Item_do_Checklist"] === itemProcesso) {
                    encontrado = true;
                    break;
                }
            }

            if (!encontrado) {
                tabelaMOC.Rows.splice(x, 1);
                log("Item '" + itemProcesso + "' removido da tabela " + tabelaNome + ".");
            }
        }

        // Adicionar itens do checklist que não estão na MOC
        for (var t = 0; t < tabelaChecklist.Rows.length; t++) {
            var nomeChecklist = tabelaChecklist.Rows[t].Columns["Item_do_Checklist"];

            if (!nomeChecklist) {
                log("Linha " + t + " inválida: Item_do_Checklist ausente.");
                continue;
            }

            var existe = false;
            for (var k = 0; k < tabelaMOC.Rows.length; k++) {
                if (tabelaMOC.Rows[k].Columns["Item_do_Checklist"] === nomeChecklist) {
                    existe = true;
                    break;
                }
            }

            if (existe) {
                log("O item '" + nomeChecklist + "' já existe na tabela " + tabelaNome + ". Pulando...");
                continue;
            }

            var novaLinha = addTableRow(moc, tabelaNome);
            if (novaLinha) {
                var ultimaLinhaIndex = tabelaMOC.Rows.length - 1;
                tabelaMOC.Rows[ultimaLinhaIndex].Columns["Item_do_Checklist"] = nomeChecklist;
                log("Item '" + nomeChecklist + "' adicionado à tabela " + tabelaNome + ".");
            } else {
                log("Falha ao adicionar nova linha em " + tabelaNome + ".");
            }
        }
    }

    // Salvar a MOC após alterações
    saveItem(moc);
    log("Atualização da MOC '" + moc.Name + "' concluída.");
}