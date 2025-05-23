function Item_AfterCreate(item) {
    commit(false);
    
    if(item.Type == "QLT") {
        commit(true);
        log("entro pra preencher doc quality");
        const docMappings = {
            "Ensaio de Dureza":["RPT - Report", "Test Report", "Hardness Test"],
            "Ensaio de Tração":["RPT - Report", "Test Report", "Tensile Test"],
            "Ensaio de Impacto":["RPT - Report", "Test Report", "Impact Test"],
            "Ensaio de Flexão":["RPT - Report", "Test Report", "Bend Test"],
            "Ensaio de Torção":["RPT - Report", "Test Report", "Torsion Test"],
            "Ensaio de Fadiga":["RPT - Report", "Test Report", "Fatigue Test"],
            "Certificado de Análise Química":["QLT - Quality Documentation", "Certificate of Conformity", "Certificate of Chemical Analysis"],
            "Laudo Metalográfico":["RPT - Report", "Technical Report", "Metallographic Report"],
            "Ensaio de Corrosão":["RPT - Report", "Test Report", "Corrosion Test"],
            "Ensaio de Líquido Penetrante":["RPT - Report", "Test Report", "Liquid Penetrant Test"],
            "Ensaio de Partículas Magnéticas":["RPT - Report", "Test Report", "Magnetic Particle Test Report"],
            "Ensaio de Ultrassom":["RPT - Report", "Test Report", "Ultrasound Test"],
            "Ensaio de Visual de Solda":["RPT - Report", "Test Report", "Welding Visual Test"],
            "Ensaio por Radiografia":["RPT - Report", "Test Report", "Radiographic Test"],
            "Teste de Estanqueidade":["RPT - Report", "Test Report", "Sealing Test"],
            "Certificado de Calibração de Instrumentos":["QLT - Quality Documentation", "Certificate of Conformity", "Instrument Calibration Certificate"],
            "Relatório de Controle Dimensional":["RPT - Report", "Technical Report", "Dimensional Control Report", "For Information"],
            "Certificado de Origem do Material":["QLT - Quality Documentation", "Material Certificates", "Certificate of Material Origin"],
            "Certificado de Tratamento Térmico":["QLT - Quality Documentation", "Certificate of Conformity", "Heat Treatment Certificate"],
            "Certificado de Pintura / Revestimento":["QLT - Quality Documentation", "Certificate of Conformity", "Painting or Coating Certificate"],
            "Relatório de Medição do Teor de Ferrita":["RPT - Report", "Technical Report", "Ferrite Content Measurement Report", "For Information"],
            "Relatório de Teste Hidrostático":["RPT - Report", "Test Report", "Hydrostatic Test Report", "For Information"],
            "Relatório de Inspeção Dimensional de Usinagem":["RPT - Report", "Inspection Report", "Dimensional Inspection Report for Machining", "For Information"],
            "Relatório de Inspeção Dimensional de Caldeiraria":["RPT - Report", "Inspection Report", "Dimensional Inspection Report for Boiler Manufacturing", "For Information"],
            "Relatório de Inspeção por Phased Array":["RPT - Report", "Inspection Report", "Phased Array Inspection Report", "For Information"],
            "Anotação de Responsabilidade Técnica":["LEG - Legal/Permit", "", "Technical Responsibility Annotation", "For Information", "V - Legal", ""],
            "Plano de Inspeção e Testes":["QLT - Quality Documentation", "Quality and Inspection Plan", "Inspection and Test Plan", null, null, "Quality Control"],
            "Data Book Fabricação":["DBO - Data Book", "", "Manufacturing Data Book"],
            "Relatório de Inspeção de Recebimento":["RPT - Report", "Inspection Report", "Receiving Inspection Report", "For Information"],
            "Relatório de Não Conformidade":["QLT - Quality Documentation", "NCR", "Non-Conformity Report", "For Information"],
            "Relatório de Balanceamento Estático":["RPT - Report", "Technical Report", "Static Balancing Report", "For Information"],
            "Relatório de Balanceamento Dinâmico":["RPT - Report", "Technical Report", "Dynamic Balancing Report", "For Information"]
        };
    
        let docType = item.Fields.Quality_Document_SubType;
        let mapping = docMappings[docType];
        
        if (mapping) {
            
            log("mapping " + mapping);
            
            item.Fields.Document_Type = mapping[0];
            item.Fields.Document_Subtype = mapping[1];
            
            let itemDesc = item.Fields.Item_Description;
            item.Fields.Title_Local_Language = docType + " " + itemDesc;
            item.Fields.Title_in_English = mapping[2] + (itemDesc ? " of " + itemDesc : "");
            
            // Valores padrão
            item.Fields.Discipline = mapping[4] || "Q - Quality";
            item.Fields.SubDiscipline = mapping[5] || "Quality Record";
            item.Fields.Status = "Certified";
            item.Fields.Purpose_When_Received = mapping[3] || "For Certified Acceptance";
            item.Fields.Work_Phase = "Common";
        }
        
        if(item.Fields.Responsible == "IM - Imported (Order Handling)") {
            item.Fields.Sender_Company = "ABL";
            item.Fields.SubSupplier = "ABL";
            item.Fields.Author = "ABL";
        }
    }
    
    
//   if(item.Type == "OHPI") {
//     log("entrou aqui OHPI")
        
//     if(item.Fields.OH_Pending_Type == "Quotation") {

//           const docMappings = {
//              // Mapeamento principal: [Document_Type,Title_in_English]
//             "Customer Quotation Request": ["CRR - Correspondence", "Customer Quotation Request"],
//             "Foreign Supplier Quotations": ["CRR - Correspondence", "Foreign Supplier Quotations"],
//             "Price Spreadsheet": ["CDC - Pricing", "Price Spreadsheet"],
//             "Proposal Sent to Customer": ["CDO - Contractual/Legal Documentation", "Proposal Sent to Customer"]
//         };
           
//         switch(item.Fields.OH_Pending_Issues) {
//             case "Customer Quotation Request":
//                 item.Fields.Document_Type = "CRR - Correspondence";
//                 item.Fields.Document_Subtype = "Letter";
//                 item.Fields.SubSupplier = "ABL"; // customer do item
//                 item.Fields.Author = "ABL"; // customer do item
//                 log("1")
//                 break;
//             case "Foreign Supplier Quotations":
//                 item.Fields.Document_Type = "CRR - Correspondence";
//                 item.Fields.Document_Subtype = "Quotation of supplier";
//                 log("2")
//                 break;
//             case "Price Spreadsheet":
//                 item.Fields.Document_Type = "CDC - Pricing";
//                 item.Fields.Document_Subtype = "Calculation Sales Price";
//                 log("3")
//                 break;
//             case "Proposal Sent to Customer":
//                 item.Fields.Document_Type = "CDO - Contractual/Legal Documentation";
//                 item.Fields.Document_Subtype = "Binding Proposal";
//                 log("3")
//                 break;
//             default:
//                 break;
//         }

        
     
//         if(item.Fields.Quotation_Description !== null && item.Fields.Quotation_Description !== "") {
//             var itemDesc = item.Fields.Quotation_Description;
//         } else {
//             var itemDesc = item.Fields.Item_Description || "";
//         }

//         var docType = item.Fields.Document_Type;
//         var mapping = docMappings[docType];



//         item.Fields.Title_Local_Language = docType + " " + itemDesc;
//         item.Fields.Title_in_English = mapping[1] + (itemDesc ? " of " + itemDesc : "");
        
//         // Valores padrão
//         item.Fields.Discipline = "O - Commercial";
//         item.Fields.Status = "Certified";
//         item.Fields.Purpose_When_Received = "For Information";
//         item.Fields.Work_Phase = "Common";
    
//         item.Fields.Sender_Company = "ABL";
//         item.Fields.SubSupplier = "ABL";
//         item.Fields.Author = "ABL";
//     }
     
// }
    
    
    if(item.Type == "QLT") {
        item.Fields.Document_Type_AUX = item.Fields.Document_Type;
    }
    
    if (item.Type == "TRA"){
        log("Prop deliv date: " + item.Fields.Proposal_Delivery_Date);
        log("company: " + item.Fields.Company_Name);
        log("emission: " + item.Fields.Emission_Group);
        
        // Para tentar corrigir notificação
        item.Fields.Company_Name_Aux_View =  item.Fields.Company_Name;
        
        commit(true);
    }
    
    
    // REBUILD
    if (item.Type == "RE"){
        item.Fields.Rebuild = item.Name;
        item.Fields.Type_of_Operation = "Rebuild";
        commit(true);
    }
    
    // UPGRADE
    if (item.Type == "UP"){
        item.Fields.Upgrade = item.Name;
        item.Fields.Type_of_Operation = "Upgrade";
        commit(true);
    }
    
    
    if (item.Type == "PLI"){
        log("Name " + item.Name);
        log("PL " + item.Fields.Price_List);
        
        if (item.Name.length == 4){
            item.Name = item.Fields.Price_List + "-" + item.Name;
            
        }
        
        
        // apenas para teste da exportação do metadado moeda que exporta com R$, APAGAR DEPOIS:
        item.Fields.Unit_Value_MOEDA = item.Fields.Unit_Value;
        // -----------------------------------------------------------------------------------
        commit(true);
    }
    
    if(item.Type == "PL" || item.Type == "PLI") {
        commit(true);
        
        // log("1 - " + item.Type);
        // log("2 - " + item.Fields.Product_Group_PL);
        // PES/PEW - PKF - PKR - PKW
        let productGroup = item.Fields.Product_Group_PL;
        
        switch (productGroup) {
            case 'PES/PEW':
                item.Fields.Responsible_Price_List = ['PEW Cleaner','PEW Filter Plates','PEW HC Plates','PEW LC Plates','PEW MDF Plates','PEW-SC',
                'PES Dewat','PES HC Refiner','PES LC Refiner','PES MDF Refiner','PES Paperchine Service','PES Paper Service'];
                // APÓS TESTES RETIRAR W3K DO ARRAY 
                break;
            
            case 'PKF':
                item.Fields.Responsible_Price_List = ['PKF Cooking','PKF Fiberline','PKF Drying'];
                // APÓS TESTES RETIRAR W3K DO ARRAY 
                break;
                
            case 'PKR':
                item.Fields.Responsible_Price_List = ['PKR Evaporation','PKR Power Boilers','PKR Recovery Boilers','PKR White Liquor Plant'];
                // APÓS TESTES RETIRAR W3K DO ARRAY 
                break;
                
            case 'PKW':
                item.Fields.Responsible_Price_List = ['PKW Knife Systems','PKW Knife Systems BP','PKW Wood'];
                // APÓS TESTES RETIRAR W3K DO ARRAY 
                break;
    
            default:
                break;
        }
    }
    
    if (item.Type == "PL"){
        item.Fields.Price_List = item.Name;
        commit(true);
    }
    
    if (item.Type == "TRA"){
        item.Fields.Destination_Type = "Services Emission Group";
        commit(true);
    }
    
    
    // ------------------------------------------------------------------------------------------------------------------------------------------------//
    
    // let tabela = item.Fields.Suppliers;
    // tabela.Rows[0].Columns['Emission_Group'];
        
        
    if (item.Type == "TP"){
        commit(true);
        let spareParts = item.Fields.processRef;
        let fornecedor = item.Fields.Company_Name;
        //let fornecedor = item.Fields.Company_Name_Aux;
        // let fornecedor = "TESTE01"
        let pkg = item.Fields.Package;
        
        log("FORNECEDOR  TECNICA PROPOSTA:" + fornecedor)
        
        log("pkg TP " + pkg)
        if(pkg !== 'Único' && pkg !== null) {
            item.Name = spareParts + "-" + pkg + "-" + fornecedor + "-Technical Proposal";

        } else {
            item.Name = spareParts + "-" + fornecedor + "-Technical Proposal";
        }
        
        item.Fields.Emission_Group_Aux_View = item.Fields.Emission_Group;
        item.Fields.Company_Name_Aux_View = item.Fields.Company_Name;
    }
    
    if (item.Type == "CP"){
        commit(true);
        let spareParts = item.Fields.processRef;
        //let fornecedor = item.Fields.Company_Name_Aux;
        let fornecedor = item.Fields.Company_Name;
        let pkg = item.Fields.Package;
        
        log("FORNECEDOR auxiliar COMERCIAL PROPOSTA:" + fornecedor)
        
        if(fornecedor === null) {
            fornecedor = item.Fields.Company_Name;
            log("FORNECEDOR COMERCIAL PROPOSTA:" + fornecedor)
        }
        
        log("pkg CP " + pkg)
        if(pkg !== 'Único' && pkg !== null) {
            item.Name = spareParts + "-" + pkg + "-" + fornecedor + "-Commercial Proposal";
        
        } else {
            item.Name = spareParts + "-" + fornecedor + "-Commercial Proposal";
      
        }
        
        item.Fields.Emission_Group_Aux_View = item.Fields.Emission_Group;
        item.Fields.Company_Name_Aux_View = item.Fields.Company_Name;
    }
    
     // ------------------------------------------------------------------------------------------------------------------------------------------------//
    
    if (item.Type == "CTP"){
        commit(true);
        item.Fields.Proposal_Status = "In Progress";
        let spareParts = item.Fields.processRef;
        //let fornecedor = item.Fields.Company_Name_Aux;
        let fornecedor = item.Fields.Company_Name;
        let pkg = item.Fields.Package;
        
        log("FORNECEDOR  " + fornecedor)
        
        if(fornecedor === null || fornecedor === undefined) {
            fornecedor = item.Fields.Company_Name;
            log("FORNECEDOR  NO IF" + fornecedor)
        }
        
        log("pkg CP " + pkg)
        if(pkg !== 'Único' && pkg !== null && pkg !== undefined) {
            item.Name = spareParts + "-" + pkg + "-" + fornecedor + "-Commercial-Technical Proposal";
        
        } else {
            item.Name = spareParts + "-" + fornecedor + "-Commercial-Technical Proposal";
      
        }
        
        item.Fields.Emission_Group_Aux_View = item.Fields.Emission_Group;
        item.Fields.Company_Name_Aux_View = item.Fields.Company_Name;
    // }
    
    
    // --------------------------------------------------------------------------------------------------
    
    // if(item.Type == "CTP") {
        log("entro pra preencher ctp");
        //       0               1               2                3                    4
        // [Document_Type, Document_Subtype, Discipline, Title_Local_Language, Title_in_English]
        const docMappings = {
            "Proposta Técnica/Comercial":["CDO - Contractual/Legal", "Binding Proposal", "O - Commercial", 
            "Proposta Comercial /Técnica", "Commercial/Technical Proposal"],
        };
    
        let mapping = docMappings["Proposta Técnica/Comercial"];
  
        log("mapping " + mapping);
        let itemDesc = item.Fields.Item_Description;
        
        log("Item desc: " + item.Fields.Item_Description);
        
        item.Fields.Document_Type = mapping[0];
        item.Fields.Document_Subtype = mapping[1];
        
        item.Fields.Discipline = mapping[2];
        item.Fields.Title_Local_Language = mapping[3] + " " + itemDesc;
        item.Fields.Title_in_English = mapping[4] + " of " + itemDesc;
        
        item.Fields.Status = "N/A (Not Applicable)";
        item.Fields.Purpose_When_Received = "For Archive";
        item.Fields.Work_Phase = "Common";

        //Busca o Short Name na Company
        
        let companyName =  item.Fields.Company_Name;
        
        var username = "api@greendocs.net";
        var password = "uGMguhRZWBakNpBrEKP";
        var encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));
        
        var endereco = "https://abl02.greendocs.net/api/v2/items?Projeto=3&camposPesquisa={'Company_Name':'" + companyName + "'}&idTipoitem=8&retornaMetadados=1";
        var result = callWebService(endereco, "Basic " + encoded, "GET", "application/json", null, [], 0);
        log("Result " + result);
    
        var data = JSON.parse(result);
        
        if (data.length > 0) {
            item.Fields.Sender_Company = data[0].Short_Name;
            item.Fields.SubSupplier = data[0].Short_Name;
            item.Fields.Author = data[0].Short_Name;
        } else {
            log("Nenhum resultado encontrado.");
        }
        
        // fazer isso aqui ou no after upload, sendo que no after upload a company não irá mudar ? 
        // NÃO ESTA FUNCIONANDO POIS NOS CAMPOS PRECISA COLOCAR O SHORTNAME E NÃO A COMPANY
        
        
           
    }
    
    
    // ------------------------------------------------
    
    
    

    
    if (item.Type == "SPI"){
        commit(true);
        item.Fields.Product_Group_Export = item.Fields.Product_Group;
        
        // Upadate Product Group - metadado aux para verificar se houve alteração 
        
        item.Fields.Product_Group_AUX = item.Fields.Product_Group;
        
        item.Fields.Product_Group_PL_Item = item.Fields.Product_Group.substr(0,3);
    }
    
    if (item.Type == "SP"){
        commit(true);
        item.Fields.processRef = item.Name;
        item.Fields.Type_of_Operation = "Spare Parts";
        
    }
    
    // Veirifcar se item já foi dividido em pacotes
    if(item.Type == "SPI") {
        if(item.Fields.Package !== null) {
            commit(true);
            item.Fields.isPkg = "Yes"
        }
    }
    
    
    if(item.Type == 'SPI' || item.Type == 'SP') {
        // log("loga o tipo de item" + item.Type);
    
        let group = getGroupByID(20571);
        //log('id do grupo' + group)
        
        let userId = User.ID;
        //log('user id' + userId)
        
        for (let i = 0; i < group.Users.length; i++) {
            let userInfoGroup = group.Users[i].ID;
            //log('ID do usuário no grupo: ' + userInfoGroup);
            
            if (userId == userInfoGroup) {
                userIsInGroup = true;
                break;
            } else {
                userIsInGroup = false;
            }
        }
        
        if (userIsInGroup) {
            commit(true);
            //log('O usuário pertence ao grupo.');
            item.Fields.Budget_Creator = 'Order Handling';
            // log(item.Fields.Budget_Creator);
        } else {
            //log('O usuário NÃO pertence ao grupo.');
            commit(true);
            item.Fields.Budget_Creator = 'EGP';
            // log(item.Fields.Budget_Creator);
        }
    }
    
}