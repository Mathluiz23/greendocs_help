if(item.Type === 'MOC'){
    var stringDeBusca = "[{'Nome_interno': 'TIPO_ITEM','Op': 0, 'Valor':'Checklist','Tipo': 0}]";
    var itemsSearched = searchItems(item,stringDeBusca);
    log(itemsSearched.length);
    for (var i=0; i < itemsSearched.length; i++){
        
    var tabela = itemsSearched[i].Fields.Checklist;
    
    if ((tabela !== "") && (tabela !== undefined )&& (tabela !== null)){
    
        for (var t=0; t < tabela.Rows.length; t++) {
            
            log(itemsSearched[i].Name);
            if(itemsSearched[i].Name == "CHECKLIST-E&I"){
                
                item = addTableRow(item, "Checklist_EI");
                var tabela_EI = item.Fields.Checklist_EI;
                tabela_EI.Rows[tabela_EI.Rows.length - 1].Columns["Item_do_Checklist"] = tabela.Rows[t].Columns['Item_do_Checklist'];
                
            }
            
            if(itemsSearched[i].Name == "CHECKLIST-HSEQ"){
                
                item = addTableRow(item, "Checklist_HSEQ");
                var tabela_HSEQ = item.Fields.Checklist_HSEQ;
                tabela_HSEQ.Rows[tabela_HSEQ.Rows.length - 1].Columns["Item_do_Checklist"] = tabela.Rows[t].Columns['Item_do_Checklist'];
            }
            
            if(itemsSearched[i].Name == "CHECKLIST-INTEGRITY"){
            
                item = addTableRow(item, "Checklist_Integridade");
                var tabela_integridade = item.Fields.Checklist_Integridade;
                tabela_integridade.Rows[tabela_integridade.Rows.length - 1].Columns["Item_do_Checklist"] = tabela.Rows[t].Columns['Item_do_Checklist'];
            }
            
            if(itemsSearched[i].Name == "CHECKLIST-MANUTENÇÃO"){
            
                item = addTableRow(item, "Checklist_Manutencao");
                var tabela_manutencao = item.Fields.Checklist_Manutencao;
                tabela_manutencao.Rows[tabela_manutencao.Rows.length - 1].Columns["Item_do_Checklist"] = tabela.Rows[t].Columns['Item_do_Checklist'];
            }
            
            if(itemsSearched[i].Name == "CHECKLIST-METERING"){
            
                item = addTableRow(item, "Checklist_Metering");
                var tabela_metering = item.Fields.Checklist_Metering;
                tabela_metering.Rows[tabela_metering.Rows.length - 1].Columns["Item_do_Checklist"] = tabela.Rows[t].Columns['Item_do_Checklist'];
            }
            
            if(itemsSearched[i].Name == "CHECKLIST-NAVAL"){
            
                item = addTableRow(item, "Checklist_Naval");
                var tabela_naval = item.Fields.Checklist_Naval;
                tabela_naval.Rows[tabela_naval.Rows.length - 1].Columns["Item_do_Checklist"] = tabela.Rows[t].Columns['Item_do_Checklist'];
            }
            
            if(itemsSearched[i].Name == "CHECKLIST-PROCESS"){
            
                item = addTableRow(item, "Checklist_Processos");
                var tabela_processos = item.Fields.Checklist_Processos;
                tabela_processos.Rows[tabela_processos.Rows.length - 1].Columns["Item_do_Checklist"] = tabela.Rows[t].Columns['Item_do_Checklist'];
            }
            
            if(itemsSearched[i].Name == "CHECKLIST-PROCESS SAFETY"){
            
                item = addTableRow(item, "Checklist_Process_Safety");
                var tabela_safety = item.Fields.Checklist_Process_Safety;
                tabela_safety.Rows[tabela_safety.Rows.length - 1].Columns["Item_do_Checklist"] = tabela.Rows[t].Columns['Item_do_Checklist'];
            }
            
            if(itemsSearched[i].Name == "CHECKLIST-ROTATING EQUIPMENTS"){
            
                item = addTableRow(item, "Checklist_Rotating_Equipments");
                var tabela_rotating = item.Fields.Checklist_Rotating_Equipments;
                tabela_rotating.Rows[tabela_rotating.Rows.length - 1].Columns["Item_do_Checklist"] = tabela.Rows[t].Columns['Item_do_Checklist'];
            }
        }
    }
}