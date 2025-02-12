function Reference_Undo(item) {
    var username = "api@greendocs.net";
    var password = "uGMguhRZWBakNpBrEKP";
    var encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));
    var servidor = "abl02.greendocs.net";
    
    if (item.Type == "Group" && reference.Type == "Contacts"){
     
        var body = {};
        body.Grupos = [];
        body.Grupos.push(item.Name);
        
        var endereco = "https://" + servidor + "/api/v2/users/" + reference.Fields.Contact_Email + "/groups";
        //log(endereco);
        var resultado = callWebService(endereco, "Basic " + encoded, "DELETE", "application/json", JSON.stringify(body), []);
        //log(resultado);
    }
    
    if (item.Type == "Company" && reference.Type == "Contacts"){
     
        var body = {};
        body.Grupos = [];
        body.Grupos.push(item.Fields.Short_Name);
        
        var endereco = "https://" + servidor + "/api/v2/users/" + reference.Fields.Contact_Email + "/groups";
        //log(endereco);
        var resultado = callWebService(endereco, "Basic " + encoded, "DELETE", "application/json", JSON.stringify(body), []);
        //log(resultado);
    }
    
    if (item.Type == "Customer" && reference.Type == "Contacts"){
     
        var body = {};
        body.Grupos = [];
        body.Grupos.push(item.Fields.Short_Name_Customer);
        
        var endereco = "https://" + servidor + "/api/v2/users/" + reference.Fields.Contact_Email + "/groups";
        //log(endereco);
        var resultado = callWebService(endereco, "Basic " + encoded, "DELETE", "application/json", JSON.stringify(body), []);
        //log(resultado);
    }
}