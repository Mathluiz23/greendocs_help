if (item.Type === "TEP") {
    // Construção da URL diretamente, sem criar um objeto intermediário.
    var url = "https://siderperu.greendocs.net/api/v2/workflows?" +
        "NomeDocumento=" + item.Name +
        "&TipoItem=13" +
        "&Usuario=" + User.Login +
        "&NomeAcao=archivo_cargado";

    // Credenciais de autenticação.
    var username = "service_api@greendocs.com";
    var password = "n%s{p#&!H7sZ{Tr-,B-R";

    // Criação do cabeçalho de autenticação em Base64.
    var auth = System.Convert.ToBase64String(
        System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password)
    );
    var authorization = "Basic " + auth;

    // Chamada do serviço web.
    callWebService(url, authorization, "POST", "application/json", "", []);
}
