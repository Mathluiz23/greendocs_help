// script para um campo data não poder ser preenchido com uma data

if(item.Type === 'APA'){ // Apenas exemplo para filtrar o tipo de item

  let formatDate = function (date) {
  let data = new Date(date);
  // Formata a data para o formato "dd/mm/aaaa"
  let dia = data.getDate();
  let mes = data.getMonth() + 1; // Os meses são indexados a partir de 0
  let ano = data.getFullYear();
  // Adiciona um zero à esquerda se o dia ou mês for menor que 10

  dia = dia < 10 ? "0" + dia : dia;
  mes = mes < 10 ? "0" + mes : mes;

  // Retorna a data formatada
  return dia + "/" + mes + "/" + ano;
};



let novaData = formatDate( new Date());
item.Fields.Prazo_acao = novaData;
    
}
      