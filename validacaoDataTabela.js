 // TESTE ANALISE E CONSOLIDAÇÃO DAS REVISÕES
    
 if (item.Type == 'GM') {
    log("entrei no item GM")
    let formatDate = function (date) {
    let data = new Date(date);
    // Formata a data para o formato "dd/mm/aaaa"
    let dia = data.getDate();
    let mes = data.getMonth() + 1; // Os meses são indexados a partir de 0
    let ano = data.getFullYear();
    // Adiciona um zero à esquerda se o dia ou mês for menor que 10
  
    dia = dia < 10 ? "0" + dia : dia;
    mes = mes < 10 ? "0" + mes : mes;
  
    // Retorna a data formatada
    return dia + "/" + mes + "/" + ano;
  };
  
  let dataAtual = formatDate( new Date());
  log(dataAtual);

let tabelap1 = item.Fields.Acoes_Prioridade_1;
    
    if (tabelap1.Rows.length > 0) {
        log('if percorrer tabela')
        for (let i = 0; i < tabelap1.Rows.length; i++) {
            let row = tabelap1.Rows[i].Columns;
            if (row.Prazo_ap1 < dataAtual) {
                log(row.Prazo_ap1);
                showMessage('eai doidão, prazo ta vencido');
            }
        }
    }
}

