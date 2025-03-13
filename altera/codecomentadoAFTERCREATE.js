        
    // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//     // CÓDIGO PARA PREENCHER A TABELA APROVADORES COM REVISÃO E ATIVIDADE

//     if(item.Type === 'MOC'){
//         let revisao = item.RevisionNumber;
//         // log("Revisao: " + revisao);
    
//         if (item.Fields.Aprovadores === null || item.Fields.Aprovadores === undefined || item.Fields.Aprovadores.Rows.length === "" || item.Fields.Aprovadores.Rows.length >= 1) {
//             item = addTableRow(item, "Aprovadores");
//             item.Fields.Aprovadores.Rows[item.Fields.Aprovadores.Rows.length - 1].Columns["Revisao_auxiliar"] = revisao;
//         }
    
//         for (var b = 0; b < item.Fields.Aprovadores.Rows.length; b++) {
//             item.Fields.Aprovadores.Rows[b].Columns["Revisao_auxiliar"] = revisao;
//             // log("Revisao do Aprovador " + item.Fields.Aprovadores.Rows[b].Columns["Revisao_auxiliar"]);
//         }
        
//         let atividade = item.Status;
//         // log("Atividade: " + atividade);
    
//         if (item.Fields.Aprovadores.Rows.length === 0 || item.Fields.Aprovadores.Rows[item.Fields.Aprovadores.Rows.length - 1].Columns["Atividade_atual"] === undefined) {
//             item = addTableRow(item, "Aprovadores");
//             item.Fields.Aprovadores.Rows[item.Fields.Aprovadores.Rows.length - 1].Columns["Atividade_atual"] = atividade;
//         }
    
//         let lastRow = item.Fields.Aprovadores.Rows[item.Fields.Aprovadores.Rows.length - 1];
//         lastRow.Columns["Atividade_atual"] = atividade;
    
//         // log("Atividade do Aprovador: " + lastRow.Columns["Atividade_atual"]);
//         }
//     // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//     // if(item.Type === 'EPR'){
//     // let tabelaDocImpact = item.Fields.Documentacao_Impactada;
    
//     // let CheckValida;
    
//     //     for (let i = 0; i < tabelaDocImpact.Rows.length; i++) {
//     //         let row = tabelaDocImpact.Rows[i];
//     //         CheckValida = row.Columns['Execucao_refletida_no_documento_emitido_no__Greendocs'];
            
//     //         log("CheckValida: " + CheckValida);
//     //     }
//     // }
    
//     //         if(CheckValida) {
//     //             item.Fields.Validacao_Checkbox = "Sim";
//     //             log("flagado");
                
//     //         }else {
//     //             item.Fields.Validacao_Checkbox = "Não";
//     //             abort("flaga essa porra");
//     //             log("desflagado");
//     //     }
//     // }
//     // let valida_template = item.Fields.Validacao_Documento_pronto_para_execucao;
    
//     // log("Checkbox: " + item.Fields.Documento_pronto_para_execucao);
    
//     // if (item.Fields.Documento_pronto_para_execucao === false) {
//     //     log("ENTROU IF");
//     //     valida_template = "✅"
    
//     // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    
    
//     var stringDeBusca = "[{'Nome_interno': 'TIPO_ITEM','Op': 0, 'Valor':'MOC','Tipo': 0}]";
// var MOCs = searchItems(item, stringDeBusca);

// if (!MOCs || MOCs.length === 0) {
//     log("Nenhuma MOC encontrada.");
//     return;
// }

// var tabelasChecklist = item.Fields.Checklist;
// if (!tabelasChecklist || tabelasChecklist.length === 0) {
//     log("Nenhuma tabela encontrada dentro do checklist.");
//     return;
// }

// // Percorre cada MOC encontrada
// for (var i = 0; i < MOCs.length; i++) {
//     var moc = MOCs[i];
//     log("Processando MOC: " + moc.Name);

//     // Percorre cada tabela dentro do checklist
//     for (var j = 0; j < tabelasChecklist.length; j++) {
//         var tabelaChecklist = tabelasChecklist[j];
//         var nomeChecklist = tabelaChecklist.Name;

//         if (!nomeChecklist) {
//             log("Erro: Nome da tabela do checklist não encontrado.");
//             continue;
//         }

//         var tabelaMOC = null;

//         // Mapeia os nomes do checklist para os nomes internos da MOC
//         if (nomeChecklist === "CHECKLIST-E&I") {
//             tabelaMOC = moc.Fields.Checklist_EI;
//         } else if (nomeChecklist === "CHECKLIST-HSEQ") {
//             tabelaMOC = moc.Fields.Checklist_HSEQ;
//         } else if (nomeChecklist === "CHECKLIST-INTEGRITY") {
//             tabelaMOC = moc.Fields.Checklist_Integridade;
//         } else if (nomeChecklist === "CHECKLIST-MANUTENÇÃO") {
//             tabelaMOC = moc.Fields.Checklist_Manutencao;
//         } else if (nomeChecklist === "CHECKLIST-METERING") {
//             tabelaMOC = moc.Fields.Checklist_Metering;
//         } else if (nomeChecklist === "CHECKLIST-NAVAL") {
//             tabelaMOC = moc.Fields.Checklist_Naval;
//         } else if (nomeChecklist === "CHECKLIST-PROCESS") {
//             tabelaMOC = moc.Fields.Checklist_Processos;
//         } else if (nomeChecklist === "CHECKLIST-PROCESS SAFETY") {
//             tabelaMOC = moc.Fields.Checklist_Process_Safety;
//         } else if (nomeChecklist === "CHECKLIST-ROTATING EQUIPMENTS") {
//             tabelaMOC = moc.Fields.Checklist_Rotating_Equipments;
//         }

//         if (!tabelaMOC) {
//             log("Tabela correspondente na MOC não encontrada para " + nomeChecklist + ". Criando nova...");
//             tabelaMOC = moc.Fields[nomeChecklist] = { Rows: [] };
//         }

//         // Atualiza a tabela da MOC para refletir o checklist
//         var linhasChecklist = tabelaChecklist.Rows;
//         var linhasMOC = tabelaMOC.Rows;

//         // Apagar todas as linhas antigas e adicionar novas
//         tabelaMOC.Rows = [];

//         for (var t = 0; t < linhasChecklist.length; t++) {
//             var novaLinha = addTableRow(moc, nomeChecklist);
//             if (novaLinha) {
//                 novaLinha.Columns["Item_do_Checklist"] = linhasChecklist[t].Columns["Item_do_Checklist"];
//                 log("Item '" + linhasChecklist[t].Columns["Item_do_Checklist"] + "' copiado para " + nomeChecklist + " na MOC.");
//             } else {
//                 log("Erro ao adicionar item à tabela " + nomeChecklist + " na MOC.");
//             }
//         }
//     }

//     // Salvar a MOC após atualização
//     saveItem(moc);
//     log("Atualização da MOC '" + moc.Name + "' concluída.");
// }



   

//     // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    
    
//     //Preenchimento do Auxiliar MOC PAI
//     item.Fields.MOC_Pai_da_Acao = item.Name;
//     //log("PAI : " + item.Fields.MOC_Pai_da_Acao);
    
//     //Procurando
    
//     if(action.ID == 160 || action.ID == 173){
//         let referencia_acoes = searchReferencedItems(item, "MOC > Ações", 1);
//         log("referencia_acoes: " + referencia_acoes.length);
        
//         for (var r = 0; r < referencia_acoes.length; r++) {
//             log("entrou");
    
//             let impeditiva = referencia_acoes[r].Fields.Impeditiva_para_Execucao;
//             let valida_acao = referencia_acoes[r].Fields.Valida_Acao_Finalizada;
//             log("valida_acao: " + valida_acao);
            
//             if(valida_acao === "" && impeditiva == "Impeditive/Impeditiva"){
                
//                 abort("Existem ações impeditivas não finalizadas. Finalize-as antes de avançar o fluxo.");
//             } else {
//                 log("else");
//             }
//         }
//     }
        
//     // if (item.Type === 'CKL' ) {
        
//     //     var checklists = {
//     //         "CHECKLIST-E&I": "Checklist_EI",
//     //         "CHECKLIST-HSEQ": "Checklist_HSEQ",
//     //         "CHECKLIST-PROCESS": "Checklist_Processos",
//     //         "CHECKLIST-NAVAL": "Checklist_Naval",
//     //         "CHECKLIST-INTEGRITY": "Checklist_Integridade",
//     //         "CHECKLIST-ROTATING EQUIPMENTS": "Checklist_Rotating_Equipments",
//     //         "CHECKLIST-METERING": "Checklist_Metering",
//     //         "CHECKLIST-PROCESS SAFETY": "Checklist_Process_Safety"
//     //     };
        
//     //     var stringDeBusca = "[{'Nome_interno': 'TIPO_ITEM','Op': 0, 'Valor':'Checklist','Tipo': 0}]";
//     //     var itemsSearched = searchItems(item, stringDeBusca);
//     //     log(itemsSearched.length);
        
//     //     for (var i = 0; i < itemsSearched.length; i++) {
//     //         var tabela_checklist = itemsSearched[i].Fields.Checklist;
//     //         var checklistName = itemsSearched[i].Name;
            
//     //         if (tabela_checklist && tabela_checklist.Rows && tabela_checklist.Rows.length > 0) {
//     //             if (checklists.hasOwnProperty(checklistName)) {
//     //                 var checklistField = checklists[checklistName];
//     //                 var checklistData = item.Fields[checklistField];
//     //                 var itensExistentes = [];
                    
//     //                 if (checklistData && checklistData.Rows && checklistData.Rows.length > 0) {
//     //                     for (var k = 0; k < checklistData.Rows.length; k++) {
//     //                         itensExistentes.push(checklistData.Rows[k].Columns["Item_do_Checklist"]);
//     //                     }
//     //                 }
                    
//     //                 for (var j = 0; j < tabela_checklist.Rows.length; j++) {
//     //                     var novoItem = tabela_checklist.Rows[j].Columns["Item_do_Checklist"];
                        
//     //                     if (itensExistentes.indexOf(novoItem) === -1) {
//     //                         log("Novo item encontrado: " + novoItem);
                            
//     //                         item = addTableRow(item, checklistField);
//     //                         var novaLinha = item.Fields[checklistField].Rows[item.Fields[checklistField].Rows.length - 1];
//     //                         novaLinha.Columns["Item_do_Checklist"] = novoItem;
//     //                         log("Item inserido: " + novoItem);
                            
//     //                         itensExistentes.push(novoItem);
//     //                     }
//     //                 }
//     //             }
//     //         }
//     //     }
//     // }
    
//     let tabela_processos = item.Fields.Checklist_Processos;
//     let tabela_EI = item.Fields.Checklist_EI;
//     let tabela_naval = item.Fields.Checklist_Naval;
//     let tabela_integridade = item.Fields.Checklist_Integridade;
//     let tabela_rotating = item.Fields.Checklist_Rotating_Equipments;
//     let tabela_metering = item.Fields.Checklist_Metering;
//     let tabela_safety = item.Fields.Checklist_Process_Safety;
//     // FALTA 2 ITENS
//     let Valida_Processos = item.Fields.Checklist_Nao_se_Aplica_para_a_Disciplina_de_Processos;
//     let Valida_EI  = item.Fields.Checklist_Nao_se_Aplica_para_a__Disciplina_de_EI;
//     let Valida_Naval = item.Fields.Checklist_Nao_se_Aplica_para_a_Disciplina_de_Naval;
//     let Valida_Integridade = item.Fields.Checklist_Nao_se_Aplica_para_a_Disciplina_de_Integridade;
//     let Valida_Rotating = item.Fields.Checklist_Nao_se_Aplica_para_a_Disciplina_de_Rotating_Equipments;
//     let Valida_Metering = item.Fields.Checklist_Nao_se_Aplica_para_a_Disciplina_de_Metering;
//     let Valida_Safety = item.Fields.Checklist_Nao_se_Aplica_para_a_Disciplina_de_Process_Safety;

//     if (action.ID === 118) {
        
//         // Checkboxes
//         // log("Valida_Processos: " + item.Fields.Checklist_Nao_se_Aplica_para_a_Disciplina_de_Processos);
//         // log("Valida_EI: " + item.Fields.Checklist_Nao_se_Aplica_para_a__Disciplina_de_EI);
//         // log("Valida_Naval: " + item.Fields.Checklist_Nao_se_Aplica_para_a_Disciplina_de_Naval);
//         // log("Valida_Integridade: " + item.Fields.Checklist_Nao_se_Aplica_para_a_Disciplina_de_Integridade);
//         // log("Valida_Rotating: " + item.Fields.Checklist_Nao_se_Aplica_para_a_Disciplina_de_Rotating_Equipments);
//         // log("Valida_Metering: " + item.Fields.Checklist_Nao_se_Aplica_para_a_Disciplina_de_Metering);
//         // log("Valida_Safety: " + item.Fields.Checklist_Nao_se_Aplica_para_a_Disciplina_de_Process_Safety);
        
//         // Tabelas
//         // log("tabela_processos: " + item.Fields.Checklist_Processos);
//         // log("tabela_EI: " + item.Fields.Checklist_EI);
//         // log("tabela_naval: " + item.Fields.Checklist_Naval);
//         // log("tabela_integridade: " + item.Fields.Checklist_Integridade);
//         // log("tabela_rotating: " + item.Fields.Checklist_Rotating_Equipments);
//         // log("tabela_metering: " + item.Fields.Checklist_Metering);
//         // log("tabela_safety: " + item.Fields.Checklist_Process_Safety);

//         if (Valida_Processos !== true) {
//             if (tabela_processos === undefined) {
//                 abort("Atenção! Existem checklists não preenchidos e/ou não indicados como não aplicáveis. Verifique para avançar o fluxo.");
//             }
//         }
//         if (Valida_EI !== true) {
//             if (tabela_EI === undefined) {
//                 abort("Atenção! Existem checklists não preenchidos e/ou não indicados como não aplicáveis. Verifique para avançar o fluxo.");
//             }
//         }
//         if (Valida_Naval !== true) {
//             if (tabela_naval === undefined) {
//                 abort("Atenção! Existem checklists não preenchidos e/ou não indicados como não aplicáveis. Verifique para avançar o fluxo.");
//             }   
//         }
//         if (Valida_Integridade !== true) {
//             if (tabela_integridade === undefined) {
//                 abort("Atenção! Existem checklists não preenchidos e/ou não indicados como não aplicáveis. Verifique para avançar o fluxo.");
//             }
//         }
//         if (Valida_Rotating !== true) {
//             if (tabela_rotating === undefined) {
//                 abort("Atenção! Existem checklists não preenchidos e/ou não indicados como não aplicáveis. Verifique para avançar o fluxo.");
//             }
//         }  
//         if (Valida_Metering !== true) {
//             if (tabela_metering === undefined) {
//                 abort("Atenção! Existem checklists não preenchidos e/ou não indicados como não aplicáveis. Verifique para avançar o fluxo.");
//             }
//         }
//         if (Valida_Safety !== true) {
//             if (tabela_safety === undefined) {
//                 abort("Atenção! Existem checklists não preenchidos e/ou não indicados como não aplicáveis. Verifique para avançar o fluxo.");
//             }
//         }
//     }

//     if(action.ID == 187){
//         log("entrou 187");
//         let tabelaDocImpact = item.Fields.Documentacao_Impactada;
//         let CheckValida;
    
//         for (let h = 0; h < tabelaDocImpact.Rows.length; h++) {
//             let row = tabelaDocImpact.Rows[h];
//             CheckValida = row.Columns.Execucao_refletida_no_documento_emitido_no__Greendocs;
//             log("CheckValida: " + CheckValida);
        
//         if (CheckValida) {
//             item.Fields.Validacao_Checkbox = "Sim";
//             log("SIM");
//         } else {
//             item.Fields.Validacao_Checkbox = "Não";
//             abort("É obrigatória a seleção de todos os checkboxes da tabela 'Documentação Impactada' para prosseguimento da atividade");
//             break;
//             }
//         }
//     }

//     if(item.Type == "MOC"){ 
//         // log("Entrou tipo item MOC");
//         // log(action.ID);
        
//         let tabela = item.Fields.Aprovadores;
         
//         if(action.ID == 153){ //atividade 18
//             item.Fields.Linhas_Tabela = tabela.Rows.length;
//             // log("numero linhas antes inserção atividade 18: " + item.Fields.Linhas_Tabela);
//             // log("Tipo item.Fields.Linhas_Tabela na atividade 18: "+ typeof item.Fields.Linhas_Tabela);
            
//             }
        
//         if(action.ID == 157){ //atividade 19
//             // log("entrou if do botão");
//             let contador = tabela.Rows.length;
//             // log("contador tipo: "+ typeof contador);
//             // log("novo valor de linhas atividade 19: "+ contador);
//             // log("linhas tabela tipo ativ 19: "+ typeof item.Fields.Linhas_Tabela);
//             let valorAnterior = Number(item.Fields.Linhas_Tabela); 
//             // log("linhas tabela tipo ativ 19 apos conversão: "+ typeof item.Fields.Linhas_Tabela);
//         }
//                 if(valorAnterior >= contador){
//                     abort("É necessário incluir pelo menos uma linha na tabela Aprovadores.");
//                 } 
        

//         if(action.ID == 160){ //ATIVIDADE 20
//             tabela21 = item.Fields.Aprovadores;
            
//             // log("entrou 20");
//             item.Fields.Linhas_Tabela_21 = tabela21.Rows.length;
//             // log("numero linhas antes inserção atividade 20: " + item.Fields.Linhas_Tabela_21);
//             // log("Tipo item.Fields.Linhas_Tabela na atividade 20: "+ typeof item.Fields.Linhas_Tabela_21);
        
//         }
        
//         if (action.ID == 162) { //atividade 21
//             tabela21 = item.Fields.Aprovadores;

//             // Verificação de número de linhas da tabela (Aprovadores)
//             let contador = tabela21.Rows.length;
//             // log("contador tipo: " + typeof contador);
//             // log("novo valor de linhas atividade 21: " + contador);
//             // log("linhas tabela tipo ativ 21: " + typeof item.Fields.Linhas_Tabela_21);

//             let valorAnterior = Number(item.Fields.Linhas_Tabela_21);
//             // log("linhas tabela tipo ativ 21 após conversão: " + typeof item.Fields.Linhas_Tabela_21);
//             }
            
//             // Se o número de linhas não foi alterado, aborta
//             if (valorAnterior >= contador) {
//                 abort("É necessário incluir pelo menos uma linha na tabela Aprovadores.");
//             }
    
//             let tabelaDocImpact = item.Fields.Documentacao_Impactada;
//             let CheckValida;
        
//             for (let m = 0; m < tabelaDocImpact.Rows.length; m++) {
//                 let row = tabelaDocImpact.Rows[m];
//                 CheckValida = row.Columns.Execucao_refletida_no_documento_emitido_no__Greendocs;
//                 //log("CheckValida: " + CheckValida);
        
//                 if (CheckValida) {
//                     item.Fields.Validacao_Checkbox = "Sim";
//                 } else {
//                     item.Fields.Validacao_Checkbox = "Não";
//                     break;
//             }
//         }

//             //log("Tipo_de_Mudanca: " + item.Fields.Tipo_de_Mudanca);
//             //log("Situacao: " + item.Fields.Situacao);
//             let mudanca = item.Fields.Tipo_de_Mudanca;
//             let situacao = item.Fields.Situacao;
            
//             if (mudanca === "Permanent/Permanente") {
//                 if (situacao === "Moc Transformed Into Permanent/Moc Transformada Em Permanente"){
                    
//                 }
//             }
            
//         if(action.ID === 164){ //Atividade 22 - Ação: Avaliar Necessidade de Revalidação 
//             //log("action ID: " + action.ID);

//             DataProxRev = item.Fields.Data_da_Proxima_Revalidacao;
            
//             let DataProxRev15 = new Date(DataProxRev);
//             DataProxRev15.setDate(DataProxRev15.getDate() - 15);
//             item.Fields.Data_da_Proxima_Revalidacao15 = DataProxRev15;
//             //log("DataProxRev15: " + DataProxRev15);
            
//             }
            
//         let QRE = item.Fields.Quantidade_de_Revalidacoes_Efetuadas;
//         let visibilidade_QRE = item.Fields.QRE_23;
        
//         if(QRE <= 4) {
//             //log("ENTROU if QRE: " + QRE);
//             visibilidade_QRE = "Sim";
//         } else {
//             visibilidade_QRE = "Não";
//         }
        
//         //log("visibilidade_QRE: " + visibilidade_QRE);
        
//             if(visibilidade_QRE === "Sim") {
//                 //log("entrou if QRE");
//                 let QEPE = item.Fields.Quantidade_de_Extensoes_de_Prazo_Efetuadas;
//                 let visibilidade_QEPE = item.Fields.QEPE_23;
            
//                 if(QEPE === 0) {
//                     log("entrou if QEPE");
//                     visibilidade_QEPE = "Sim";
//                 } else {
//                     visibilidade_QEPE = "Não";
//                 }
                
//               // log("visibilidade_QEPE: " + visibilidade_QEPE);
                
//             if(visibilidade_QRE === "Sim" && visibilidade_QEPE === "Sim") {
//                 //log("entrou if visibilidade 1");
//                 autorizacao_1 = item.Fields.Regra_1_Atividade_23;
//                 //log("entrou autorizacao 1");
//                 autorizacao_1 = "Sim";
//                 item.Fields.Regra_1_Atividade_23 = autorizacao_1;
//               //log("Regra 1: " + autorizacao_1);
        
//                 }
//             }
            
//         let QRE2 = item.Fields.Quantidade_de_Revalidacoes_Efetuadas;
//         let visibilidade_QRE2 = item.Fields.QRE_23;
        
//         if(QRE2 <= 8 && QRE2 > 4) {
//             //log("entrou if QRE2: " + QRE2);
//             visibilidade_QRE2 = "Sim";
//         } else {
//             visibilidade_QRE2 = "Não";
//         }
        
//         //log("visibilidade_QRE2: " + visibilidade_QRE2);
        
//         if(visibilidade_QRE2 === "Sim") {
//             //log("entrou if QRE2");
//             let QEPE2 = item.Fields.Quantidade_de_Extensoes_de_Prazo_Efetuadas;
//             let visibilidade_QEPE2 = item.Fields.QEPE_23;
                
//             if(QEPE2 === 1) {
//                 //log("entrou if QEPE2");
//                 visibilidade_QEPE2 = "Sim";
//             } else {
//                 visibilidade_QEPE2 = "Não";
//             }
                
//             if(visibilidade_QRE2 === "Sim" && visibilidade_QEPE2 === "Sim"){
//                 //log("visibilidade_QEPE2: " + visibilidade_QEPE2);
//                 //log("visibilidade_QRE2: " + visibilidade_QRE2);
//                 item.Fields.Regra_dois_Atividade_23 = "Sim";
//                 //log("Regra 2: " + item.Fields.Regra_dois_Atividade_23);

//             }
//         }
       
//         if(action.ID === 182){
//             //log("Valor Antigo: " + item.Fields.Quantidade_de_Extensoes_de_Prazo_Efetuadas);
//             //log("action.ID: " + action.ID);
//             let ValorAprovacao = item.Fields.Quantidade_de_Extensoes_de_Prazo_Efetuadas + 1;
//             Quantidade_de_Extensoes_de_Prazo_Efetuadas = ValorAprovacao;
            
//             //log("Valor Novo: " + ValorAprovacao);
//         }
//     }
// }