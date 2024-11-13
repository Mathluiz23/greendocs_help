function Item_AfterEditFields(item) {
    if (item.Type === 'GM') {
        const tabelap1 = item.Fields.Acoes_Prioridade_1;

        // Verifica se a tabela P1 está preenchida e possui linhas
        if (tabelap1 && tabelap1.Rows.some(row => {
            const columns = row.Columns;
            return columns.Area_responsavel_ap1 || columns.Descricao_da_acao_ap1 || 
                   columns.Responsavel_pela_acao_ap1 || columns.Prazo_ap1;
        })) {
            item.Fields.Acoes_P1_aplicavel = 'Sim';
        } else {
            item.Fields.Acoes_P1_aplicavel = 'Não';
        }

        log(item.Fields.Acoes_P1_aplicavel);
    }
}
