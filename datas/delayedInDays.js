function Delayed_in_Days(item) {
    
    let preliminar = new Date(item.Fields.Preliminar_Issue);
    let final = new Date(item.Fields.Final_Issue);
    let hoje = new Date();
    
    if ((item.Fields.Preliminar_emitido == 'Não') || (item.Fields.Preliminar_emitido === '')) {
        //log("PRELIMINAR NÃO EMITIDO");
        if (preliminar < hoje ) {
            //log("Entrou aqui 1");
            let calculo = hoje - preliminar;
            let diffDays = Math.floor(calculo / 86400000); // days
            diffDays++;
            //log("Delayed_in_Days " + diffDays);
            item.Fields.Delayed_in_Days = diffDays;
            item.Fields.Delayed_in_Days_Aux	= diffDays;
            
        }
    } else if ((item.Fields.Preliminar_emitido == 'Sim')  || (item.Fields.Preliminar_emitido == 'Atraso')) {
        item.Fields.Delayed_in_Days = '';
        item.Fields.Delayed_in_Days_Aux = '';
        //log("entrou else 1");
    }
    
    if ((item.Fields.Certified_emitido == 'Não') || (item.Fields.Certified_emitido === '')) {
        //log("CERTIFICADO NÃO EMITIDO");
        if (final < hoje ) {
            //log("Entrou aqui 2 ");
            let calculo = hoje - final;
            let diffDays = Math.floor(calculo / 86400000); // days
            diffDays++;
            item.Fields.Delayed_in_Days_final = diffDays;
            item.Fields.Delayed_in_Days_Aux_F = diffDays;
            //log("Delayed_in_Days Final " + diffDays);
        }
    } else if ((item.Fields.Certified_emitido == 'Sim')  || (item.Fields.Certified_emitido == 'Atraso')) {
        item.Fields.Delayed_in_Days_final = '';
        item.Fields.Delayed_in_Days_Aux_F = '';
        //log("entrou else 2");
    }
    
}