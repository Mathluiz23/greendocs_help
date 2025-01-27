// Ao Criar ou Excluir Referência
if(reference.Type == "DOC" && item.Type == "ER"){
        
    var idsUsuarios = [];
    idsUsuarios.push(reference.Fields.RevisaoEmitidaPor);
    if (User !== null && User.ID !== null){
        idsUsuarios.push(User.ID);
    }
    reference.Fields.RevisaoEmitidaPor = idsUsuarios;
    
    saveItem(reference);
}
