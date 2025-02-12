preciso fazer essa mesma lógica só que agora aou contrário , preciso fazer o searchItems no valor MOC e 


function Item_OnClickWorkflowAction(item) {
    log('Entrou aqui');
    
    if (item.Type === 'MOC') {
        
        var checklists = {
            "CHECKLIST-E&I": "Checklist_EI",
            "CHECKLIST-HSEQ": "Checklist_HSEQ",
            "CHECKLIST-PROCESSOS": "Checklist_Processos",
            "CHECKLIST-NAVAL": "Checklist_Naval",
            "CHECKLIST-INTEGRIDADE": "Checklist_Integridade",
            "CHECKLIST-ROTATING": "Checklist_Rotating_Equipments",
            "CHECKLIST-METERING": "Checklist_Metering",
            "CHECKLIST-SAFETY": "Checklist_Process_Safety"
        };
        
        var stringDeBusca = "[{'Nome_interno': 'TIPO_ITEM','Op': 0, 'Valor':'Checklist','Tipo': 0}]";
        var itemsSearched = searchItems(item, stringDeBusca);
        log(itemsSearched.length);
        
        for (var i = 0; i < itemsSearched.length; i++) {
            var tabela_checklist = itemsSearched[i].Fields.Checklist;
            var checklistName = itemsSearched[i].Name;
            
            if (tabela_checklist && tabela_checklist.Rows && tabela_checklist.Rows.length > 0) {
                if (checklists.hasOwnProperty(checklistName)) {
                    var checklistField = checklists[checklistName];
                    var checklistData = item.Fields[checklistField];
                    var itensExistentes = [];
                    
                    if (checklistData && checklistData.Rows && checklistData.Rows.length > 0) {
                        for (var k = 0; k < checklistData.Rows.length; k++) {
                            itensExistentes.push(checklistData.Rows[k].Columns["Item_do_Checklist"]);
                        }
                    }
                    
                    for (var j = 0; j < tabela_checklist.Rows.length; j++) {
                        var novoItem = tabela_checklist.Rows[j].Columns["Item_do_Checklist"];
                        
                        if (itensExistentes.indexOf(novoItem) === -1) {
                            log("Novo item encontrado: " + novoItem);
                            
                            item = addTableRow(item, checklistField);
                            var novaLinha = item.Fields[checklistField].Rows[item.Fields[checklistField].Rows.length - 1];
                            novaLinha.Columns["Item_do_Checklist"] = novoItem;
                            log("Item inserido: " + novoItem);
                            
                            itensExistentes.push(novoItem);
                        }
                    }
                }
            }
        }
    }
}
