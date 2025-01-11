function AO4I_Recalculate(item) {
    // Atualiza datas anteriores
    item.Fields.Preliminary_Issue_Previous = item.Fields.Preliminar_Issue;
    item.Fields.Certified_Issue_Previous = item.Fields.Final_Issue;

    // Recupera dados do "Appendix 4" e atualiza os campos do item
    const app4 = searchReferencedItems(item, "Appendix 4", 2);
    if (app4.length) {
        Object.assign(item.Fields, {
            Project_Name: app4[0].Fields.Project_Name,
            A_Commencement_Day_Replan: app4[0].Fields.A_Commencement_Day_Replan,
            B_Beginning_of_Civil_Works_Replan: app4[0].Fields.B_Beginning_of_Civil_Works_Replan,
            C_Beginning_of_Erection_Works_Replan: app4[0].Fields.C_Beginning_of_Erection_Works_Replan,
            D_Beginning_of_Electrical__Intrumentation_Erection_Works_Works_Replan: app4[0].Fields.D_Beginning_of_Electrical__Intrumentation_Erection_Works_Works_Replan,
            E_Beginning_of_Commissioning_Replan: app4[0].Fields.E_Beginning_of_Commissioning_Replan,
            F_Beginning_of_Electrical__Instrumentation_Commissioning_Replan: app4[0].Fields.F_Beginning_of_Electrical__Instrumentation_Commissioning_Replan,
            G_ECA_Replan: app4[0].Fields.G_ECA_Replan,
            H_Shipment_Replan: app4[0].Fields.H_Shipment_Replan,
        });
        saveItem(item);
    }

    // Função para calcular datas e meses com base no marco
    const calculateDates = (fieldDate, milestoneVar, outputField, monthField) => {
        if (!fieldDate) return;
        const data = new Date(fieldDate);
        const referenceDate = new Date(item.Fields.Month_start_reference_date);
        data.setDate(data.getDate() + milestoneVar);
        const months = (data.getFullYear() - referenceDate.getFullYear()) * 12 
                     + data.getMonth() - referenceDate.getMonth();
        Object.assign(item.Fields, {
            [outputField]: data,
            [monthField]: months,
            Reprogamed_item: 'Yes',
        });
    };

    // Processa data preliminar
    if (item.Fields.Event_Milestone) {
        const milestoneMap = {
            A: "A_Commencement_Day_Replan",
            B: "B_Beginning_of_Civil_Works_Replan",
            C: "C_Beginning_of_Erection_Works_Replan",
            D: "D_Beginning_of_Electrical__Intrumentation_Erection_Works_Works_Replan",
            E: "E_Beginning_of_Commissioning_Replan",
            F: "F_Beginning_of_Electrical__Instrumentation_Commissioning_Replan",
            G: "G_ECA_Replan",
            H: "H_Shipment_Replan",
        };
        const field = milestoneMap[item.Fields.Event_Milestone];
        calculateDates(item.Fields[field], item.Fields.Milestone_variable, "Preliminar_Issue", "Preliminar_Month");
    } else {
        item.Fields.Preliminar_Issue = "";
    }

    // Processa data final
    if (item.Fields.Event_Milestone_Final) {
        const milestoneMap = {
            A: "A_Commencement_Day_Replan",
            B: "B_Beginning_of_Civil_Works_Replan",
            C: "C_Beginning_of_Erection_Works_Replan",
            D: "D_Beginning_of_Electrical__Intrumentation_Erection_Works_Works_Replan",
            E: "E_Beginning_of_Commissioning_Replan",
            F: "F_Beginning_of_Electrical__Instrumentation_Commissioning_Replan",
            G: "G_ECA_Replan",
            H: "H_Shipment_Replan",
        };
        const field = milestoneMap[item.Fields.Event_Milestone_Final];
        calculateDates(item.Fields[field], item.Fields.Milestone_variable_Final, "Final_Issue", "Final_Month");
    } else {
        item.Fields.Final_Issue = "";
    }
}
