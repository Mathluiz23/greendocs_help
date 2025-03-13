var parts = item.Fields.prazo.split('/'); // Supondo formato dd/mm/yyyy
    var inputDate = new Date(parts[2], parts[1] - 1, parts[0]); // Ano, Mês (0-indexado), Dia
    var today = new Date();

    var diffTime = today.getTime() - inputDate.getTime(); 
    var diffDays = diffTime / (1000 * 60 * 60 * 24); // Convertendo milissegundos para dias

    item.Fields.Deadline = diffDays > 30 ? 'Expired' : 'On Time';


// Exemplo de uso
var item = { Fields: { prazo: "02/03/2025", Deadline: "" } };
checkExpiration(item);
console.log(item.Fields.Deadline);