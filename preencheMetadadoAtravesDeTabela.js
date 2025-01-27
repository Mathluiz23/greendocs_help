function Item_AfterEditFields(item) {
    // Verifica se o tipo do item é "GM"
    if (item.Type == 'GM') {
        // Obtém as tabelas "Acoes_Prioridade_1" e "Acoes_Prioridade_3"
        let tabelap1 = item.Fields.Acoes_Prioridade_1;
        let tabelap3 = item.Fields.Acoes_Prioridade_3;

        // Se a tabela "Acoes_Prioridade_1" não existir, define o valor como 0
        // e marca o campo "Acoes_P1_aplicavel" como "Não"
        if (!tabelap1) {
            tabelap1 = 0;
            item.Fields.Acoes_P1_aplicavel = 'Não';
        }

        // Se a tabela "Acoes_Prioridade_3" não existir, define o valor como 0
        // e marca o campo "Acoes_P3_sao_aplicaveis" como "Não"
        if (!tabelap3) {
            tabelap3 = 0;
            item.Fields.Acoes_P3_sao_aplicaveis = 'Não';
        }

        // Verifica se a tabela "Acoes_Prioridade_1" possui linhas
        if (tabelap1.Rows.length > 0) {
            log('if tabela p1'); // Loga que está verificando a tabela P1
            for (let i = 0; i < tabelap1.Rows.length; i++) {
                let row = tabelap1.Rows[i].Columns;

                // Verifica se ao menos um dos campos da linha contém dados
                if (row.Area_responsavel_ap1 || row.Descricao_da_acao_ap1 || row.Responsavel_pela_acao_ap1 || row.Prazo_ap1) {
                    item.Fields.Acoes_P1_aplicavel = 'Sim'; // Marca P1 como aplicável
                    break; // Sai do loop assim que encontrar uma linha válida
                }
            }
        }

        // Verifica se a tabela "Acoes_Prioridade_3" possui linhas
        if (tabelap3.Rows.length > 0) {
            log('if tabela p3'); // Loga que está verificando a tabela P3
            for (let i = 0; i < tabelap3.Rows.length; i++) {
                let row = tabelap3.Rows[i].Columns;

                // Verifica se ao menos um dos campos da linha contém dados
                if (row.Area_responsavel_ap3 || row.Descricao_da_acao_ap3 || row.Responsavel_pela_acao_ap3 || row.Prazo_ap3) {
                    item.Fields.Acoes_P3_sao_aplicaveis = 'Sim'; // Marca P3 como aplicável
                    break; // Sai do loop assim que encontrar uma linha válida
                }
            }
        }
    }
}


// código antes da refatoração

// function Item_AfterEditFields(item) {
//     if (item.Type == 'GM'){
    
//         let tabelap1 = item.Fields.Acoes_Prioridade_1; //Declaração das variaveis auxiliares para receber os campos das tabelas
    
//         if (tabelap1){ // Se tabela P1 estiver preenchida com alguma linha entra na condição
//             log(tabelap1.Rows.length);
//             for(let i = 0; i < tabelap1.Rows.length; i++){ //Percorre a tabela P1 até a ultima linha.
                
//                 let row = tabelap1.Rows[i].Columns; // percore a coluna da tabela
//                 // log(row.Area_responsavel_ap1 + ' ' + row.Descricao_da_acao_ap1 + ' ' + row.Responsavel_pela_acao_ap1 + ' ' + row.Prazo_ap1);
                
                
//                 if(row.Area_responsavel_ap1) {
//                     log('coluna 1')
//                     item.Fields.Acoes_P1_aplicavel = 'Sim';
//                     break;
//                 }
//                 if(row.Descricao_da_acao_ap1) {
//                     log('coluna 2')
//                     item.Fields.Acoes_P1_aplicavel = 'Sim';
//                     break;
//                 }
//                 if(row.Responsavel_pela_acao_ap1) {
//                     log('coluna 3')
//                     item.Fields.Acoes_P1_aplicavel = 'Sim';
//                     break;
//                 }
//                 if(row.Prazo_ap1) {
//                     log('coluna 4')
//                     item.Fields.Acoes_P1_aplicavel = 'Sim';
//                     break;
//                 }
//             }
//         } else {
//             item.Fields.Acoes_P1_aplicavel = 'Não';
//         }
    
//         log(item.Fields.Acoes_P1_aplicavel);
//     }
// }