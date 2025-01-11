function Acess_Groups_Site(item) {
    try {
       
        //log("Inicio " + item.Name);
        
        var docsrefs = searchReferencedItems(item, "", 1);
        //log(docsrefs.length);
        var companyref = searchReferencedItems(item, "", 2);
        //log(companyref.length);
        
        for (var ii=0; ii< companyref.length;ii++){
            //log("ii: " + ii);
            if (item.Fields.Destination_Company[0] == companyref[ii].Name){
                //log("antes do push");
                var sn = companyref[ii].Fields.Short_Name;
            }
        }
        
        for (var i=0; i< docsrefs.length;i++){
            //log(docsrefs[i].Name);
            
           //log(item.Fields.Destination_Company[0]);
                
            if (docsrefs[i].Fields.Access_Groups_Site == "" || docsrefs[i].Fields.Access_Groups_Site == null){
                var acesso = [];
            } else {
                var acesso = docsrefs[i].Fields.Access_Groups_Site;
            }
            
            //log(JSON.stringify(acesso));
            
            if (acesso.indexOf(sn) == -1){
                acesso.push(sn);
                //log(JSON.stringify(acesso));
            }
            
            
            //log(JSON.stringify(acesso));
            docsrefs[i].Fields.Access_Groups_Site = acesso;
            //log(JSON.stringify(docsrefs[i].Fields.Access_Groups_Site));
            saveItem(docsrefs[i]);
        }
       
        //log("Fim " + item.Name);
        
    } catch (err){
        log(err);
    }
}