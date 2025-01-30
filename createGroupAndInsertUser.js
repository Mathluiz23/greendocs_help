//CRIA O GRUPO
var enderecoCriar = "https://abl02.greendocs.net/api/v2/groups";
var objetoCriar = {};
objetoCriar.IdConta = 2;
objetoCriar.Nome = item.Fields.Name_group;
objetoCriar.Ativo = true;
//log(item.Fields.Access_Groups.length);
objetoCriar.Acessos = item.Fields.Access_Groups;
objetoCriar.Listas = item.Fields.List;


log(item.Fields.Type_of_Group);

if(item.Fields.Type_of_Group == 'Distribuition Group'){
    objetoCriar.Info = {"Category_group": "Distribution"};
}else if(item.Fields.Type_of_Group == 'Services Emission Group'){
    objetoCriar.Info = {"Category_group": "ServicesEmission"};
}


//log(item.Fields.Access_Groups);

callWebService(enderecoCriar, "Basic " + encoded, "POST", "application/json", JSON.stringify(objetoCriar), []);


var usuarios = searchReferencedItems(item, "Contacts", 1);

log("tipo de item " + item.Type)
for (var i = 0; i < usuarios.length; i++){
    
    log("usuarios : " + usuarios[i].Type)
    if (item.Type == "Group" && usuarios[i].Type == "Contacts"){
        
        
        //log("entrou no if");
        //log("login " + reference.Fields.Contact_Email);
        // basic setup da comunicação API
        var username = "api@greendocs.net";
        var password = "uGMguhRZWBakNpBrEKP";
        var encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));
        var servidor = "abl02.greendocs.net";
        
        var body = {};
        body.Grupos = [];
        body.Grupos.push(item.Name);
        
        var endereco = "https://" + servidor + "/api/v2/users/" + usuarios[i].Fields.Contact_Email + "/groups";
        //log(endereco);
        var resultado = callWebService(endereco, "Basic " + encoded, "POST", "application/json", JSON.stringify(body), []);
        //log(resultado);
    }
}