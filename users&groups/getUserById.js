if(item.Type == 'Item') {
    
    let group = getGroupByID(19993);
    //log('id do grupo' + group)
    
    let userId = User.ID;
    //log('user id' + userId)
    
    for (let i = 0; i < group.Users.length; i++) {
        let userInfoGroup = group.Users[i].ID;
        //log('ID do usuário no grupo: ' + userInfoGroup);
        
        if (userId == userInfoGroup) {
            userIsInGroup = true;
            break;
        } else {
            userIsInGroup = false;
        }
    }
    
    if (userIsInGroup) {
        //log('O usuário pertence ao grupo.');
        item.Fields.Budget_Creator = 'Order Handling';
        log(item.Fields.Budget_Creator);
    } else {
        //log('O usuário NÃO pertence ao grupo.');
        item.Fields.Budget_Creator = 'EGP';
        log(item.Fields.Budget_Creator);
    }
}


// funcao otimizada - testar 

if (item.Type == 'Item') {
    var group = getGroupByID(19993);
    var userId = User.ID;
    var userIsInGroup = false;

    for (var i = 0; i < group.Users.length; i++) {
        if (userId == group.Users[i].ID) {
            userIsInGroup = true;
            break;
        }
    }
    item.Fields.Budget_Creator = userIsInGroup ? 'Order Handling' : 'EGP';
    log(item.Fields.Budget_Creator);
}
