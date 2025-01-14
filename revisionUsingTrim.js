function Revisao(item) {
    // Apesar no nome deste script ser Revisão, ele deve ser utilizado também na criação
    item.RevisionNumber = item.Fields.Revision;
    item.Fields.Revision_Aux = item.Fields.Revision;

    var Cnumber = item.Fields.Customer_Number;
    //log(Cnumber);
    var Fnumber = item.Fields.Supplier_Number;
    var Anumber = item.Name;
    
    if (Cnumber !== '') {
        item.Fields.Export_Name = Cnumber.trim();
    } else if (Fnumber !== '') {
        item.Fields.Export_Name = Fnumber.trim();
    } else {
        item.Fields.Export_Name = Anumber.trim();
    }
}