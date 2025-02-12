let group = getGroupByID(19993);
    //log('id do grupo' + group)

var grupo = getGroupByID(id_grupo);
log(grupo.Name);
    for (var i = 0; i < grupo.Users.length; i++) {
        log(grupo.Users[i].Name + ', ' + grupo.Users[i].Login + ", " + grupo.Users[i].ID);
    }

function getGroupByID(id_grupo) {
    //Autenticação API
    const username = "teste @greendocs.net";
    const password = "uGMguhRZWBakNpBrEKP";
    const encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));
    //Servidor API
    const servidor = "abl02.greendocs.net";
    //Cria o endpoint da API
    const endpoint = servidor + "/api/v2/groups/" + id_grupo;
    //Faz a chamada da API
    const retorno = callWebService(endpoint, "Basic " + encoded, "GET", "application/json", null, []);
    //Converte o retorno para JSON
    const retornoJson = JSON.parse(retorno);
    //Retorna o JSON
    return retornoJson;
}