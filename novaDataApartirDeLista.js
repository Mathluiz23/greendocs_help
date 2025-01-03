// criada uma nova data a partir de um campo data e uma campo lista fixa de opções

function ajustaDataVigenciaTreinamento(item) {
    let vigenciaTreinamento = item.Fields.Vigencia_do_Treinamento;
        
    let dias;

    switch(vigenciaTreinamento) {
        case '1 Semana':
            dias = 7;
            break;
        case '1 Mês':
            dias = 30;
            break;
        case '2 Meses':
            dias = 60;
            break;
        case '3 Meses':
            dias = 90;
            break;
        case '6 Meses':
            dias = 180;
            break;
        case '1 Ano':
            dias = 365;
            break;
        case '2 Anos':
            dias = 730;
            break;
        case '5 Anos':
            dias = 1825;
            break;
    }
    
    let novaData = new Date(item.Fields.Vigencia_do_Documento);
        
    novaData.setDate(novaData.getDate() + dias);
    log(novaData)
    item.Fields.Vigencia_do_Treinamento_Aux = novaData;
    item.Fields.Data_da_Proxima_Reciclagem = novaData;
    log(item.Fields.Vigencia_do_Treinamento_Aux)
}