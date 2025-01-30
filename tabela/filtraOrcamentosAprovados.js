// Cria Uuma nova tabela apenas com os orçamentos aprovados

var TabelaOriginal = item.Fields.Tabela_de_Fornecedores;

            var OrcamentosAprovados = item.Fields.Tabela_de_Fornecedores_Apv;
            for (var i = 0; i < TabelaOriginal.Rows.length; i++) {
                log("entrou no log do for da tabela");
                
                if (TabelaOriginal.Rows[i].Columns ["Conclusao_da_Cotacao"] === "Cotação Aprovada"){
                
                addTableRow(item, "Tabela_de_Fornecedores_Apv");
                OrcamentosAprovados = item.Fields.Tabela_de_Fornecedores_Apv;
                log("Informações das tabelas:")
                log(TabelaOriginal.Rows[i].Columns["Tabela_de_Fornecedores_Apv"]);
                // log(TabelaProcesso.Rows.length);
                // log(TabelaProcesso.Rows.length - 1);
 
                OrcamentosAprovados.Rows[OrcamentosAprovados.Rows.length - 1].Columns["Fornecedor"] = TabelaOriginal.Rows[i].Columns["Fornecedor"];
                OrcamentosAprovados.Rows[OrcamentosAprovados.Rows.length - 1].Columns["Data_da_Compra"] = TabelaOriginal.Rows[i].Columns["Data_da_Compra"];
                OrcamentosAprovados.Rows[OrcamentosAprovados.Rows.length - 1].Columns["Condicao_de_Pagamento"] = TabelaOriginal.Rows[i].Columns["Condicao_de_Pagamento"];
                OrcamentosAprovados.Rows[OrcamentosAprovados.Rows.length - 1].Columns["Condicao_de_Frete"] = TabelaOriginal.Rows[i].Columns["Condicao_de_Frete"];
                OrcamentosAprovados.Rows[OrcamentosAprovados.Rows.length - 1].Columns["Conclusao_da_Cotacao"] = TabelaOriginal.Rows[i].Columns["Conclusao_da_Cotacao"];
            }
 
            

    }


    // função otimizada 

    var TabelaOriginal = item.Fields.Tabela_de_Fornecedores;
var OrcamentosAprovados = item.Fields.Tabela_de_Fornecedores_Apv;

for (var i = 0; i < TabelaOriginal.Rows.length; i++) {
    log("Verificando orçamento na linha " + i);

    if (TabelaOriginal.Rows[i].Columns["Conclusao_da_Cotacao"] === "Cotação Aprovada") {
        log("Cotação aprovada encontrada, adicionando nova linha...");

        // Adiciona nova linha à tabela de orçamentos aprovados
        addTableRow(item, "Tabela_de_Fornecedores_Apv");

        // Obtém a referência da última linha adicionada
        var novaLinha = OrcamentosAprovados.Rows[OrcamentosAprovados.Rows.length - 1];

        // Copia os valores das colunas relevantes
        var colunas = ["Fornecedor", "Data_da_Compra", "Condicao_de_Pagamento", "Condicao_de_Frete", "Conclusao_da_Cotacao"];
        for (var j = 0; j < colunas.length; j++) {
            novaLinha.Columns[colunas[j]] = TabelaOriginal.Rows[i].Columns[colunas[j]];
        }

        log("Linha adicionada com sucesso.");
    }
}
