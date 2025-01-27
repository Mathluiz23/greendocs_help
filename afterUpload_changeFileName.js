function Item_AfterUpload(item, file) {
    // Verifica se o tipo do item é "DOC"
    if (item.Type == "DOC") {
        // Recupera os campos do item
        let paraInformacao = item.Fields.Para_Informacao; // Campo que indica se o documento é "Para Informação"
        let revisaodoCliente = item.Fields.Revisao_Cliente; // Campo de revisão do cliente
        let client = item.Fields.Numero_Documento_Cliente; // Número do documento do cliente

        // Caso o campo "Para Informação" seja "No" (não é apenas para informação)
        if (paraInformacao == 'No') {
            // Calcula o tamanho da string de revisão do cliente
            let tamanho = revisaodoCliente.length;

            // Verifica se a string tem exatamente 5 caracteres
            if (tamanho == 5) {
                // Remove o último caractere da string de revisão
                let nomeAlterado = revisaodoCliente.slice(0, -1); 
                log(nomeAlterado); // Exibe a revisão alterada no log

                // Cria um novo nome para o arquivo no formato "Número do Documento do Cliente - Revisão Alterada"
                let newName = client + "-" + nomeAlterado;
                log("Novo" + newName); // Exibe o novo nome no log

                // Altera o nome do arquivo enviado para o novo nome
                file.Name = newName;
            }
        }

        // Caso o campo "Para Informação" seja "Si" (é para informação)
        if (paraInformacao == 'Si') {
            log("Antigo " + file.Name); // Exibe o nome antigo do arquivo

            log(item.fields.Revisao_Cliente); // Exibe a revisão do cliente
            log(item.Fields.Numero_Documento_Cliente); // Exibe o número do documento do cliente

            // Recupera os valores do número do documento do cliente e da revisão
            let client = item.Fields.Numero_Documento_Cliente;
            let revision = item.Fields.Revisao_Cliente;

            // Cria um novo nome para o arquivo no formato "Número do Documento do Cliente - Revisão"
            let newName = client + "-" + revision;
            log("Novo " + newName); // Exibe o novo nome no log

            // Altera o nome do arquivo enviado para o novo nome
            file.Name = newName;
        }
    }
}
