var username = "testes@greendocs.net"; //Usuário com permissão de criação no ambiente destino
var password = "senha";
var encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));

var endereco = "https://br00.greendocs.net/api/v2/items?TipoItem=13&ID_Processo=13&NomeDocumento=" 
    + item.Name + "&RevisaoDocumento=" + item.RevisionNumber + "&CriarSeNaoExistir=1&Usuario=testes@greendocs.net";

var resultado = callWebService(endereco, "Basic " + encoded, "POST", "application/json", '', [], item.ID);