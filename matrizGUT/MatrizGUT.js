// função base para a criação de uma matriz GUT - altera e ocyan
var matrizGUT = [
    { descricao: "Problema 1", gravidade: 5, urgencia: 4, tendencia: 3 },
    { descricao: "Problema 2", gravidade: 3, urgencia: 5, tendencia: 2 },
    { descricao: "Problema 3", gravidade: 4, urgencia: 4, tendencia: 4 }
 ];
 // calcular as prioridades
 function calcularGUT(matriz) {
    for (var i = 0; i < matriz.length; i++) {
        var item = matriz[i];
        item.prioridade = item.gravidade * item.urgencia * item.tendencia;
    }
 }
 calcularGUT(matrizGUT);


 console.log("Resultados da Matriz GUT:");
 for (var i = 0; i < matrizGUT.length; i++) {
    var item = matrizGUT[i];
    console.log(item.descricao + ": Prioridade = " + item.prioridade);
 }

   // classificar os problemas por prioridade
   function classificarProblemas(matriz) {
      matriz.sort(function(a, b) {
         return b.prioridade - a.prioridade;
      });
      return matriz;
   }