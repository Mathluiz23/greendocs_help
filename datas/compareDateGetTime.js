function compararDatas(data1, data2) {
 
    var dataGreendocs = item.Fields.__________;

    var day = parseInt(prazo.substring(0, 2), 10);
    var month = parseInt(prazo.substring(3, 5), 10) - 1;
    var year = parseInt(prazo.substring(6, 10), 10);

    var inputDate = new Date(year, month, day);

    var date2 = new Date(data2);

    if (inputDate.getTime() < date2.getTime()) {
        return "A data 1 é anterior à data 2.";
    } else if (inputDate.getTime() > date2.getTime()) {
        return "A data 1 é posterior à data 2.";
    } else {
        return "As duas datas são iguais.";
    }
 }

 var data1 = "2025-01-01";
 var data2 = "2025-01-06";
 var resultado = compararDatas(data1, data2);
 console.log(resultado);