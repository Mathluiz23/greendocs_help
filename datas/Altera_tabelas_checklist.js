    CÓDIGO PARA PREENCHER AS TABELAS DA CHECKLIST ATÉ ATIVIDADE 9
    
    if(action.ID == 107 || action.ID == 108 || action.ID == 111 || action.ID == 114){
        log("entrou MOC");
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
    }
        
    // CÓDIGO PARA PREENCHER A TABELA APROVADORES COM REVISÃO E ATIVIDADE

    if(item.Type === 'MOC'){
        let revisao = item.RevisionNumber;
        log("Revisao: " + revisao);
    
        if (item.Fields.Aprovadores === null || item.Fields.Aprovadores === undefined || item.Fields.Aprovadores.Rows.length === "" || item.Fields.Aprovadores.Rows.length >= 1) {
            item = addTableRow(item, "Aprovadores");
            item.Fields.Aprovadores.Rows[item.Fields.Aprovadores.Rows.length - 1].Columns["Revisao_auxiliar"] = revisao;
        }
    
        for (var b = 0; b < item.Fields.Aprovadores.Rows.length; b++) {
            item.Fields.Aprovadores.Rows[b].Columns["Revisao_auxiliar"] = revisao;
            // log("Revisao do Aprovador " + item.Fields.Aprovadores.Rows[b].Columns["Revisao_auxiliar"]);
        }
        
        let atividade = item.Status;
        // log("Atividade: " + atividade);
    
        if (item.Fields.Aprovadores.Rows.length === 0 || item.Fields.Aprovadores.Rows[item.Fields.Aprovadores.Rows.length - 1].Columns["Atividade_atual"] === undefined) {
            item = addTableRow(item, "Aprovadores");
            item.Fields.Aprovadores.Rows[item.Fields.Aprovadores.Rows.length - 1].Columns["Atividade_atual"] = atividade;
        }
    
        let lastRow = item.Fields.Aprovadores.Rows[item.Fields.Aprovadores.Rows.length - 1];
        lastRow.Columns["Atividade_atual"] = atividade;
    
        // log("Atividade do Aprovador: " + lastRow.Columns["Atividade_atual"]);
        }

    if (item.Type == "MOC"){
        log("Name: " + item.Name);
        log("Tipo_de_Mudanca: " + item.Fields.Tipo_de_Mudanca);
        item.Status = item.Fields.Atividade_Status;

    if(item.Type === "AC"){
        
        if(action.ID == 203){

            item.Fields.Valida_Acao_Finalizada = "Sim";
            log(item.Fields.Valida_Acao_Finalizada);
        }
    }
    
    let tabela_MOC_TEMP_REV_EXT_PRAZO = item.Fields.MOC_Temporaria__Revalidacao__Extensao_de_Prazo;

    if(action.ID == 182){ //atividade 29
        log("entrou if  29");
        let contador_extensao = tabela_MOC_TEMP_REV_EXT_PRAZO.Rows.length;
        log("contador_extensao tipo: "+ typeof contador_extensao);
        log("novo valor de linhas atividade 29: "+ contador_extensao);
        log("linhas tabela tipo ativ 29: "+ typeof item.Fields.Linhas_Tabela);
        let valorAnterior_extensao = Number(item.Fields.Linhas_Tabela); 
        log("linhas tabela tipo ativ 29 apos conversão: "+ typeof item.Fields.Linhas_Tabela);
        }
            if(valorAnterior_extensao >= contador_extensao){
                abort("É necessário incluir pelo menos uma linha na tabela Revalidação Temporária da MOC.");
    } 

    
    let tabela_MOC_TEMP_REV_EXT_PRAZO = item.Fields.MOC_Temporaria__Revalidacao__Extensao_de_Prazo;

    if(action.ID == 180){ //atividade 28
        log("entrou if  28");
        let contador_extensao = tabela_MOC_TEMP_REV_EXT_PRAZO.Rows.length;
        log("contador_extensao tipo: "+ typeof contador_extensao);
        log("novo valor de linhas atividade 28: "+ contador_extensao);
        log("linhas tabela tipo ativ 28: "+ typeof item.Fields.Linhas_Tabela);
        let valorAnterior_extensao = Number(item.Fields.Linhas_Tabela); 
        log("linhas tabela tipo ativ 28 apos conversão: "+ typeof item.Fields.Linhas_Tabela);
    }
        if(action.ID == 180){ //atividade 28
        log("action.ID: " + action.ID);
            item.Fields.Linhas_Tabela = tabela_MOC_TEMP_REV_EXT_PRAZO.Rows.length;
            log("numero linhas antes inserção atividade 28: " + item.Fields.Linhas_Tabela);
            log("Tipo item.Fields.Linhas_Tabela na atividade 28: "+ typeof item.Fields.Linhas_Tabela);
        }
            if(valorAnterior_extensao >= contador_extensao){
                abort("É necessário incluir pelo menos uma linha na tabela Revalidação Temporária da MOC.");
    } 
    
    let tabela_MOC_TEMP_REV_EXT_PRAZO = item.Fields.MOC_Temporaria__Revalidacao__Extensao_de_Prazo;
     
    if(action.ID == 168){ //atividade 23
    log("action.ID: " + action.ID);
        item.Fields.Linhas_Tabela = tabela_MOC_TEMP_REV_EXT_PRAZO.Rows.length;
        log("numero linhas antes inserção atividade 23: " + item.Fields.Linhas_Tabela);
        log("Tipo item.Fields.Linhas_Tabela na atividade 23: "+ typeof item.Fields.Linhas_Tabela);
        
        }
        
    let tabela_MOC_TEMP_REV_EXT_PRAZO = item.Fields.MOC_Temporaria__Revalidacao__Extensao_de_Prazo;
    
    if(action.ID == 175){ //atividade 26
    log("action.ID: " + action.ID);
        let contador_extensao = tabela_MOC_TEMP_REV_EXT_PRAZO.Rows.length;
        log("contador extensao tipo: "+ typeof contador_extensao);
        log("novo valor de linhas atividade 26: "+ contador_extensao);
        log("linhas tabela tipo ativ 26: "+ typeof item.Fields.Linhas_Tabela);
        let valorAnterior_extensao = Number(item.Fields.Linhas_Tabela); 
        log("linhas tabela tipo ativ 26 apos conversão: "+ typeof item.Fields.Linhas_Tabela);
    
        }    
        
        if(action.ID == 175){ //atividade 26
        log("action.ID: " + action.ID);
            item.Fields.Linhas_Tabela = tabela_MOC_TEMP_REV_EXT_PRAZO.Rows.length;
            log("numero linhas antes inserção atividade 23: " + item.Fields.Linhas_Tabela);
            log("Tipo item.Fields.Linhas_Tabela na atividade 23: "+ typeof item.Fields.Linhas_Tabela);
            
        }
            if(valorAnterior_extensao >= contador_extensao){
                abort("É necessário incluir pelo menos uma linha na tabela MOC Temporária – Revalidação – Extensão de Prazo.");
            }

    let tabela_MOC_TEMP_REV = item.Fields.MOC_Temporaria__Revalidacao;

    if(action.ID == 173){ //atividade 25
        // log("entrou if do botão");
        let contador = tabela_MOC_TEMP_REV.Rows.length;
        // log("contador tipo: "+ typeof contador);
        //log("novo valor de linhas atividade 25: "+ contador);
        //log("linhas tabela tipo ativ 25: "+ typeof item.Fields.Linhas_Tabela);
        let valorAnterior = Number(item.Fields.Linhas_Tabela); 
        //log("linhas tabela tipo ativ 25 apos conversão: "+ typeof item.Fields.Linhas_Tabela);
    }
            if(valorAnterior >= contador){
                abort("É necessário incluir pelo menos uma linha na tabela Revalidação Temporária da MOC.");
                
        }
        
    let tabela_MOC_TEMP_REV = item.Fields.MOC_Temporaria__Revalidacao;
     
    if(action.ID == 167 || action.ID === 566){ //atividade 23
        item.Fields.Linhas_Tabela = tabela_MOC_TEMP_REV.Rows.length;
        //log("numero linhas antes inserção atividade 23: " + item.Fields.Linhas_Tabela);
        //log("Tipo item.Fields.Linhas_Tabela na atividade 23: "+ typeof item.Fields.Linhas_Tabela);
        
        }
    
    if(action.ID == 171){ //atividade 24
        //log("entrou if do botão");
        let contador = tabela_MOC_TEMP_REV.Rows.length;
        //log("contador tipo: "+ typeof contador);
        //log("novo valor de linhas atividade 24: "+ contador);
        //log("linhas tabela tipo ativ 24: "+ typeof item.Fields.Linhas_Tabela);
        let valorAnterior = Number(item.Fields.Linhas_Tabela); 
        //log("linhas tabela tipo ativ 24 apos conversão: "+ typeof item.Fields.Linhas_Tabela);
        
    }   
        let tabela_MOC_TEMP_REV = item.Fields.MOC_Temporaria__Revalidacao;

        if(action.ID == 171){ //atividade 24
    
            item.Fields.Linhas_Tabela = tabela_MOC_TEMP_REV.Rows.length;
            //log("numero linhas antes inserção atividade 24: " + item.Fields.Linhas_Tabela);
            //log("Tipo item.Fields.Linhas_Tabela na atividade 24: "+ typeof item.Fields.Linhas_Tabela);
            
            }
            
                if(valorAnterior >= contador){
                    abort("É necessário incluir pelo menos uma linha na tabela Revalidação Temporária da MOC.");
                
        } 

    if(action.ID === 171 || action.ID === 173){
        //log("action.ID: " + action.ID);
        //log("Valor Original: " + item.Fields.Quantidade_de_Revalidacoes_Efetuadas);
        //log(typeof item.Fields.Quantidade_de_Revalidacoes_Efetuadas);
        let NovoValor = item.Fields.Quantidade_de_Revalidacoes_Efetuadas + 1;
        item.Fields.Quantidade_de_Revalidacoes_Efetuadas = NovoValor;
        
        //log("NovoValor: " + NovoValor);
        }
    
    if (action.ID == "154"){ //Atividade HSEQ
        //log("154");
        let HSEQ = item.Fields.Checklist_HSEQ;
        HSEQ.Rows[0].Columns["SimNao"];
        // log("HSEQ: " + HSEQ.Rows[0].Columns["SimNao"]);
        //log("HSEQ.Rows.length" + HSEQ.Rows.length);
        for (var h = 0; h < HSEQ.Rows.length; h++) {
            HSEQ.Rows[h].Columns["SimNao"] = "Not Applicable/Não Aplicável";
            //log("HSEQ: " + HSEQ.Rows[h].Columns["SimNao"]);
            
        }
    }
    
    if (action.ID == "150"){ //Atividade Manutenção
        //log("150");
        let maintenance = item.Fields.Checklist_Manutencao;
        maintenance.Rows[0].Columns["SimNao"];
        // log("maintenance: " + maintenance.Rows[0].Columns["SimNao"]);
        //log("maintenance.Rows.length" + maintenance.Rows.length);
        for (var t = 0; t < maintenance.Rows.length; t++) {
            maintenance.Rows[t].Columns["SimNao"] = "Not Applicable/Não Aplicável";
            //log("maintenance: " + maintenance.Rows[t].Columns["SimNao"]);
            
        }
    }

    if (action.ID == "146"){ //Atividade Process Safety
        //log("146");
        let safety = item.Fields.Checklist_Process_Safety;
        safety.Rows[0].Columns["SimNao"];
        // log("safety: " + safety.Rows[0].Columns["SimNao"]);
        //log("safety.Rows.length" + safety.Rows.length);
        for (var v = 0; v < safety.Rows.length; v++) {
            safety.Rows[v].Columns["SimNao"] = "Not Applicable/Não Aplicável";
            log("safety: " + safety.Rows[v].Columns["SimNao"]);
            
        }
    }

    if (action.ID == "142"){ //Atividade Metering
        //log("142");
        let metering = item.Fields.Checklist_Metering;
        metering.Rows[0].Columns["SimNao"];
        // log("metering: " + metering.Rows[0].Columns["SimNao"]);
        //log("metering.Rows.length" + metering.Rows.length);
        for (var o = 0; o < metering.Rows.length; o++) {
            metering.Rows[o].Columns["SimNao"] = "Not Applicable/Não Aplicável";
            //log("metering: " + metering.Rows[o].Columns["SimNao"]);
            
        }
    }
    
    if (action.ID == "138"){ //Atividade Rotating
        //log("138");
        let rotating = item.Fields.Checklist_Rotating_Equipments;
        rotating.Rows[0].Columns["SimNao"];
        // log("rotating: " + rotating.Rows[0].Columns["SimNao"]);
        //log("rotating.Rows.length" + rotating.Rows.length);
        for (var m = 0; m < rotating.Rows.length; m++) {
            rotating.Rows[m].Columns["SimNao"] = "Not Applicable/Não Aplicável";
            //log("rotating: " + rotating.Rows[m].Columns["SimNao"]);
        }
    }
        
    if (action.ID == "134"){ //Atividade Integridade
        //log("134");
        let integridade = item.Fields.Checklist_Integridade;
        integridade.Rows[0].Columns["SimNao"];
        // log("integridade: " + integridade.Rows[0].Columns["SimNao"]);
        //log("integridade.Rows.length" + integridade.Rows.length);
        for (var k = 0; k < integridade.Rows.length; k++) {
            integridade.Rows[k].Columns["SimNao"] = "Not Applicable/Não Aplicável";
            //log("integridade: " + integridade.Rows[k].Columns["SimNao"]);
            
            }
        }
    if (action.ID == "130"){ //Atividade Naval
        //log("130");
        let naval = item.Fields.Checklist_Naval;
        naval.Rows[0].Columns["SimNao"];
        // log("naval: " + naval.Rows[0].Columns["SimNao"]);
        //log("naval.Rows.length" + naval.Rows.length);
        for (var k = 0; k < naval.Rows.length; k++) {
            naval.Rows[k].Columns["SimNao"] = "Not Applicable/Não Aplicável";
            //log("naval: " + naval.Rows[k].Columns["SimNao"]);
        }
}
        
    if (action.ID == "126"){ //Atividade E&I
        //log("126");
        let tabelaEI = item.Fields.Checklist_EI;
        tabelaEI.Rows[0].Columns["SimNao"];
        //log("tabelaEI.Rows.length; j++: " + tabelaEI.Rows.length);
        //log("tabelaEI.Rows.length" + tabelaEI.Rows.length);
        for (var j = 0; j < tabelaEI.Rows.length; j++) {
            tabelaEI.Rows[j].Columns["SimNao"] = "Not Applicable/Não Aplicável";
            // log("tabelaEI: " + tabelaEI.Rows[j].Columns["SimNao"]);
            
    }
}
    
    if (action.ID == "122"){ //Atividade Processos
        //log("122");
        let processo = item.Fields.Checklist_Processos;
        processo.Rows[0].Columns["SimNao"];
        //log("processo: " + processo.Rows[0].Columns["SimNao"]);
        //log("processo.Rows.length" + processo.Rows.length);
        for (var i = 0; i < processo.Rows.length; i++) {
            processo.Rows[i].Columns["SimNao"] = "Not Applicable/Não Aplicável";
            //log("processo: " + processo.Rows[i].Columns["SimNao"]);
        }
    }
}