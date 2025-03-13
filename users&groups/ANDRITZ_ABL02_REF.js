let spareParts = item.Fields.processRef;
let pkg = item.Fields.Package;
// let companyName = item.Fields.Company_Name_Aux; // metadado auxiliar criado para o item.Name da commercial proposal
let companyName = item.Fields.Company_Name;
item.Fields.Company_Name = companyName;



log("spare parts  " + spareParts)
log("PKG  " + pkg)
log("COMPANY NAME  " + item.Fields.Company_Name)

if (pkg === null || pkg === '') {
    log("1")
    var stringDeBusca = "[{'Nome_interno': 'TIPO_ITEM','Op': 0, 'Valor':'CS Item','Tipo': 0}";

    stringDeBusca = stringDeBusca + ",{'Nome_interno': 'processRef','Op': 0, 'Valor': '" + spareParts + "','Tipo': 1}";
    
    // stringDeBusca = stringDeBusca + ",{'Nome_interno': 'Company_Name','Op': 0, 'Valor': '" + companyName + "','Tipo': 1}";

    stringDeBusca = stringDeBusca + "]";

} else {
    log("2")
     var stringDeBusca = "[{'Nome_interno': 'TIPO_ITEM','Op': 0, 'Valor':'CS Item','Tipo': 0}";


    // stringDeBusca = stringDeBusca + ",{'Nome_interno': 'Nome','Op': 0, 'Valor': 'SP-00278-Pacote 1-A Yoshii-Technical Proposal','Tipo': 0}";

    stringDeBusca = stringDeBusca + ",{'Nome_interno': 'processRef','Op': 0, 'Valor': '" + spareParts + "','Tipo': 1}";
    
    stringDeBusca = stringDeBusca + ",{'Nome_interno': 'Package','Op': 0, 'Valor': '" + pkg + "','Tipo': 1}";
    
    // stringDeBusca = stringDeBusca + ",{'Nome_interno': 'Company_Name','Op': 0, 'Valor': '" + companyName + "','Tipo': 1}";

    stringDeBusca = stringDeBusca + "]";
}


var itemsSearched = searchItems(item,stringDeBusca);

for (var ii=0; ii< itemsSearched.length;ii++){
    log("ITEM SEARCHED " + itemsSearched[ii]);
    log("ITEM SEARCHED NAME " + itemsSearched[ii].Name);
}


log(JSON.stringify(itemsSearched))

var username = "api@greendocs.net";
var password = "uGMguhRZWBakNpBrEKP";
var encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));

for (var ii=0; ii< itemsSearched.length;ii++){
    
    log(itemsSearched[ii].Name + "name")
    var referencias = {};
        referencias.NomeDocumentoPai = itemsSearched[ii].Name;
        referencias.TipoItemPai = 963;
        referencias.NomeDocumento = item.Name;
        referencias.TipoRef = 733;
        referencias.TipoItemFilho = 962;
        
        var endereco = "https://abl02.greendocs.net/api/v2/references?referencias=" + JSON.stringify(referencias);
        var result = callWebService(endereco, "Basic " + encoded, "POST", "application/json", null, [], 0);
        log(result + " result ")
}



item.Fields.Proposal_Delivery_Date = item.Fields.Proposal_Delivery_Date;