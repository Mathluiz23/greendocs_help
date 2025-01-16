// Usando uma lista fixa de ambientes:

var username = "service@greendocs.net"; //Usuário de serviço
var password = "senha";
var encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));

//CRIA O GRUPO
var enderecoCriar = "https://br00.greendocs.net/api/v2/groups";
var objetoCriar = {};
objetoCriar.IdConta = 2;
objetoCriar.Nome = item.Fields.Short_Name; //Campo do formulário com o nome do grupo
objetoCriar.Ativo = true;
objetoCriar.Acessos = ["Ambiente 1", "Ambiente 2"]; //array com os nomes dos ambientes onde o grupo vai ter acesso
objetoCriar.Listas = ["Ambiente 1"]; //array com os nomes dos ambientes onde o grupo aparecer como opção nos campos do tipo lista

callWebService(enderecoCriar, "Basic " + encoded, "POST", "application/json", JSON.stringify(objetoCriar), []);


// Usando campos do tipo multi-valor com valores correspondentes aos nomes dos ambientes:


    var username = "service@greendocs.net"; //Usuário de serviço
    var password = "senha";
    var encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));
  
    //CRIA O GRUPO
    var enderecoCriar = "https://br00.greendocs.net/api/v2/groups";
    var objetoCriar = {};
    objetoCriar.IdConta = 2;
    objetoCriar.Nome = item.Fields.Short_Name; //Campo do formulário com o nome do grupo
    objetoCriar.Ativo = true;
    objetoCriar.Acessos = item.Fields.Ambientes_Acesso;
    objetoCriar.Listas = item.Fields.Ambientes_Acesso;
    
    callWebService(enderecoCriar, "Basic " + encoded, "POST", "application/json", JSON.stringify(objetoCriar), []);