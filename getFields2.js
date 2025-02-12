// Definição da URL do servidor
var client = GlobalServerURL;
log(client); 

var endpoint = "/api/v2/users/getfromaccount?id_conta=2";

var username = "api@greendocs.net";
var password = "";

var auth = System.Convert.ToBase64String(
    System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password)
);

var url = client + endpoint;
var authorization = "Basic " + auth;
var method = "GET";
var contentType = "application/json";

// Faz a requisição usando o método da plataforma low-code
var json = callWebService(url, authorization, method, contentType, null, []);
var response = JSON.parse(json);

// Itera sobre os itens e verifica os campos
var valorEsperado = "AlgumValor";  // 🔍 Defina o valor a ser verificado
var atividadeEncontrada = null;

for (var i = 0; i < response.items.length; i++) {
    var item = response.items[i];

    if (item.Fields && item.Fields.Nome_interno) {
        log("Atividade: " + item.atividade + ", Nome_interno: " + item.Fields.Nome_interno);

        // Verifica se o campo tem o valor esperado
        if (item.Fields.Nome_interno === valorEsperado) {
            atividadeEncontrada = item.atividade;
        }
    }
}

if (atividadeEncontrada) {
    log("✅ Campo com o valor '" + valorEsperado + "' encontrado na atividade: " + atividadeEncontrada);
} else {
    log("⚠️ Nenhum campo com o valor '" + valorEsperado + "' foi encontrado.");
}
