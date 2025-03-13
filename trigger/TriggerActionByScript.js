if (item.Type === "TEP") { 
 
    let param = {
        NomeDocumento: "NomeDocumento=" + item.Name, 
        TipoItem: "&TipoItem=" + 13, 
        Usuario: "&Usuario=" + User.Login,
        NomeAcao: "&NomeAcao=archivo_cargado", 
    };
 
    let url = "https://siderperu.greendocs.net/api/v2/workflows?"
              + param.NomeDocumento
              + param.TipoItem
              + param.Usuario
              + param.NomeAcao;
 
    let username = "service_api@greendocs.com";
    let password = "n%s{p#&!H7sZ{Tr-,B-R"; 

    let auth = System.Convert.ToBase64String(
        System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password)
    );
    
    let authorization = "Basic " + auth;
    let method = "POST";
    let contentType = "application/json";
  
    callWebService(url, authorization, method, contentType, "", []);
  
}