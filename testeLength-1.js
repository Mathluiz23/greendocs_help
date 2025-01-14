var referencia = [teste1 , teste2 , teste3 ,];
item.Fields.Referencia_Auxiliar = referencia;
var result = "";
for (let i = 0; i < referencia.length; i++) {
    result += referencia[i];
    if (i < referencia.length - 1) {
        result += " , ";  
    }
}
 
console.log(result);
