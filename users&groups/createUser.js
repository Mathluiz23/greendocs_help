function Contatos(item) {
    var username = "api@greendocs.net";
    var password = ""; // senha; 
    var encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));
    
    var login = item.Fields.Email;
    
    //CRIA O USUÁRIO
    var enderecoCriar = "${link}/api/v2/users";
    
    var objetoCriar = {};
    objetoCriar.IdConta = 2;
    objetoCriar.Nome = item.Fields.Contact_Complete_Name;
    objetoCriar.Login = item.Fields.Contact_Email;
    objetoCriar.Ativo = true;
    objetoCriar.EmailNotificacao = item.Fields.Contact_Email;
    objetoCriar.Pass = "Andritz2019";
    objetoCriar.Grupos = [item.Fields.Users_Group];
    objetoCriar.TrocaSenha = true;
    
    
    callWebService(enderecoCriar, "Basic " + encoded, "POST", "application/json", JSON.stringify(objetoCriar), []);
    
}