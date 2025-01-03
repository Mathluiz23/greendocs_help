
    //Preenche a tabela com as pendências do Order Handling para criação do sub-processo - COTAÇÃO
    if (item.Type == "Item0000"){
        log("entrou");
        
        //insere uma linha vazia na tabela
        item = addTableRow(item, "Order_Handling_Pending_Issues");
            
        //preenche as colunas da linha inserida
        let tabela = item.Fields.Order_Handling_Pending_Issues;
        tabela.Rows[tabela.Rows.length - 1].Columns["processRef"] = 'SP-00001';
        tabela.Rows[tabela.Rows.length - 1].Columns["OH_Pending_Issues"] = 'Customer Quotation Request';
        
        //insere uma linha vazia na tabela
        item = addTableRow(item, "Order_Handling_Pending_Issues");
            
        //preenche as colunas da linha inserida
        tabela = item.Fields.Order_Handling_Pending_Issues;
        tabela.Rows[tabela.Rows.length - 1].Columns["processRef"] = 'SP-00001';
        tabela.Rows[tabela.Rows.length - 1].Columns["OH_Pending_Issues"] = 'Foreign Supplier Quotations';
        
        //insere uma linha vazia na tabela
        item = addTableRow(item, "Order_Handling_Pending_Issues");
            
        //preenche as colunas da linha inserida
        tabela = item.Fields.Order_Handling_Pending_Issues;
        tabela.Rows[tabela.Rows.length - 1].Columns["processRef"] = 'SP-00001';
        tabela.Rows[tabela.Rows.length - 1].Columns["OH_Pending_Issues"] = 'Price Spreadsheet';
        
        //insere uma linha vazia na tabela
        item = addTableRow(item, "Order_Handling_Pending_Issues");
            
        //preenche as colunas da linha inserida
        tabela = item.Fields.Order_Handling_Pending_Issues;
        tabela.Rows[tabela.Rows.length - 1].Columns["processRef"] = 'SP-00001';
        tabela.Rows[tabela.Rows.length - 1].Columns["OH_Pending_Issues"] = 'Proposal Sent to Customer';
    }