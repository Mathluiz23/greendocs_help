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