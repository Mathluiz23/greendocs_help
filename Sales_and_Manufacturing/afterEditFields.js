function Item_AfterEditFields(item) {
    
    if(item.Type == 'SPI') {
        let defaultDeliveryDate = item.Fields.Default_Delivery_Date;
        let suppliersTable = item.Fields.Suppliers_NI;
        
        if (suppliersTable !== null && suppliersTable !== undefined && suppliersTable !== '') {
            for (var k = 0; k < suppliersTable.Rows.length; k++) {
                log("teste " + suppliersTable.Rows.length)
                
                var row = suppliersTable.Rows[k].Columns;
                if (row["Proposal_Delivery_Date"] === '') {
                    row["Proposal_Delivery_Date"] = defaultDeliveryDate;
                }
                log(row["Proposal_Delivery_Date"]);
            }
        } else {
            log("TABELA NAO EXISTE")
        }
    }
    
    if(item.Type == "QLT") {
        item.Fields.Document_Type_AUX = item.Fields.Document_Type;
    }
     
    
    // log("entrou")
    
    // if (item.Type == 'Item'){
    //     let tabela = item.Fields.Quality_Table_Cover_EXCLUIR;
    //     let tabela2 = tabela.Rows[0].Columns["Copy_Date_to_the_Proposals"];
        
    //     log("002: " + tabela.Rows.length)
    //     if(tabela.Rows.length > 1) {
    //         abort("permitido apenas 1 checkbox")
    //     }
        
    //     log("001: " + tabela2)
    // }
    
    
    if (item.Type == 'SPI'){
        // item.Fields.Product_Group_Approver = item.Fields.Product_Group;
        item.Fields.Product_Group_Export = item.Fields.Product_Group;
        
        item.Fields.Product_Group_PL_Item = item.Fields.Product_Group.substr(0,3);
    }
    
    if (item.Type == "QLT"){
        item.Fields.Delivery_Deadline_AUX = item.Fields.Delivery_Deadline;
    }
    
    if (item.Type == 'SPI'){
        let tabelaNI = item.Fields.Suppliers_NI;
        
        let copyDate =  item.Fields.Default_Delivery_Date;
        
        // log("CHECKBOX :" + item.Fields.Copy_Date_to_the_Proposals);
        
        // log("2" + item.Fields.Product_Group)
        
        if(item.Fields.Copy_Date_to_the_Proposals) {
             for (var j = 0; j < tabelaNI.Rows.length; j++) {
                if (tabelaNI.Rows[j].Columns["Proposal_Delivery_Date"] === ''){
                    tabelaNI.Rows[j].Columns["Proposal_Delivery_Date"] = copyDate;
                }
            }
        }
        
        // atualiza responsavel OH via batch Action
        if(item.Fields.Responsible_Order_Handling_Activity !== item.Fields.Responsible_Order_Handling) {
            item.Fields.Responsible_Order_Handling_Activity = item.Fields.Responsible_Order_Handling;
        }
        
    }
    
}