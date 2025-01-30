// Irá avançar a atividade se o usuário preencher uma nova linha na tabela

let tabela = item.Fields.Tabela_informacoes;

// Armazena o número de linhas antes da atividade
let linhasAntes = tabela.length;

// Simula a execução da atividade (ou espera um evento)
function verificaInsercao() {
    let linhasDepois = item.Fields.Tabela_informacoes.length;

    if (linhasDepois <= linhasAntes) {
        abort("Você precisa inserir uma nova linha na tabela.");
    }
}

// Chama a função para verificar após a atividade
verificaInsercao();


