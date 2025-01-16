function Reference_Create(item) {
    log(item.Type);
    
    if(item.Type == 'SP') {
       
        if(reference.Type == "Item") {
            reference.Fields.processRef = item.Fields.processRef;
            reference.Fields.Type_of_Operation = "Spare Parts";
            log("reference.Fields.processRef - reference Create" + reference.Fields.processRef)
            saveItem(reference);
        }
    }
    
    if(reference.Type == 'Item') {
          log("reference name " + reference.Name)
        log("entrou na api")
        let param = {
            NomeDocumento: "NomeDocumento=" + reference.Name,
            TipoItem: "&TipoItem=" + 949,
            Usuario: "&Usuario=" + User.Login,
            NomeAcao: "&NomeAcao=Finish_Creation",
            
        };
        log("user login" + User.Login);
        let url = "https://abl02.greendocs.net/api/v2/workflows?" + param.NomeDocumento + param.TipoItem + param.Usuario + param.NomeAcao;
        let username = "api@greendocs.net";
        let password = "uGMguhRZWBakNpBrEKP";
        
        let auth = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding( "ISO-8859-1" ).GetBytes( username + ":" + password ));
        
        let authorization = "Basic " + auth;
        let method = "POST";
        let contentType = "application/json";
        
        callWebService(url, authorization, method, contentType,"", []);
     
    }

}