// Verifica se o tipo do item é "Item"
if (item.Type == 'Item') {

    // Obtém o grupo com o ID 19993
    let group = getGroupByID(19993);
    log('id do grupo' + group); // Loga o grupo obtido para conferência

    // Obtém o ID do usuário atual
    let userId = User.ID;
    log('user id' + userId); // Loga o ID do usuário atual para conferência

    // Loop através da lista de usuários no grupo
    for (let i = 0; i < group.Users.length; i++) {
        // Obtém o ID de cada usuário no grupo
        let userInfoGroup = group.Users[i].ID;
        log('ID do usuário no grupo: ' + userInfoGroup); // Loga o ID do usuário no grupo para conferência

        // Verifica se o ID do usuário atual está na lista de IDs do grupo
        if (userId == userInfoGroup) {
            userIsInGroup = true; // Define que o usuário pertence ao grupo
            break; // Sai do loop pois já encontrou o usuário no grupo
        } else {
            userIsInGroup = false; // Caso contrário, define que o usuário não pertence ao grupo
        }
    }

    // Verifica se o usuário pertence ao grupo
    if (userIsInGroup) {
        log('O usuário pertence ao grupo.'); // Loga que o usuário pertence ao grupo

        // Define o campo "Budget_Creator" do item como "Order Handling"
        item.Fields.Budget_Creator = 'Order Handling';
        log(item.Fields.Budget_Creator); // Loga o valor atualizado de "Budget_Creator"
    } else {
        log('O usuário NÃO pertence ao grupo.'); // Loga que o usuário não pertence ao grupo

        // Define o campo "Budget_Creator" do item como "EGP"
        item.Fields.Budget_Creator = 'EGP';
        log(item.Fields.Budget_Creator); // Loga o valor atualizado de "Budget_Creator"
    }
}
