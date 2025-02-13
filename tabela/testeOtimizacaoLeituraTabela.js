function Item_AfterEditFields(item) {
    if (item.Type === 'GM') {
        [{ table: item.Fields.Acoes_Prioridade_1, field: 'Acoes_P1_aplicavel', columns: ['Area_responsavel_ap1', 'Descricao_da_acao_ap1', 'Responsavel_pela_acao_ap1', 'Prazo_ap1'] },
         { table: item.Fields.Acoes_Prioridade_3, field: 'Acoes_P3_sao_aplicaveis', columns: ['Area_responsavel_ap3', 'Descricao_da_acao_ap3', 'Responsavel_pela_acao_ap3', 'Prazo_ap3'] }
        ].forEach(function(tableInfo) {
            var table = tableInfo.table || { Rows: [] },
                field = tableInfo.field,
                columns = tableInfo.columns;

            item.Fields[field] = table.Rows.length ? 'Não' : item.Fields[field];

            for (var i = 0; i < table.Rows.length; i++) {
                var row = table.Rows[i].Columns, isApplicable = false;
                for (var j = 0; j < columns.length; j++) {
                    if (row[columns[j]]) {
                        isApplicable = true;
                        break;
                    }
                }
                if (isApplicable) {
                    item.Fields[field] = 'Sim';
                    break;
                }
            }
        });
    }
}

//  teste

function simulateTest() {
    var item = {
        Type: 'GM',
        Fields: {
            Acoes_Prioridade_1: {
                Rows: [
                    { Columns: { Area_responsavel_ap1: '', Descricao_da_acao_ap1: '', Responsavel_pela_acao_ap1: '', Prazo_ap1: '' } },
                    { Columns: { Area_responsavel_ap1: 'Setor A', Descricao_da_acao_ap1: '', Responsavel_pela_acao_ap1: '', Prazo_ap1: '' } }
                ]
            },
            Acoes_Prioridade_3: {
                Rows: [
                    { Columns: { Area_responsavel_ap3: '', Descricao_da_acao_ap3: '', Responsavel_pela_acao_ap3: '', Prazo_ap3: '' } }
                ]
            }
        }
    };

    Item_AfterEditFields(item);

    console.log("Acoes_P1_aplicavel:", item.Fields.Acoes_P1_aplicavel);
    console.log("Acoes_P3_sao_aplicaveis:", item.Fields.Acoes_P3_sao_aplicaveis);
}

simulateTest();

