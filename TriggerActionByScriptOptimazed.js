// Verifica se o tipo do item é "TEP"
if (item.Type === "TEP") {
    
    // Construção da URL diretamente com os parâmetros necessários
    var url = "https://siderperu.greendocs.net/api/v2/workflows?" +
        "NomeDocumento=" + item.Name + // Nome do documento é extraído do item
        "&TipoItem=13" +              // Define o tipo do item como 13
        "&Usuario=" + User.Login +    // Adiciona o login do usuário
        "&NomeAcao=archivo_cargado";  // Define a ação como "archivo_cargado"

    // Credenciais de autenticação
    var username = "service_api@greendocs.com";
    // var password = ""; // O campo de senha foi comentado (deve ser preenchido para funcionar corretamente)

    // Criação do cabeçalho de autenticação em Base64
    var auth = System.Convert.ToBase64String(
        System.Text.Encoding.GetEncoding("ISO-8859-1") // Define a codificação como ISO-8859-1
        .GetBytes(username + ":" + password)          // Concatena o username e a senha com ":"
    );
    var authorization = "Basic " + auth; // Adiciona o prefixo "Basic" ao token codificado

    // Chamada do serviço web
    callWebService(
        url,                   // URL do endpoint da API
        authorization,         // Cabeçalho de autorização contendo as credenciais codificadas
        "POST",                // Método HTTP utilizado para a chamada
        "application/json",    // Define o tipo de conteúdo esperado como JSON
        "",                    // Corpo da requisição (nesse caso está vazio)
        []                     // Cabeçalhos adicionais (não usados aqui)
    );
}

