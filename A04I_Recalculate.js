function AO4I_Recalculate(item) {
    //AP4I recalculate update dates
    //Calcular data preliminar
    //log(item.Fields.Event_Milestone);
    item.Fields.Preliminary_Issue_Previous = item.Fields.Preliminar_Issue;
    item.Fields.Certified_Issue_Previous = item.Fields.Final_Issue;
    
    var app4 = searchReferencedItems(item, "Appendix 4", 2);
    
    for (var i=0; i < app4.length; i++){
        
        item.Fields.Project_Name = app4[i].Fields.Project_Name;
        item.Fields.A_Commencement_Day_Replan = app4[i].Fields.A_Commencement_Day_Replan;
        item.Fields.B_Beginning_of_Civil_Works_Replan = app4[i].Fields.B_Beginning_of_Civil_Works_Replan;
        item.Fields.C_Beginning_of_Erection_Works_Replan = app4[i].Fields.C_Beginning_of_Erection_Works_Replan;
        item.Fields.D_Beginning_of_Electrical__Intrumentation_Erection_Works_Works_Replan = app4[i].Fields.D_Beginning_of_Electrical__Intrumentation_Erection_Works_Works_Replan;
        item.Fields.E_Beginning_of_Commissioning_Replan = app4[i].Fields.E_Beginning_of_Commissioning_Replan;
        item.Fields.F_Beginning_of_Electrical__Instrumentation_Commissioning_Replan = app4[i].Fields.F_Beginning_of_Electrical__Instrumentation_Commissioning_Replan;
        item.Fields.G_ECA_Replan = app4[i].Fields.G_ECA_Replan;
        item.Fields.H_Shipment_Replan = app4[i].Fields.H_Shipment_Replan;
        saveItem(item);

    }
    //data.setDate(data.getDate() + (variavel * 7))
    if (item.Fields.Event_Milestone != ""){

        switch(item.Fields.Event_Milestone){
            case "A":
                if (item.Fields.A_Commencement_Day_Replan != "") {
                    var data = new Date(item.Fields.A_Commencement_Day_Replan);
                    var datamesinicial = new Date(item.Fields.Month_start_reference_date);
                    variavel = item.Fields.Milestone_variable;
                    data.setDate(data.getDate() + (variavel));
                    item.Fields.Preliminar_Issue = data;
                    var months;
                    months = (data.getFullYear() - datamesinicial.getFullYear())*12;
                    months = months - (datamesinicial.getMonth()+1);
                    months = months + (data.getMonth()+1);
                    item.Fields.Preliminar_Month = months;
                    item.Fields.Reprogamed_item = 'Yes';
                }
            break;
            case "B":
                if (item.Fields.B_Beginning_of_Civil_Works_Replan != "") {
                    var data = new Date(item.Fields.B_Beginning_of_Civil_Works_Replan);
                    var datamesinicial = new Date(item.Fields.Month_start_reference_date);
                    variavel = item.Fields.Milestone_variable;
                    data.setDate(data.getDate() + (variavel));
                    item.Fields.Preliminar_Issue = data;
                    var months;
                    months = (data.getFullYear() - datamesinicial.getFullYear())*12;
                    months = months - (datamesinicial.getMonth()+1);
                    months = months + (data.getMonth()+1);
                    item.Fields.Preliminar_Month = months;
                    item.Fields.Reprogamed_item = 'Yes';
                }
            break;
            case "C":
                if (item.Fields.C_Beginning_of_Erection_Works_Replan != "") {
                    var data = new Date(item.Fields.C_Beginning_of_Erection_Works_Replan);
                    var datamesinicial = new Date(item.Fields.Month_start_reference_date);
                    variavel = item.Fields.Milestone_variable;
                    data.setDate(data.getDate() + (variavel));
                    item.Fields.Preliminar_Issue = data;
                    var months;
                    months = (data.getFullYear() - datamesinicial.getFullYear())*12;
                    months = months - (datamesinicial.getMonth()+1);
                    months = months + (data.getMonth()+1);
                    item.Fields.Preliminar_Month = months;
                    item.Fields.Reprogamed_item = 'Yes';
                }
            break;
            case "D":
                if (item.Fields.D_Beginning_of_Electrical__Intrumentation_Erection_Works_Works_Replan != "") {
                    var data = new Date(item.Fields.D_Beginning_of_Electrical__Intrumentation_Erection_Works_Works_Replan);
                    var datamesinicial = new Date(item.Fields.Month_start_reference_date);
                    variavel = item.Fields.Milestone_variable;
                    data.setDate(data.getDate() + (variavel));
                    item.Fields.Preliminar_Issue = data;
                    var months;
                    months = (data.getFullYear() - datamesinicial.getFullYear())*12;
                    months = months - (datamesinicial.getMonth()+1);
                    months = months + (data.getMonth()+1);
                    item.Fields.Preliminar_Month = months;
                    item.Fields.Reprogamed_item = 'Yes';
                }
            break;
            case "E":
                if (item.Fields.E_Beginning_of_Commissioning_Replan != "") {
                    var data = new Date(item.Fields.E_Beginning_of_Commissioning_Replan);
                    var datamesinicial = new Date(item.Fields.Month_start_reference_date);
                    variavel = item.Fields.Milestone_variable;
                    data.setDate(data.getDate() + (variavel));
                    item.Fields.Preliminar_Issue = data;
                    var months;
                    months = (data.getFullYear() - datamesinicial.getFullYear())*12;
                    months = months - (datamesinicial.getMonth()+1);
                    months = months + (data.getMonth()+1);
                    item.Fields.Preliminar_Month = months;
                    item.Fields.Reprogamed_item = 'Yes';
                }
            break;
            case "F":
                if (item.Fields.F_Beginning_of_Electrical__Instrumentation_Commissioning_Replan != "") {
                    var data = new Date(item.Fields.F_Beginning_of_Electrical__Instrumentation_Commissioning_Replan);
                    var datamesinicial = new Date(item.Fields.Month_start_reference_date);
                    variavel = item.Fields.Milestone_variable;
                    data.setDate(data.getDate() + (variavel));
                    item.Fields.Preliminar_Issue = data;
                    var months;
                    months = (data.getFullYear() - datamesinicial.getFullYear())*12;
                    months = months - (datamesinicial.getMonth()+1);
                    months = months + (data.getMonth()+1);
                    item.Fields.Preliminar_Month = months;
                    item.Fields.Reprogamed_item = 'Yes';
                }
            break;
            case "G":
                if (item.Fields.G_ECA_Replan != "") {
                    var data = new Date(item.Fields.G_ECA_Replan);
                    var datamesinicial = new Date(item.Fields.Month_start_reference_date);
                    variavel = item.Fields.Milestone_variable;
                    data.setDate(data.getDate() + (variavel));
                    item.Fields.Preliminar_Issue = data;
                    var months;
                    months = (data.getFullYear() - datamesinicial.getFullYear())*12;
                    months = months - (datamesinicial.getMonth()+1);
                    months = months + (data.getMonth()+1);
                    item.Fields.Preliminar_Month = months;
                    item.Fields.Reprogamed_item = 'Yes';
                }
            break;
            case "H":
                if (item.Fields.H_Shipment_Replan != "") {
                    var data = new Date(item.Fields.H_Shipment_Replan);
                    var datamesinicial = new Date(item.Fields.Month_start_reference_date);
                    variavel = item.Fields.Milestone_variable;
                    data.setDate(data.getDate() + (variavel));
                    item.Fields.Preliminar_Issue = data;
                    var months;
                    months = (data.getFullYear() - datamesinicial.getFullYear())*12;
                    months = months - (datamesinicial.getMonth()+1);
                    months = months + (data.getMonth()+1);
                    item.Fields.Preliminar_Month = months;
                    item.Fields.Reprogamed_item = 'Yes';
                }
            break;
        }
    }else{
        item.Fields.Preliminar_Issue = "";
    }
    
    //Calcular data final
    if (item.Fields.Event_Milestone_Final != ""){
        switch(item.Fields.Event_Milestone_Final) { 
            case "A":
                if (item.Fields.A_Commencement_Day_Replan != ""){
                    var data = new Date(item.Fields.A_Commencement_Day_Replan);
                    var datamesinicial = new Date(item.Fields.Month_start_reference_date);
                    variavel = item.Fields.Milestone_variable_Final;
                    data.setDate(data.getDate() + (variavel));
                    item.Fields.Final_Issue = data;
                    var months;
                    months = (data.getFullYear() - datamesinicial.getFullYear())*12;
                    months = months - (datamesinicial.getMonth()+1);
                    months = months + (data.getMonth()+1);
                    item.Fields.Final_Month = months;
                    item.Fields.Reprogamed_item = 'Yes';
                }
            break;
            case "B":
                if (item.Fields.B_Beginning_of_Civil_Works_Replan != ""){
                    var data = new Date(item.Fields.B_Beginning_of_Civil_Works_Replan);
                    var datamesinicial = new Date(item.Fields.Month_start_reference_date);
                    variavel = item.Fields.Milestone_variable_Final;
                    data.setDate(data.getDate() + (variavel));
                    item.Fields.Final_Issue = data;
                    var months;
                    months = (data.getFullYear() - datamesinicial.getFullYear())*12;
                    months = months - (datamesinicial.getMonth()+1);
                    months = months + (data.getMonth()+1);
                    item.Fields.Final_Month = months;
                    item.Fields.Reprogamed_item = 'Yes';
                }
            break;
            case "C":
                if (item.Fields.C_Beginning_of_Erection_Works_Replan != "") {
                    var data = new Date(item.Fields.C_Beginning_of_Erection_Works_Replan);
                    var datamesinicial = new Date(item.Fields.Month_start_reference_date);
                    variavel = item.Fields.Milestone_variable_Final;
                    data.setDate(data.getDate() + (variavel));
                    item.Fields.Final_Issue = data;
                    var months;
                    months = (data.getFullYear() - datamesinicial.getFullYear())*12;
                    months = months - (datamesinicial.getMonth()+1);
                    months = months + (data.getMonth()+1);
                    item.Fields.Final_Month = months;
                    item.Fields.Reprogamed_item = 'Yes';
                }
            break;
            case "D":
                if (item.Fields.D_Beginning_of_Electrical__Intrumentation_Erection_Works_Works_Replan != "") {
                    var data = new Date(item.Fields.D_Beginning_of_Electrical__Intrumentation_Erection_Works_Works_Replan);
                    var datamesinicial = new Date(item.Fields.Month_start_reference_date);
                    variavel = item.Fields.Milestone_variable_Final;
                    data.setDate(data.getDate() + (variavel));
                    item.Fields.Final_Issue = data;
                    var months;
                    months = (data.getFullYear() - datamesinicial.getFullYear())*12;
                    months = months - (datamesinicial.getMonth()+1);
                    months = months + (data.getMonth()+1);
                    item.Fields.Final_Month = months;
                    item.Fields.Reprogamed_item = 'Yes';
                }
            break;
            case "E":
                if (item.Fields.E_Beginning_of_Commissioning_Replan != "") {
                    var data = new Date(item.Fields.E_Beginning_of_Commissioning_Replan);
                    var datamesinicial = new Date(item.Fields.Month_start_reference_date);
                    variavel = item.Fields.Milestone_variable_Final;
                    data.setDate(data.getDate() + (variavel));
                    item.Fields.Final_Issue = data;
                    var months;
                    months = (data.getFullYear() - datamesinicial.getFullYear())*12;
                    months = months - (datamesinicial.getMonth()+1);
                    months = months + (data.getMonth()+1);
                    item.Fields.Final_Month = months;
                    item.Fields.Reprogamed_item = 'Yes';
                }
            break;
            case "F":
                if (item.Fields.F_Beginning_of_Electrical__Instrumentation_Commissioning_Replan != ""){
                    var data = new Date(item.Fields.F_Beginning_of_Electrical__Instrumentation_Commissioning_Replan);
                    var datamesinicial = new Date(item.Fields.Month_start_reference_date);
                    variavel = item.Fields.Milestone_variable_Final;
                    data.setDate(data.getDate() + (variavel));
                    item.Fields.Final_Issue = data;
                    var months;
                    months = (data.getFullYear() - datamesinicial.getFullYear())*12;
                    months = months - (datamesinicial.getMonth()+1);
                    months = months + (data.getMonth()+1);
                    item.Fields.Final_Month = months;
                    item.Fields.Reprogamed_item = 'Yes';
                }
            break;
            case "G":
                if (item.Fields.G_ECA_Replan != "") {
                    var data = new Date(item.Fields.G_ECA_Replan);
                    var datamesinicial = new Date(item.Fields.Month_start_reference_date);
                    variavel = item.Fields.Milestone_variable_Final;
                    data.setDate(data.getDate() + (variavel));
                    item.Fields.Final_Issue = data;
                    var months;
                    months = (data.getFullYear() - datamesinicial.getFullYear())*12;
                    months = months - (datamesinicial.getMonth()+1);
                    months = months + (data.getMonth()+1);
                    item.Fields.Final_Month = months;
                    item.Fields.Reprogamed_item = 'Yes';
                }
                
            break;
            case "H":
                if (item.Fields.H_Shipment_Replan != "") {
                    var data = new Date(item.Fields.H_Shipment_Replan);
                    var datamesinicial = new Date(item.Fields.Month_start_reference_date);
                    variavel = item.Fields.Milestone_variable_Final;
                    data.setDate(data.getDate() + (variavel));
                    item.Fields.Final_Issue = data;
                    var months;
                    months = (data.getFullYear() - datamesinicial.getFullYear())*12;
                    months = months - (datamesinicial.getMonth()+1);
                    months = months + (data.getMonth()+1);
                    item.Fields.Final_Month = months;
                    item.Fields.Reprogamed_item = 'Yes';
                }
            break;
        }
    } else {
        item.Fields.Final_Issue = "";
    }
}