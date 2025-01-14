if (item.Type == "TRA" && reference.Type =="Company"){
    commit(true);
    item.Fields.Company_Name = reference.Fields.Company_Name;
}

// quando tem um item relacionado é gerado uma referência entre os itens, através da função nativa reference, é possível pegar o campo de referência do Item relacionado.