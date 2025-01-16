function SendToProjects(item) {

    log("Início do script: " + item.Name);
    var projeto = searchReferencedItems(item, "Projects", 1);

    var username = "stdcom@greendocs.net";
    var password = "bBrDLXTcDaLswmeDLvkVhDVRwMtGGeFJhyP";
    var encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));

    //O For abaixo foi comantado para que envie apenas uma vez o Standard para o ambiente do projeto.
    //referencia com os projeto mantém, mas mostra somente um documento no ambiente destino
    
    
    log("Name " + item.Name);
    log("Revision " + item.Fields.Revision);

    for (var i = 0; i < projeto.length; i++) {
        
        log("Process ID " + projeto[i].Fields.Process_ID);
        log("Item Type ID " + projeto[i].Fields.Item_Type_ID);
        log("TAM " + projeto.length);


        let itemTypeProjectID = projeto[i].Fields.Item_Type_Project_ID;

        let referenceTypeID = projeto[i].Fields.Reference_Type_ID;
        
        
        
        //var i = 0;
        
        //IF para previnir erros na chamada do webService da linha 150 (linha de documento = JSON)
        //Alguns projetos estavam com ID_TipoItem nulo, causando quebra na chamada e acabando com a execução do Script
        if ((projeto[i].Fields.Process_ID !== null || projeto[i].Fields.Process_ID !== '') && (projeto[i].Fields.Item_Type_ID !== null || projeto[i].Fields.Item_Type_ID !== '')) {
            
            //log("Entrou no for. Projeto: " + projeto[i].Name);

            //log(projeto[i].Fields.Process_ID);
            //log(projeto[i].Fields.Item_Type_ID);


            var campos = {};
            campos['Customer_Number'] = item.Fields.Customer_Number;
            campos['Title_in_English'] = item.Fields.Title_in_English;
            campos['Product_Group'] = item.Fields.Product_Group;
            campos['Location'] = item.Fields.Location;
            campos['Customer_Equipment_Specific_Name'] = item.Fields.Customer_Equipment_Specific_Name;
            campos['Position_Number'] = item.Fields.Position_Number;
            campos['PO_Number'] = item.Fields.PO_Number;
            campos['Revision'] = item.Fields.Revision;
            campos['Revision_Date'] = item.Fields.Revision_Date;
            campos['Status'] = item.Fields.Status;
            campos['Purpose_When_Received'] = item.Fields.Purpose_When_Received;
            campos['Sender_Company'] = item.Fields.Sender_Company;
            campos['Supplier_Number'] = item.Fields.Supplier_Number;
            campos['Sender_Name'] = item.Fields.Sender_Name;
            campos['Transmittal_Number_When_Received'] = item.Fields.Transmittal_Number_When_Received;
            campos['Datetime_When_Received'] = item.Fields.Datetime_When_Received;
            campos['Comments'] = item.Fields.Comments;
            campos['Version'] = item.Fields.Version;
            campos['Confidential'] = item.Fields.Confidential;
            campos['Work_Phase'] = item.Fields.Work_Phase;
            campos['Andritz_Doc_Number'] = item.Fields.Andritz_Doc_Number;
            campos['ADMS_Doc_Number'] = item.Fields.ADMS_Doc_Number;
            campos['SubSupplier'] = item.Fields.SubSupplier;
            campos['Manufacturer'] = item.Fields.Manufacturer;
            campos['Digital_Certified'] = item.Fields.Digital_Certified;
            campos['External_Original_Copy_Storage_Code'] = item.Fields.External_Original_Copy_Storage_Code;
            campos['Original_Copy_Purge_Date'] = item.Fields.Original_Copy_Purge_Date;
            campos['Prepared_by'] = item.Fields.Prepared_by;
            campos['Revision_Caused__by'] = item.Fields.Revision_Caused__by;
            campos['Revision_Content'] = item.Fields.Revision_Content;
            campos['Filename'] = item.Fields.Filename;
            //campos['WBS_Code'] = item.Fields.WBS_Code;
            campos['Approved_by_Authority'] = item.Fields.Approved_by_Authority;
            campos['Discipline'] = item.Fields.Discipline;
            campos['Single_Tag_1'] = item.Fields.Single_Tag_1;
            campos['Single_Tag_2'] = item.Fields.Single_Tag_2;
            campos['Single_Tag_3'] = item.Fields.Single_Tag_3;
            campos['Single_Tag_4'] = item.Fields.Single_Tag_4;
            campos['Single_Tag_5'] = item.Fields.Single_Tag_5;
            //campos['TAGs'] = item.Fields.TAGs;
            campos['SubDiscipline'] = item.Fields.SubDiscipline;
            campos['Old_System_Doc_Number'] = item.Fields.Old_System_Doc_Number;
            campos['Customer_Status'] = item.Fields.Customer_Status;
            campos['Customer_Discipline'] = item.Fields.Customer_Discipline;
            campos['Customer_Document_Type'] = item.Fields.Customer_Document_Type;
            campos['Customer_Area'] = item.Fields.Customer_Area;
            campos['Contractual_pendalty'] = item.Fields.Contractual_pendalty;
            campos['Contractual_item'] = item.Fields.Contractual_item;
            campos['Contractual_doc_item'] = item.Fields.Contractual_doc_item;
            campos['Document_Type'] = item.Fields.Document_Type;
            campos['Contractual_doc_item_delivery_date'] = item.Fields.Contractual_doc_item_delivery_date;
            campos['Author'] = item.Fields.Author;
            campos['Document_Subtype'] = item.Fields.Document_Subtype;
            campos['Area'] = item.Fields.Area;
            campos['Title_Local_Language'] = item.Fields.Title_Local_Language;
            campos['SubArea'] = item.Fields.SubArea;
            campos['Media'] = item.Fields.Media;
            //campos['Purpose'] = item.Fields.Purpose;
            campos['Export_Name'] = item.Fields.Export_Name;
            campos['Project_Number'] = item.Fields.Project_Number;
            campos['Project_Name'] = item.Fields.Project_Name;
            campos['Customer_Name'] = item.Fields.Customer_Name;
            campos['Effective_Date'] = item.Fields.Effective_Date;
            campos['Closure_Date'] = item.Fields.Closure_Date;
            campos['Project_Startup_Date'] = item.Fields.Project_Startup_Date;
            campos['Mill_City'] = item.Fields.Mill_City;
            campos['Mill_Country'] = item.Fields.Mill_Country;
            campos['Mill_Code'] = item.Fields.Mill_Code;
            campos['Project_Manager'] = item.Fields.Project_Manager;
            campos['Documentation_Analyst'] = item.Fields.Documentation_Analyst;
            campos['Project_Status'] = item.Fields.Project_Status;
            campos['Area_Process'] = item.Fields.Area_Process;
            campos['Category'] = item.Fields.Category;
            campos['Scope'] = item.Fields.Scope;
            campos['Project_Scope_Description'] = item.Fields.Project_Scope_Description;
            campos['Process_ID'] = projeto[i].Fields.Process_ID;
            campos['Item_Type_ID'] = projeto[i].Fields.Item_Type_ID;
            campos['Standard_Name'] = item.Fields.Standard_Name;
            campos['Assing_to_project'] = projeto[i].Name;
            campos['Origin'] = item.Fields.Origin;
            campos['Customer'] = item.Fields.Customer;
            campos['Destination_Company'] = item.Fields.Destination_Company;
            campos['Selected_Project'] = item.Fields.Selected_Project;
            //campos['Transmittal_Distribution_Groups'] = item.Fields.Transmittal_Distribution_Groups;
            campos['emission_date'] = item.Fields.emission_date;
            //campos['Site_Team'] = item.Fields.Site_Team;
            campos['Subject'] = item.Fields.Subject;
            campos['Email_content'] = item.Fields.Email_content;
            if (item.Fields.Location == 'Internal Standards') {
                campos['2'] = 'Internal Standards';
            } else if (item.Fields.Location == 'National Standards') {
                campos['2'] = 'National Standards';
            } else {
                campos['2'] = 'Customer Standards';
            }

            var endereco = "https://andritz-abl.greendocs.net/api/v2/items?TipoItem=" + projeto[i].Fields.Item_Type_ID + "&ID_Processo=" + projeto[i].Fields.Process_ID
                + "&NomeDocumento=" + item.Name + "&RevisaoDocumento=" + item.Fields.Revision + "&CriarSeNaoExistir=1&GerarRevisao=2&Usuario=stdcom@greendocs.net";

            log ("Endereco " + endereco);
            var camposStr = JSON.stringify(campos);

            //log("CamposStr pós JSON Campos: "+camposStr);
            //log("Campos simples: "+campos);

            //substitui null por "" como paliativo para o bug de quando a API recebe um campo com valor null
            var pos = camposStr.indexOf('null');
            while (pos > -1) {
                camposStr = camposStr.replace('null', '""');
                pos = camposStr.indexOf('null');
            }
            
            //log("Campos" + camposStr);

            var body = "campos=" + encodeURIComponent(camposStr);

            var resultado = callWebService(endereco, "Basic " + encoded, "PUT", "application/x-www-form-urlencoded", body, [], 0);
            log("Resultado da chamada: " + resultado);

            var documento = JSON.parse(resultado);

            var enderecoArquivo = "https://andritz-abl.greendocs.net/api/v2/files?TipoItem=" + projeto[i].Fields.Item_Type_ID + "&ID_Documento=" + documento.ID_Documento;
            
            //log ("Endereco Arquivo " + enderecoArquivo);

            var resultadoArquivo = callWebService(enderecoArquivo, "Basic " + encoded, "POST", "application/json", '', [], item.ID);
            log ("Resultado upload: " + resultadoArquivo);
        }else{
            log("O projeto "+ projeto[i].Name + " não possui ID TipoItem ou ID de Processo");
        }
    }
    
    
    var iditempai = 106; //standard ambiente
    var iditemfilho = 8; //project
    var idtiporef = 6; // referencia 
    
    
    var referencias = {};
    referencias.NomeDocumentoPai = item.Name;
    referencias.TipoItemPai = iditempai;
    referencias.NomeDocumento = project[0].nome;
    referencias.TipoRef = idtiporef;
    referencias.TipoItemFilho = iditemfilho;
    var endereco = "https://" + servidor + "/api/v2/references?referencias=" + JSON.stringify(referencias);
    callWebService(endereco, "Basic " + encoded, "POST", "application/json", null, [], 0);
    
    
}
