function CriaUsuario(item) {

    // PROCESSO: CRIAÇÃO DE USUÁRIO PARA O FORNECEDOR

    // Credenciais de autenticação para acessar a API
    var username = "api@greendocs.net"; // Usuário da API
    var password = ""; // Senha da API (deve ser preenchida)
    // Cria uma string codificada em Base64 com o formato "username:password"
    var encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));

    // URL do endpoint da API para criar usuários
    var enderecoCriar = "http://cattalini2.newhom.greendocs.net/api/v2/users";

    // Acessa a tabela de representantes legais do item
    var TabelaRepresentantes = item.Fields.Representantes_legais;

    // Loop para percorrer cada linha da tabela de representantes legais
    for (i = 0; i < TabelaRepresentantes.Rows.length; i++) {
        // Extrai o nome e o e-mail de cada representante
        var nome = TabelaRepresentantes.Rows[i].Columns['Representante_legal'];
        var email = TabelaRepresentantes.Rows[i].Columns['Email_representante_legal'];

        // Cria o objeto que será enviado para a API
        var objetoCriar = {};
        objetoCriar.IdConta = 2; // ID da conta padrão
        objetoCriar.Nome = nome; // Nome do usuário
        objetoCriar.Login = email; // Login do usuário (baseado no e-mail)

        // Verifica se o campo "Desativar_usuarios" está definido como "Sim"
        if (item.Fields.Desativar_usuarios == "Sim") {
            // Se "Sim", marca o usuário como inativo
            objetoCriar.Ativo = false;
        } else {
            // Caso contrário, marca o usuário como ativo
            objetoCriar.Ativo = true;
            objetoCriar.Pass = ""; // Deixa a senha vazia (provavelmente será gerada)
            objetoCriar.TrocaSenha = true; // Indica que o usuário deverá trocar a senha no primeiro acesso
            // Associa o usuário a grupos específicos
            objetoCriar.Grupos = [item.Fields.Fornecedor_contrato, ' CADFORN - Fornecedores'];
            // Adiciona o nome do usuário na coluna correspondente da tabela
            TabelaRepresentantes.Rows[i].Columns['Usuario_Fornecedor'] = nome;
        }

        // Envia o objeto criado para o serviço web (API)
        var retorno = callWebService(
            enderecoCriar,                 // URL do serviço
            "Basic " + encoded,            // Autenticação no formato Basic
            "POST",                        // Método HTTP
            "application/json",            // Tipo de conteúdo
            JSON.stringify(objetoCriar),   // Corpo da requisição (objeto transformado em JSON)
            []                             // Cabeçalhos adicionais (vazio)
        );

        // Atualiza o campo "Usuario_Fornecedor" no item com o nome do usuário
        item.Fields.Usuario_Fornecedor = nome;
    }
}
