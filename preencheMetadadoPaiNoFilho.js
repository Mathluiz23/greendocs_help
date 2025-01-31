   // função utilizada no reference create
   
   // função realizado pois trigger de preencher metadado do pai no filho não funcionou
   if (item.Type == 'Company'  && reference.Type == "Contacts") {
    log("tipo de item :" + item.Type);
    log("tipo de referencia :" + reference.Type);
    log("campo de referencia :" + item.Fields.Company_Name);
    log("entrou aqui")
    reference.Fields.Company_Name = item.Fields.Company_Name;
    reference.Fields.Short_Name = item.Fields.Short_Name;
    saveItem(reference);
}