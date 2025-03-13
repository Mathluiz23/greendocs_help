let tabela = item.Fields.Checklist;
log("checklist  " + item.Name) // nome de cada tabela do checklist

var stringDeBusca = "[{'Nome_interno': 'TIPO_ITEM','Op': 0, 'Valor':'MOC','Tipo': 0}]";
var MOC_items = searchItems(item, stringDeBusca);

if (!MOC_items || MOC_items.length === 0) {
    log("Nenhum item MOC encontrado.");
    return;
}

log("Total de MOCs encontradas: " + MOC_items.length);

let tabelasChecklist = [
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

for (var i = 0; i < MOC_items.length; i++) {
    let mocItem = MOC_items[i];
    log("Verificando MOC: " + mocItem.Name);

    for (var j = 0; j < tabelasChecklist.length; j++) {
        let nomeTabela = tabelasChecklist[j];
        (log("NOME TABELA " + nomeTabela))
        
        if(item.Name == nomeTabela) {
            // item.Name é a tabela do checklist na qual estou, preciso levar as informações dela para a tabela da moc
        }
    }
    
}