// TESTE ANALISE E CONSOLIDAÇÃO DAS REVISÕES

// Verifica se o tipo do item é "GM"
if (item.Type == 'GM') {
    log("entrei no item GM"); // Loga que o item é do tipo "GM"

    // Função para formatar a data no formato "dd/mm/aaaa"
    let formatDate = function (date) {
        let data = new Date(date);

        // Obtém o dia, mês e ano da data
        let dia = data.getDate();
        let mes = data.getMonth() + 1; // Os meses são indexados a partir de 0
        let ano = data.getFullYear();

        // Adiciona um zero à esquerda se o dia ou mês for menor que 10
        dia = dia < 10 ? "0" + dia : dia;
        mes = mes < 10 ? "0" + mes : mes;

        // Retorna a data formatada como "dd/mm/aaaa"
        return dia + "/" + mes + "/" + ano;
    };

    // Obtém a data atual formatada
    let dataAtual = formatDate(new Date());
    log(dataAtual); // Loga a data atual formatada para conferência

    // Obtém a tabela "Acoes_Prioridade_1" do item
    let tabelap1 = item.Fields.Acoes_Prioridade_1;

    // Verifica se a tabela possui pelo menos uma linha
    if (tabelap1.Rows.length > 0) {
        log('if percorrer tabela'); // Loga que a tabela será percorrida

        // Itera pelas linhas da tabela
        for (let i = 0; i < tabelap1.Rows.length; i++) {
            // Obtém as colunas de cada linha da tabela
            let row = tabelap1.Rows[i].Columns;

            // Verifica se o prazo (coluna "Prazo_ap1") é anterior à data atual
            if (row.Prazo_ap1 < dataAtual) {
                log(row.Prazo_ap1); // Loga o prazo vencido

                // Exibe uma mensagem informando que o prazo está vencido
                showMessage('O prazo está vencido');
            }
        }
    }
}
