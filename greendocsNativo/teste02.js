log("Iniciando criação do grupo...");

var enderecoCriar = "https://abl02.greendocs.net/api/v2/groups";
var objetoCriar = {
    IdConta: 2,
    Nome: item.Fields.Name_group,
    Ativo: true,
    Acessos: item.Fields.Access_Groups,
    Listas: item.Fields.List
};

if (item.Fields.Type_of_Group == "Distribuition Group") {
    objetoCriar.Info = { "Category_group": "Distribution" };
} else if (item.Fields.Type_of_Group == "Services Emission Group") {
    objetoCriar.Info = { "Category_group": "ServicesEmission" };
}

// log("Dados do grupo a ser criado: " + JSON.stringify(objetoCriar));
var resultadoGrupo = callWebService(enderecoCriar, "Basic " + encoded, "POST", "application/json", JSON.stringify(objetoCriar), []);
// log("Resposta da criação do grupo: " + resultadoGrupo);

// log("Buscando usuários no campo item.Fields.Users...");
// log("Quantidade de usuarios "+item.Fields.Users.length);

var usuarios = searchReferencedItems(item, "Contacts", 1);

if (usuarios.length > 0) {
    for (var i = 0; i < usuarios.length; i++) {
        // var usuarioEmail = 'rubens.alcaraz@andritz.com';
        // log("usuário: " + usuarioEmail);
        log("usuarios  " + usuarios[i].Fields.Contact_Email);

        var body = { Grupos: [item.Fields.Name_group] };
        var endereco = "https://abl02.greendocs.net/api/v2/users/" + usuarios[i].Fields.Contact_Email + "/groups";
        // log("Endpoint para adicionar usuário: " + endereco);
        // log("Body enviado: " + JSON.stringify(body));

        callWebService(endereco, "Basic " + encoded, "POST", "application/json", JSON.stringify(body), []);
        // log("Resposta ao adicionar usuário: " + resultadoUsuario);
    }
} else {
    log("Nenhum usuário encontrado ");
}