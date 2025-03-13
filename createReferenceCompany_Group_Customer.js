function createReference(item) {
    
    let username = "api@greendocs.net";
    let password = "";
    let encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));
    
    //https://abl02.greendocs.net/api/v2/Referencias?Referencias=
    /*
    "NomeDocumentoPai": "Nome do documento pai",
    "RevisaoDocumentoPai": "revisao do documento pai",
    "TipoItemPai": "Id do tipo do item do documento pai",
    "TipoRef": "Id do tipo de referencia entre os documentos",
    "NomeDocumento": "Nome do documento filho",
    "RevisaoDocumentoFilho": "revisão do documento filho",
    "TipoItemFilho": "id do tipo de item filho"
    */
    
    let group = item.Fields.Users_Group;
    
    log("grupo " + group.length)
    
    
        for ( let i = 0; i < group.length; i++) {
            var stringDeBusca = "[{'Nome_interno': 'TIPO_ITEM','Op': 0, 'Valor':'Company','Tipo': 0}";
        
            stringDeBusca = stringDeBusca + ",{'Nome_interno': 'Short_Name','Op': 0, 'Valor': '" + group[i] + "','Tipo': 1}";
        
            stringDeBusca = stringDeBusca + "]";
        
        
            var itemsSearched = searchItems(item,stringDeBusca);
            
            if(itemsSearched.length === 0) {
                 var stringDeBusca = "[{'Nome_interno': 'TIPO_ITEM','Op': 0, 'Valor':'Group','Tipo': 0}";
        
                stringDeBusca = stringDeBusca + ",{'Nome_interno': 'Name_group','Op': 0, 'Valor': '" + group[i] + "','Tipo': 1}";
        
                stringDeBusca = stringDeBusca + "]";
        
        
                var itemsSearched = searchItems(item,stringDeBusca);
            }
            
            if(itemsSearched.length === 0) {
                var stringDeBusca = "[{'Nome_interno': 'TIPO_ITEM','Op': 0, 'Valor':'Customer','Tipo': 0}";
        
                stringDeBusca = stringDeBusca + ",{'Nome_interno': 'Short_Name_Customer','Op': 0, 'Valor': '" + group[i] + "','Tipo': 1}";
            
                stringDeBusca = stringDeBusca + "]";
            
            
                var itemsSearched = searchItems(item,stringDeBusca);
            
            }
            
                
            for (let x = 0; x < itemsSearched.length; x++) {
                log("11" + itemsSearched[x].Name);
    
                log("10" + itemsSearched[x].Type);
                
                if(itemsSearched[x].Type === 'Company') {
                    let referencias = {};
                    referencias.NomeDocumentoPai = itemsSearched[x].Name;
                    referencias.TipoItemPai = 8;
                    referencias.TipoRef = 119;
                    referencias.NomeDocumento = item.Name;
                    referencias.TipoItemFilho = 7;
                        
                    let endereco = "https://abl02.greendocs.net/api/v2/references?referencias=" + JSON.stringify(referencias);
                    let resultado = callWebService(endereco, "Basic " + encoded, "POST", "application/json", null, [], 0);
                    log(resultado);
                }
                
                if(itemsSearched[x].Type === 'Group') {
                    let referencias = {};
                    referencias.NomeDocumentoPai = itemsSearched[x].Name;
                    referencias.TipoItemPai = 217;
                    referencias.TipoRef = 682;
                    referencias.NomeDocumento = item.Name;
                    referencias.TipoItemFilho = 7;
                        
                    let endereco = "https://abl02.greendocs.net/api/v2/references?referencias=" + JSON.stringify(referencias);
                    let resultado = callWebService(endereco, "Basic " + encoded, "POST", "application/json", null, [], 0);
                    log(resultado);
                }
                
                 
                if(itemsSearched[x].Type === 'Customer') {
                    let referencias = {};
                    referencias.NomeDocumentoPai = itemsSearched[x].Name;
                    referencias.TipoItemPai = 907;
                    referencias.TipoRef = 682;
                    referencias.NomeDocumento = item.Name;
                    referencias.TipoItemFilho = 7;
                        
                    let endereco = "https://abl02.greendocs.net/api/v2/references?referencias=" + JSON.stringify(referencias);
                    let resultado = callWebService(endereco, "Basic " + encoded, "POST", "application/json", null, [], 0);
                    log(resultado);
                }
            }
            
        }
        
        
        
    
    
      
         
    

    
}