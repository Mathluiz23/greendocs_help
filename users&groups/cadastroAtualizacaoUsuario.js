function atualizarCadastro(item) {
    log(GlobalServerURL);
    let client          = GlobalServerURL;
    let endPoint        = "/api/v2/groups"; // Endpoint para criar grupos 
    let username        = "job@greendocs.net";
    let password        = "";
    let auth            = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));
    let url             = client + endPoint;
    let authorization   = "Basic " + auth;
    let method          = "DELETE"; //PATCH
    let contentType     = "application/json";
    
    
    // Create User
    endPoint = "/api/v2/users";
    url = client + endPoint;
    
    let table           = item.Fields.Tabela_de_Usuarios;
    let TypeOfCompany   = item.Fields.Tipo_de_Empresa;
    let secondGroup, thirdGroup;

    switch (TypeOfCompany) {
      case "Fornecedor":
        secondGroup = "Fornecedores";
        break;
      case "Cliente":
        secondGroup = "Clientes";
        break;
      case "Fornecedor e Cliente":
        secondGroup = "Clientes";
        thirdGroup = "Fornecedores";
        break;
      default:
        log("Metadado Tipo_de_Empresa inválido");
    }

    let environment = 1;
        
    if(  typeof table.Rows === "object" && table.Rows.length > 0 ){
        for(i = 0; i < table.Rows.length; i++){
            
            if(table.Rows[i].Columns['Funcao_antiga'] !== ''){
                let name = table.Rows[i].Columns['Nome0'];
                let login = table.Rows[i].Columns['Email0'];
                let role = table.Rows[i].Columns['Funcao_antiga'];
                
                log(role)
                
                let endPoint = "/api/v2/users/"+login+"/positions";
                let url = client + endPoint;
            
                
                let create = {};
                    create.Positions = [
                    {
                        env_id: environment,
                        role: role,
                    }
                ];
            	
                callWebService(url,authorization,method,contentType,JSON.stringify(create),[]);
            }
        }
    }
      if(  typeof table.Rows === "object" && table.Rows.length > 0 ){
        for(i = 0; i < table.Rows.length; i++){
            
            if(table.Rows[i].Columns['Funcao_no_Projeto'] !== ''){
                let method = "POST";
            
                let name = table.Rows[i].Columns['Nome0'];
                let login = table.Rows[i].Columns['Email0'];
                let role = table.Rows[i].Columns['Funcao_no_Projeto'];
                
                //log(role)
                
                let endPoint = "/api/v2/users/"+login+"/positions";
                let url = client + endPoint;
            
                
                let create = {};
                    create.Positions = [
                    {
                        env_id: environment,
                        role: role,
                    }
                ];
            	
                callWebService(url,authorization,method,contentType,JSON.stringify(create),[]);
            }
            
        }
  
    }
}