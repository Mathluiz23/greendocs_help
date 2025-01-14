function Sync_Project_ECS(item) {
    
    log("ECS Enabled: " + item.Fields.ECS_Enabled);
    
    if (item.Fields.ECS_Enabled) {
        var username = "ECSService"; 
        var password = ""; // defined in abl 02
        
        var projectNumber = item.Fields.Project_Number;
        
        var baseUrl = "https://andritzecs.greendocs.net";
        
        log(projectNumber);
       
        var enderecoToken = baseUrl + "/token";
       
        var token = callWebService(enderecoToken, "", "POST", "application/x-www-form-urlencoded", "username="+username+"&password="+password+"&grant_type=password", []);
        token = JSON.parse(token);
       
        var enderecoProject = baseUrl + "/api/Project?idProjeto=47&projectNumber=" + projectNumber + "&idTipoItemProject=366";
        
        log(token.access_token);
        log(enderecoProject);
        
        var obj = {};
    
        var retorno = callWebService(enderecoProject, "Bearer " + token.access_token, "POST", "application/json", JSON.stringify(obj), []);
    }
}