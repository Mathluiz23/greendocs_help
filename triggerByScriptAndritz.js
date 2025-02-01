var username = "api@greendocs.net";
var password = "uGMguhRZWBakNpBrEKP";


// if (item.Type === "MIG") { 
    let param = {
        NomeDocumento: "NomeDocumento=" + item.Name,
        TipoItem: "&TipoItem=" + 8,
        Usuario: "&Usuario=" + User.Login,
        NomeAcao: "&NomeAcao=PopularAcessosGrupos",
    };
  
    let url = "https://abl02.greendocs.net/api/v2/groups"
              + param.NomeDocumento
              + param.TipoItem
              + param.Usuario
              + param.NomeAcao;

    let auth = System.Convert.ToBase64String(
        System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password)
    );
 
    let authorization = "Basic " + auth;
    let method = "POST";
    let contentType = "application/json";

    callWebService(url, authorization, method, contentType, "", []);
  
// }