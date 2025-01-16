var username = "usuario"; //Usuário Services
var password = "senha";
var encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));

var login = item.Fields.Email;

//CRIA O USUÁRIO
var enderecoCriar = "https://br00.greendocs.net/api/v2/users";

var objetoCriar = {};
objetoCriar.IdConta = 2;
objetoCriar.Nome = item.Fields.Nome_do_Contato;
objetoCriar.Login = login;
objetoCriar.Pass = "1234dddd";
objetoCriar.Grupos = [item.Fields.Grupo];
objetoCriar.TrocaSenha = true;

callWebService(enderecoCriar, "Basic " + encoded, "POST", "application/json", JSON.stringify(objetoCriar), []);


//COLOCA O USUÁRIO NA POSIÇÃO BASEADO NO CAMPO
var enderecoPosicao = "https://br00.greendocs.net/api/v2/users/" + login + "/positions";

//Podem ser enviadas várias posições ao mesmo tempo. Não é obrigatório enviar sempre unidade, área e função. Pode ser preenchido apenas o valor para area, por exemplo.
var objetoPosicao = {};
objetoPosicao.positions = [{"env_id": 2, "unity": item.Fields.Unidade, "area": item.Fields.Area, "role": item.Fields.Funcao}];

callWebService(enderecoPosicao, "Basic " + encoded, "POST", "application/json", JSON.stringify(objetoPosicao), []);