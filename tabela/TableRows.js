
if (tabelaOriginal.Rows.length > 0) {
    log('Verificando a tabela original');

    let tabelaAprovados = { Rows: [] };
   
    for (let i = 0; i < tabelaOriginal.Rows.length; i++) {
        let row = tabelaOriginal.Rows[i].Columns;
    

        if (row.Status_aprovacao === 'Aprovado') {
            tabelaAprovados.Rows.push(tabelaOriginal.Rows[i]); 
        }
    }
    if (tabelaAprovados.Rows.length > 0) {
        log('Linhas aprovadas encontradas e adicionadas à nova tabela.');
    } else {
        log('Nenhuma linha aprovada encontrada.');
    }
 } else {
    log('Tabela original está vazia.');
 }