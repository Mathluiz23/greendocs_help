function Item_BeforePrint(item) {
    // realiza filtro se o usuário logado pertence ao campo multivalorado
    let copiaControlada = item.Fields.Permitido_Imprimir_Copia_Controlada;
    let user = User.Name;

    for (let i = 0; i < copiaControlada.length; i++) {
        if (user == copiaControlada[i]) {
            setWatermark("Cópia Controlada  " + item.Name + "  " + item.RevisionNumber , "center", "center", 10, 120, 45);
        } else {
            setWatermark("Cópia Não Controlada  " + item.Name + "  " + item.RevisionNumber , "center", "center", 10, 120, 45);
        }
    }
}