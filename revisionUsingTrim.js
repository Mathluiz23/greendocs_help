function Revisao(item) {
    // Apesar do nome deste script ser Revisão, ele é utilizado também na criação do item.

    // Atribui o valor do campo 'Revision' ao número de revisão do item e a um campo auxiliar.
    item.RevisionNumber = item.Fields.Revision; // Define o número de revisão oficial do item.
    item.Fields.Revision_Aux = item.Fields.Revision; // Define o valor da revisão em um campo auxiliar.

    // Recupera os valores dos campos 'Customer_Number', 'Supplier_Number' e o nome do item.
    var Cnumber = item.Fields.Customer_Number; // Número do cliente.
    var Fnumber = item.Fields.Supplier_Number; // Número do fornecedor.
    var Anumber = item.Name; // Nome do item.

    // Verifica se o campo 'Customer_Number' não está vazio.
    if (Cnumber !== '') {
        // Se o número do cliente existe, ele é atribuído ao campo 'Export_Name' do item.
        item.Fields.Export_Name = Cnumber.trim(); // Remove espaços extras no início e no final do valor.
    } 
    // Caso contrário, verifica se o campo 'Supplier_Number' não está vazio.
    else if (Fnumber !== '') {
        // Se o número do fornecedor existe, ele é atribuído ao campo 'Export_Name'.
        item.Fields.Export_Name = Fnumber.trim(); // Remove espaços extras no início e no final do valor.
    } 
    // Se nenhum dos campos anteriores está preenchido, utiliza o nome do item como valor de 'Export_Name'.
    else {
        item.Fields.Export_Name = Anumber.trim(); // Remove espaços extras no início e no final do nome.
    }
}
