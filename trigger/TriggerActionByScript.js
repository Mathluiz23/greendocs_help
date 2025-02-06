if (item.Type === "TEP") { 
    // Criação de um objeto `param` contendo os parâmetros necessários para compor a URL.
    let param = {
        NomeDocumento: "NomeDocumento=" + item.Name, // Inclui o nome do documento a partir do item.Name.
        TipoItem: "&TipoItem=" + 13, // Define o tipo do item como "13".
        Usuario: "&Usuario=" + User.Login, // Inclui o login do usuário.
        NomeAcao: "&NomeAcao=archivo_cargado", // Define a ação como "archivo_cargado".
    };
    // Construção da URL da API utilizando os parâmetros do objeto `param`.
    let url = "https://siderperu.greendocs.net/api/v2/workflows?"
              + param.NomeDocumento
              + param.TipoItem
              + param.Usuario
              + param.NomeAcao;
    // Credenciais para autenticação na API.
    let username = "service_api@greendocs.com"; // Nome de usuário.
    let password = "n%s{p#&!H7sZ{Tr-,B-R"; // Senha.
    // Codifica as credenciais em Base64 para o cabeçalho de autenticação.
    let auth = System.Convert.ToBase64String(
        System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password)
    );
    // Constrói o cabeçalho de autenticação no formato "Basic <credenciais_codificadas>".
    let authorization = "Basic " + auth;
    // Define o método HTTP para a chamada da API.
    let method = "POST";
    // Define o tipo de conteúdo esperado na requisição.
    let contentType = "application/json";
    // Faz a chamada ao serviço web utilizando a função `callWebService`.
    // Os parâmetros são: URL, cabeçalho de autorização, método HTTP, tipo de conteúdo, corpo da requisição (vazio), e um array vazio para headers adicionais.
    callWebService(url, authorization, method, contentType, "", []);
  
    // log('1 '+request); // Loga a resposta da requisição como uma string.
    // log('2 '+JSON.parse(request)); // Loga a resposta da requisição como um objeto JSON (caso o retorno seja um JSON).
 }