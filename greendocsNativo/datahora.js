log(item.Fields.Supply_Date);
        
var prazo = item.Fields.Supply_Date;

var day = parseInt(prazo.substring(0, 2), 10);
var month = parseInt(prazo.substring(3, 5), 10) - 1;
var year = parseInt(prazo.substring(6, 10), 10);

var inputDate = new Date(year, month, day);

var today = new Date();

console.log(inputDate)

// var diffTime = today.getTime() - inputDate.getTime();
// var diffDays = diffTime / (1000 * 60 * 60 * 24);

// console.log(diffDays);

// item.Fields.Deadline = diffDays > 30 ? 'Expired' : 'On time';
