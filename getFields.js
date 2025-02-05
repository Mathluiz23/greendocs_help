let client = GlobalServerURL;
console.log("Servidor:", client);

let endpoint = "/api/v2/users/getfromaccount?id_conta=2";

let username = "api@greendocs.net";
let password = "";

// Gera o token de autenticação Base64 para Basic Auth
let auth = btoa(username + ":" + password);
let authorization = "Basic " + auth;

let url = client + endpoint;

let method = "GET";
let contentType = "application/json";

// Chamada da API usando fetch()
fetch(url, {
    method: method,
    headers: {
        "Authorization": authorization,
        "Content-Type": contentType
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
    }
    return response.json();
})
.then(data => {
    console.log("Resposta da API:", data);

    // Verifica se existem itens na resposta
    if (!data || !Array.isArray(data.items)) {
        console.error("Erro: Nenhum item encontrado na resposta da API.");
        return;
    }

    // Define o valor específico que queremos verificar
    let valorEsperado = "AlgumValor";  // 🔍 Defina aqui o valor esperado
    let atividadeEncontrada = null;

    // Itera sobre os itens para verificar os campos e a atividade
    data.items.forEach(item => {
        if (item.Fields && item.Fields.Nome_interno) {
            console.log(`Atividade: ${item.atividade}, Nome_interno: ${item.Fields.Nome_interno}`);

            // Verifica se o campo tem o valor esperado
            if (item.Fields.Nome_interno === valorEsperado) {
                atividadeEncontrada = item.atividade;
            }
        }
    });

    // Exibe o resultado
    if (atividadeEncontrada) {
        console.log(`✅ Campo com o valor "${valorEsperado}" encontrado na atividade: ${atividadeEncontrada}`);
    } else {
        console.warn(`⚠️ Nenhum campo com o valor "${valorEsperado}" foi encontrado.`);
    }
})
.catch(error => {
    console.error("Erro na requisição ou processamento:", error);
});
