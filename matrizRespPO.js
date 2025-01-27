function Matriz_Resp_PO(item) {
    // Define as credenciais de autenticação para acessar a API
    var username = "api@greendocs.net";
    var password = "";
    // Converte as credenciais para o formato Base64
    var encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));
    
    // Define o servidor e o ambiente da API
    var servidor = "https://abl02.greendocs.net";
    var ambiente = 47;

    // Pega o número da posição (PO) do item
    var PO_Number = item.Name;
    
    // CRIA UNIDADE
    // Define o endpoint da API para criar uma nova unidade
    var enderecoCriarUnidade = servidor + "/api/v2/positions";
    var objetoCriarUnidade = {};
    objetoCriarUnidade.env_id = ambiente;
    objetoCriarUnidade.unities = [];
    // Adiciona a nova unidade com o nome e as iniciais do PO
    objetoCriarUnidade.unities.push({'name': PO_Number, 'initials': PO_Number});
    
    // Chama o serviço da API para criar a unidade
    var retorno = callWebService(enderecoCriarUnidade, "Basic " + encoded, "POST", "application/json", JSON.stringify(objetoCriarUnidade), []);
    
    // BUSCA USUÁRIOS
    // Define o endpoint da API para buscar os usuários da conta
    var enderecoCriar = servidor + "/api/v2/users/getfromaccount?id_conta=2";
    var objetoCriar = {};
    // Chama o serviço da API para buscar os usuários
    var chamada = callWebService(enderecoCriar, "Basic " + encoded, "GET", "application/json", JSON.stringify(objetoCriar), []);
    var usuariosConta = JSON.parse(chamada); // Converte a resposta da API para um objeto JSON
    
    // Itera sobre os usuários da conta
    for (var i = 0; i < usuariosConta.length; i++) { 
        var nomeConta = usuariosConta[i].Nome;
        var login = usuariosConta[i].Login;
        
        // Itera sobre as linhas da "Matriz de Comunicação" no item
        for (var j = 0; j < item.Fields.Communication_Matrix_PO.Rows.length; j++) { 
            var nomeTabela = item.Fields.Communication_Matrix_PO.Rows[j].Columns["Person_PO"];
            
            // Verifica se o nome da pessoa na tabela é igual ao nome do usuário da conta
            if (nomeTabela === nomeConta) {
                 var Discipline = item.Fields.Communication_Matrix_PO.Rows[j].Columns["Discipline_Communication_Matrix"];
                 var funcao = item.Fields.Communication_Matrix_PO.Rows[j].Columns["Function_CM_PO"];
        
                // COLOCA O USUÁRIO NA POSIÇÃO BASEADO NO CAMPO
                // Define o endpoint para adicionar a posição do usuário
                var enderecoPosicao =  servidor + "/api/v2/users/" + login + "/positions";
                var objetoPosicao = {};
                objetoPosicao.positions = [{"env_id": ambiente, "unity": PO_Number, "area": Discipline, "role": funcao}];
                
                // Chama o serviço da API para associar o usuário à posição
                callWebService(enderecoPosicao, "Basic " + encoded, "POST", "application/json", JSON.stringify(objetoPosicao), []);
            }
        }
    }
    
    var persons = [];
    
    // Itera sobre as linhas da "Matriz de Comunicação" para coletar os nomes das pessoas
    for (var i = 0; i < item.Fields.Communication_Matrix_PO.Rows.length; i++) { 
        // Adiciona a pessoa na lista, caso ainda não esteja presente
        if (persons.indexOf(item.Fields.Communication_Matrix_PO.Rows[i].Columns["Person_PO"]) == -1){
            persons.push(item.Fields.Communication_Matrix_PO.Rows[i].Columns["Person_PO"]);
        }
    }
    
    // Atualiza o campo "Person_PO_Notification" com a lista de pessoas
    item.Fields.Person_PO_Notification = persons; 
}
