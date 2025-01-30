function testeInsertUser(item) {
    
    //Autenticação API
    const username = "api@greendocs.net";
    const password = "uGMguhRZWBakNpBrEKP";
    const encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));
        
    let usuarios = searchReferencedItems(item, "", 0);
        
        log("usuarios " + usuarios.length)
        
        for (var i = 0; i < usuarios.length; i++){
            log("tipo de item dentro do for  " + item.Type);
            
            if (item.Type == "Customer" && usuarios[i].Type == "Contacts"){
                log("entrou no if " +  item.Type)
                
                let servidor = "abl02.greendocs.net";
                
                let body = {};
                body.Grupos = [];
                body.Grupos.push(item.Fields.Short_Name_Customer);
                
                let endereco = "https://" + servidor + "/api/v2/users/" + usuarios[i].Fields.Contact_Email + "/groups";
                
                callWebService(endereco, "Basic " + encoded, "POST", "application/json", JSON.stringify(body), []);
                
            }
        }
}