function Reference_Create(item) {
    
    log("Item " + item.Type);
    log("Ref " + reference.Type);
    
    
    if (item.Type == "MICM" && reference.Type == "Customer"){  // 07/05/2025 COPIADO DO ABL02
        reference.Fields.Customer_Name_ = reference.Fields.SAP_ID_Mill_Code + " - " + reference.Name;
        saveItem(reference);
    }
    
    if (item.Type == "MIC" && reference.Type == "Contacts"){   // 07/05/2025 COPIADO DO ABL02
        if (reference.Fields.Customer !== ""){
            reference.Fields.User_Type = "Customer";
        } else {
            reference.Fields.User_Type = "Company";
        }
        saveItem(reference);
    }
    
    
    if (item.Type == 'Company'  && reference.Type == "Contacts") {
        reference.Fields.Company_Name = item.Fields.Company_Name;
        reference.Fields.Short_Name = item.Fields.Short_Name;
        saveItem(reference);
    }
    
    
    if (item.Type == 'Customer'  && reference.Type == "Contacts") { // 07/05/2025 COPIADO DO ABL02
        reference.Fields.Customer_Name_ = item.Fields.Customer_Name_;
        reference.Fields.Short_Name_Customer = item.Fields.Short_Name_Customer;
        saveItem(reference);
    }
    
    
    if (item.Type == "Group" && reference.Type == "Contacts"){
        // basic setup da comunicação API
        let username = "api@greendocs.net";
        let password = "uGMguhRZWBakNpBrEKP";
        let encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));
        let servidor = GlobalServerURL;
        
        let body = {};
        body.Grupos = [];
        body.Grupos.push(item.Name);
        
        let endereco = servidor + "/api/v2/users/" + reference.Fields.Contact_Email + "/groups";
        let resultado = callWebService(endereco, "Basic " + encoded, "POST", "application/json", JSON.stringify(body), []);
    }
    
    
    //cria o vínculo dos contatos no grupo na config para COMPANIES
    if (item.Type == "Company" && reference.Type == "Contacts"){
        let username = "api@greendocs.net";
        let password = "uGMguhRZWBakNpBrEKP";
        let encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));
        let servidor = GlobalServerURL;
        
        let body = {};
        body.Grupos = [];
        body.Grupos.push(item.Fields.Short_Name);
        
        let endereco = servidor + "/api/v2/users/" + reference.Fields.Contact_Email + "/groups";
        let resultado = callWebService(endereco, "Basic " + encoded, "POST", "application/json", JSON.stringify(body), []);
    }
    
    
    
    if (item.Type == "Customer" && reference.Type == "Contacts"){  // 07/05/2025
        let username = "api@greendocs.net";
        let password = "uGMguhRZWBakNpBrEKP";
        let encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));
        let servidor = GlobalServerURL;
     
                
        var body = {};
        body.Grupos = [];
        body.Grupos.push(reference.Fields.Short_Name_Customer);
        
        
        var endereco =  servidor + "/api/v2/users/" + reference.Fields.Contact_Email + "/groups";
        //log(endereco);
        var resultado = callWebService(endereco, "Basic " + encoded, "POST", "application/json", JSON.stringify(body), []);
        log("Response  " + resultado);
    }
    
    
    
    
}