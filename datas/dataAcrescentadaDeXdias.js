// const arrayVigenciaTreinamento = ['1 Semana', '1 Mês', '2 Meses', '3 Meses', '6 Meses', '1 Ano', '2 Anos', '5 Anos'];

const vigenciaTreinamento = '5 Anos'; // item.Fields.Vigencia_do_Treinamento;

const dataNovoTreinamento = new Date(); //new Date(item.Fields.Data_de_Distribuicao);



switch(vigenciaTreinamento) {
    case '1 Semana':
        dataNovoTreinamento.setDate(dataNovoTreinamento.getDate() + 7);
        console.log("dataNovoTreinamento + 7", dataNovoTreinamento);
        break;
    case '1 Mês':
        dataNovoTreinamento.setDate(dataNovoTreinamento.getDate() + 30);
        console.log("dataNovoTreinamento + 30", dataNovoTreinamento);
        break;
    case '2 Meses':
        dataNovoTreinamento.setDate(dataNovoTreinamento.getDate() + 60);
        console.log("dataNovoTreinamento + 60", dataNovoTreinamento);
        break;
    case '3 Meses':
        dataNovoTreinamento.setDate(dataNovoTreinamento.getDate() + 90);
        console.log("dataNovoTreinamento + 90", dataNovoTreinamento);
        break;
    case '6 Meses':
        dataNovoTreinamento.setDate(dataNovoTreinamento.getDate() + 180);
        console.log("dataNovoTreinamento + 180", dataNovoTreinamento);
        break;
    case '1 Ano':
        dataNovoTreinamento.setDate(dataNovoTreinamento.getDate() + 365);
        console.log("dataNovoTreinamento + 365", dataNovoTreinamento);
        break;
    case '2 Anos':
        dataNovoTreinamento.setDate(dataNovoTreinamento.getDate() + 730);
        console.log("dataNovoTreinamento + 730", dataNovoTreinamento);
        break;
    case '5 Anos':
        dataNovoTreinamento.setDate(dataNovoTreinamento.getDate() + 1825);
        console.log("dataNovoTreinamento + 1825", dataNovoTreinamento);
        break;
}

    
// vencimento.setDate(vencimento.getDate() + 30);
// console.log("vencimento + 30", vencimento);


// let vencimento = new Date();
// console.log(vencimento);
