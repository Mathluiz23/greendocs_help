function Item_AfterEditFields(item) {
    if (item.Type == 'GM'){
    
        let tabelap1 = item.Fields.Acoes_Prioridade_1; //Declaração das variaveis auxiliares para receber os campos das tabelas
    
        if (tabelap1){ // Se tabela P1 estiver preenchida com alguma linha entra na condição
            log(tabelap1.Rows.length);
            for(let i = 0; i < tabelap1.Rows.length; i++){ //Percorre a tabela P1 até a ultima linha.
                
                let row = tabelap1.Rows[i].Columns; // percore a coluna da tabela
                // log(row.Area_responsavel_ap1 + ' ' + row.Descricao_da_acao_ap1 + ' ' + row.Responsavel_pela_acao_ap1 + ' ' + row.Prazo_ap1);
                
                
                if(row.Area_responsavel_ap1) {
                    log('coluna 1')
                    item.Fields.Acoes_P1_aplicavel = 'Sim';
                    break;
                }
                if(row.Descricao_da_acao_ap1) {
                    log('coluna 2')
                    item.Fields.Acoes_P1_aplicavel = 'Sim';
                    break;
                }
                if(row.Responsavel_pela_acao_ap1) {
                    log('coluna 3')
                    item.Fields.Acoes_P1_aplicavel = 'Sim';
                    break;
                }
                if(row.Prazo_ap1) {
                    log('coluna 4')
                    item.Fields.Acoes_P1_aplicavel = 'Sim';
                    break;
                }
            }
        } else {
            item.Fields.Acoes_P1_aplicavel = 'Não';
        }
    
        log(item.Fields.Acoes_P1_aplicavel);
    }
}