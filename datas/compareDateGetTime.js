function compararDatas(data1, data2) {
 
    var date1 = new Date(data1);
    var date2 = new Date(data2);

    if (date1.getTime() < date2.getTime()) {
        return "A data 1 é anterior à data 2.";
    } else if (date1.getTime() > date2.getTime()) {
        return "A data 1 é posterior à data 2.";
    } else {
        return "As duas datas são iguais.";
    }
 }

 var data1 = "2025-01-01";
 var data2 = "2025-01-06";
 var resultado = compararDatas(data1, data2);
 console.log(resultado);