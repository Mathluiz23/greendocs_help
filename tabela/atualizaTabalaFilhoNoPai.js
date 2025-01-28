// código pronto para percorrer todas as linhas da tabela pai e filho
    if (item.Type == "RDO") {
        log("RDO Assunto: " + item.Fields.Assunto_DDS);
    
        // Busca itens referenciados do tipo "CONTRATO > DIÁRIO DE OBRA"
        var itemsReferenced = searchReferencedItems(item, "CONTRATO > DIÁRIO DE OBRA", 2);
    
        // Tabela do filho (RDO)
        var tabelaRDO = item.Fields.Marcos_da_Obra;
        if (!tabelaRDO || tabelaRDO.Rows.length === 0) {
            log("A tabela Marcos_da_Obra no RDO está vazia ou não existe.");
            return;
        }
    
        // Capturar o avanço realizado no filho
        var avancoRealizadoMap = {}; // Mapeia o avanço realizado
        for (var i = 0; i < tabelaRDO.Rows.length; i++) {
            var rowFilho = tabelaRDO.Rows[i].Columns;
            var marcoFilho = rowFilho["Marco_marcos_obra"];
            var avancoRealizado = rowFilho["Avanco_Realizado_"];
    
            if (marcoFilho && avancoRealizado) {
                avancoRealizadoMap[marcoFilho] = avancoRealizado;
            }
        }
    
        // Atualização na tabela do item pai (Contrato)
        for (var j = 0; j < itemsReferenced.length; j++) {
            if (itemsReferenced[j].Type == "CP") {
                log("Entrou no CP");
    
                var tabelaPai = itemsReferenced[j].Fields.Marcos_da_Obra;
                if (!tabelaPai || tabelaPai.Rows.length === 0) {
                    log("A tabela Marcos_da_Obra no item pai está vazia ou não existe.");
                    continue;
                }
    
                for (var k = 0; k < tabelaPai.Rows.length; k++) {
                    var rowPai = tabelaPai.Rows[k].Columns;
                    var marcoPai = rowPai["Marco_marcos_obra"];
    
                    if (avancoRealizadoMap[marcoPai]) {
                        rowPai["Avanco_Realizado_"] = avancoRealizadoMap[marcoPai];
                        log("Atualizado o Avanço Realizado para o Marco: " + marcoPai);
                    }
                }
    
                // Salva as alterações no item pai
                saveItem(itemsReferenced[j]);
            }
        }
    }


    // código inicial apenas acessando o pai

// if(item.Type == "RDO"){
        
    //     log("rdo" + item.Fields.Assunto_DDS);
    //     var itemsReferenced = searchReferencedItems(item, "CONTRATO > DIÁRIO DE OBRA", 2);
        
    //     // tabela filho aqui
        
    //     let tabela_RDO = item.Fields.Marcos_da_Obra;
        
        
    //     for (let i = 0; i < tabelap1.Rows.length; i++) {
    //         let row = tabelap1.Rows[i].Columns;
    //         if (row.Marco_marcos_obra == "row.Marco_marcos_obra (da tabela pai") {
    //             var valorAserPreenchidoNoPai = row.Avanco_Realizado_;
    //         }
    //     }
        
        
        
    //     // tabela pai aqui embaixo
        
    //     for(i=0; i < itemsReferenced.length ; i++) {
    //         if(itemsReferenced[i].Type == "CP" ) {
    //         log("enbtrou no cp");
    //         log(itemsReferenced[i].Type)
             
    //          let tabela = itemsReferenced[i].Fields.Marcos_da_Obra;
             
    //          for (i=0; i < tabela.Rows.length; i++) {
    //              tabela.Rows[i].Columns["Avanco_Realizado_"] = valorAserPreenchidoNoPai;
               
    //              saveItem(itemsReferenced[i]);
    //          }
             
             
    //     }
        
          
    //     }
        
        
     
    
    // }   