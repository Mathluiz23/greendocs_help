function compararDatas(data1, data2) {
    var partesData1 = data1.split("-");
    var partesData2 = data2.split("-");

    
    var numData1 = parseInt(partesData1[0] + partesData1[1] + partesData1[2], 10);
    var numData2 = parseInt(partesData2[0] + partesData2[1] + partesData2[2], 10);
   

    if (numData1 < numData2) {
        return "A data 1 é anterior à data 2.";
    } else if (numData1 > numData2) {
        return "A data 1 é posterior à data 2.";
    } else {
        return "As duas datas são iguais.";
    }
 }

 var data1 = "2025-01-01";
 var data2 = "2025-01-06";
 var resultado = compararDatas(data1, data2);
 console.log(resultado);