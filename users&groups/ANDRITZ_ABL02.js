function Contatos(item) {
    
    var referencias = searchReferencedItems(item, "", 0);
    if (referencias.length > 0 ){
        for (var i = 0; i < referencias.length; i++){
            log(item.Type);
            log(referencias[i].Type);
            if (item.Type == "Contacts" && referencias[i].Type == "Company" ){
                log("----------COMPANY ------------")
                var grupos = [];
                grupos = item.Fields.Users_Group;
                
                log("UG " + item.Fields.Users_Group);
                log("TAM " + item.Fields.Users_Group.length);
                
                //if (item.Fields.Users_Group === null || item.Fields.Users_Group.length === 0){
                    log("SH " + referencias[i].Fields.Short_Name);
                    grupos.push(referencias[i].Fields.Short_Name);
                //}
                
                item.Fields.Users_Group = grupos;
                
                log("Group " + item.Fields.Users_Group);
            }
            
            // if (item.Type == "Contacts" && referencias[i].Type == "Customer" ){
            //     log("----------CUSTOMER ------------")
                
            //     log("REFERENCE SH " + referencias[i].Fields.Short_Name_Customer);
            //     log("ITEM  SH " + item.Fields.Short_Name_Customer);
                
                
            //     var grupos = [];
            //     grupos = item.Fields.Users_Group;
                
            //     log("UG " + item.Fields.Users_Group);
            //     log("TAM " + item.Fields.Users_Group.length);
                
            //     //if (item.Fields.Users_Group === null || item.Fields.Users_Group.length === 0){
            //         log("SH " + referencias[i].Fields.Short_Name_Customer);
            //         grupos.push(referencias[i].Fields.Short_Name_Customer);
            //     //}
                
            //     item.Fields.Users_Group = grupos;
                
            //     log("Group " + item.Fields.Users_Group);
                
                
            // }
            
            if (item.Type == "Contacts" && referencias[i].Type == "Customer") {
                log("----------CUSTOMER ------------")
                
                log("REFERENCE SH " + referencias[i].Fields.Short_Name_Customer);
                log("ITEM  SH " + item.Fields.Short_Name_Customer);
                
                var grupos = [];
                // Adiciona os grupos do item
                if (item.Fields.Users_Group && item.Fields.Users_Group.length > 0) {
                    grupos = grupos.concat(item.Fields.Users_Group);  // Mantém os grupos existentes
                }
            
                log("UG " + item.Fields.Users_Group);
                log("TAM " + item.Fields.Users_Group.length);
            
                // Adiciona o grupo do cliente
                log("SH " + referencias[i].Fields.Short_Name_Customer);
                grupos.push(referencias[i].Fields.Short_Name_Customer);
            
                item.Fields.Users_Group = grupos;
                
                
                
                
                log("Group length  " + grupos.length);
            }

        }
    }
    
    
    
    var username = "api@greendocs.net";
    var password = "uGMguhRZWBakNpBrEKP";
    var encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));
    
    
    var login = item.Fields.Email;
    
    //CRIA O USUÁRIO
    var enderecoCriar = "https://abl02.greendocs.net/api/v2/users";
    
    var objetoCriar = {};
    objetoCriar.IdConta = 2;
    objetoCriar.Nome = item.Fields.Contact_Complete_Name;
    objetoCriar.Login = item.Fields.Contact_Email;
    objetoCriar.Ativo = true;
    objetoCriar.EmailNotificacao = item.Fields.Contact_Email;
    objetoCriar.Pass = "Andritz2019";
    objetoCriar.Grupos = item.Fields.Users_Group;
 
    objetoCriar.TrocaSenha = true;
    
    
    var retorno = callWebService(enderecoCriar, "Basic " + encoded, "POST", "application/json", JSON.stringify(objetoCriar), []);
    log ("RESPONSE " + retorno);

}





















if (item.Type == "Contacts" && referencias[i].Type == "Company") {
    log("----------COMPANY ------------");

    log("REFERENCE SH " + referencias[i].Fields.Short_Name_Customer);
    log("ITEM SH " + item.Fields.Short_Name_Customer);

    var grupos = [];

    if (item.Fields.Users_Group) {
        if (typeof item.Fields.Users_Group === "string") {
            grupos = item.Fields.Users_Group.split(",");
        } else {
            grupos = item.Fields.Users_Group.slice(0);
        }
    }

    log("UG antes: " + grupos);
    log("TAM antes: " + grupos.length);

    var novoGrupo = referencias[i].Fields.Short_Name;

    var existe = false;
    for (var j = 0; j < grupos.length; j++) {
        if (grupos[j].replace(/^\s+|\s+$/g, "") === novoGrupo.replace(/^\s+|\s+$/g, "")) {
            existe = true;
            break;
        }
    }

    if (!existe && grupos.length < 3) {
        grupos[grupos.length] = novoGrupo;
    }

    log("SH TESTE " + novoGrupo);
    log("Group length depois: " + grupos.length);

    item.Fields.Users_Group = typeof item.Fields.Users_Group === "string" ? grupos.join(",") : grupos;
}