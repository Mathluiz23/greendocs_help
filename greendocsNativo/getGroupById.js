let group = getGroupByID(19993);
    //log('id do grupo' + group)

var grupo = getGroupByID(id_grupo);
log(grupo.Name);
    for (var i = 0; i < grupo.Users.length; i++) {
        log(grupo.Users[i].Name + ', ' + grupo.Users[i].Login + ", " + grupo.Users[i].ID);
    }