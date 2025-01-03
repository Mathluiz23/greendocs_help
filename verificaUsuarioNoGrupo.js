if(item.Type == 'Item') {
    
    let group = getGroupByID(19993);
    log('id do grupo' + group)
    
    let userId = User.ID;
    log('user id' + userId)
    
    for (let i = 0; i < group.Users.length; i++) {
        let userInfoGroup = group.Users[i].ID;
        log('ID do usuário no grupo: ' + userInfoGroup);
        
        if (userId == userInfoGroup) {
            userIsInGroup = true;
            break;
        } else {
            userIsInGroup = false;
        }
    }
    
    if (userIsInGroup) {
        log('O usuário pertence ao grupo.');
        item.Fields.Budget_Creator = 'Order Handling';
        log(item.Fields.Budget_Creator);
    } else {
        log('O usuário NÃO pertence ao grupo.');
        item.Fields.Budget_Creator = 'EGP';
        log(item.Fields.Budget_Creator);
    }
}
}