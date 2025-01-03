function Matriz_Resp_PO(item) {
    var username = "api@greendocs.net";
    var password = "uGMguhRZWBakNpBrEKP";
    var encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));
    var servidor = "https://abl02.greendocs.net";
    var ambiente = 47;

    var PO_Number = item.Name;
    
    //CRIA UNIDADE
    
    var enderecoCriarUnidade = servidor + "/api/v2/positions";
    var objetoCriarUnidade = {};
    objetoCriarUnidade.env_id = ambiente;
    objetoCriarUnidade.unities = [];
    objetoCriarUnidade.unities.push({'name': PO_Number, 'initials': PO_Number});
    
    var retorno = callWebService(enderecoCriarUnidade, "Basic " + encoded, "POST", "application/json", JSON.stringify(objetoCriarUnidade), []);
    
    //BUSCA USUÁRIOS
    var enderecoCriar = servidor + "/api/v2/users/getfromaccount?id_conta=2";
    var objetoCriar = {};
    var chamada = callWebService(enderecoCriar, "Basic " + encoded, "GET", "application/json", JSON.stringify(objetoCriar), []);
    var usuariosConta = JSON.parse(chamada);
    
    for (var i = 0; i < usuariosConta.length; i++) { 
        var nomeConta = usuariosConta[i].Nome;
        var login = usuariosConta[i].Login;
        
        for (var j = 0; j < item.Fields.Communication_Matrix_PO.Rows.length; j++) { 
            var nomeTabela = item.Fields.Communication_Matrix_PO.Rows[j].Columns["Person_PO"];
            
            if (nomeTabela === nomeConta) {
                 var Discipline = item.Fields.Communication_Matrix_PO.Rows[j].Columns["Discipline_Communication_Matrix"];
                 var funcao = item.Fields.Communication_Matrix_PO.Rows[j].Columns["Function_CM_PO"];
        
                //COLOCA O USUÁRIO NA POSIÇÃO BASEADO NO CAMPO
                var enderecoPosicao =  servidor + "/api/v2/users/" + login + "/positions";
                var objetoPosicao = {};
                objetoPosicao.positions = [{"env_id": ambiente, "unity": PO_Number, "area": Discipline, "role": funcao}];
                
                callWebService(enderecoPosicao, "Basic " + encoded, "POST", "application/json", JSON.stringify(objetoPosicao), []);
                //break;
            }
        }
    }
    
    
    var persons = [];
    
    for (var i = 0; i < item.Fields.Communication_Matrix_PO.Rows.length; i++) { 
        if (persons.indexOf(item.Fields.Communication_Matrix_PO.Rows[i].Columns["Person_PO"]) == -1){
            persons.push(item.Fields.Communication_Matrix_PO.Rows[i].Columns["Person_PO"]);
        }
    }
    
    item.Fields.Person_PO_Notification = persons; 
}