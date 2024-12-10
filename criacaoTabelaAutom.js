function criaChecklistPadrao(item) {
    var tarefas = [
        "Requisição De Compra",
        "Encaminhamento Save The Date",
        "Avaliação De Documentos Cdi (Presencial)",
        "Encaminhamento Proposta Comunicado Para Comunicação",
        "Solicitação De Programação Da Auditoria",
        "Solicitação De Comprovação Da Capacitação Dos Auditores",
        "Encomendar Coffee Break",
        "Motivação De Acesso Dos Auditores No Sistema Icoa (Controle De Acesso)",
        "Encaminhamento De Invite Para As Áreas",
        "Encaminhar Orientações Seg Para As Áreas Auditadas",
        "Reserva De Sala - Reunião De Abertura E Encerramento (Presencial)",
        "Reserva De Carro",
        "Reserva De Hotel Auditores",
        "Lista De Presença - Encerramento E Abertura",
        "Encaminhar Comunicado Sobre Encerramento Da Auditoria"
    ];

    for (var i = 0; i < tarefas.length; i++) {
        item = addTableRow(item, "Checklist");
        item.Fields.Checklist.Rows[i].Columns['Lista_de_Tarefas'] = tarefas[i];
    }
}

//     item = addTableRow(item, "Checklist");
//     item.Fields.Checklist.Rows[0].Columns['Lista_de_Tarefas'] = "Requisição De Compra";

//     item = addTableRow(item, "Checklist");
//     item.Fields.Checklist.Rows[1].Columns['Lista_de_Tarefas'] = "Encaminhamento Save The Date";

//     item = addTableRow(item, "Checklist");
//     item.Fields.Checklist.Rows[2].Columns['Lista_de_Tarefas'] = "Avaliação De Documentos Cdi (Presencial)";

//     item = addTableRow(item, "Checklist");
//     item.Fields.Checklist.Rows[3].Columns['Lista_de_Tarefas'] = "Encaminhamento Proposta Comunicado Para Comunicação";

//     item = addTableRow(item, "Checklist");
//     item.Fields.Checklist.Rows[4].Columns['Lista_de_Tarefas'] = "Solicitação De Programação Da Auditoria";

//     item = addTableRow(item, "Checklist");
//     item.Fields.Checklist.Rows[5].Columns['Lista_de_Tarefas'] = "Solicitação De Comprovação Da Capacitação Dos Auditores";

//     item = addTableRow(item, "Checklist");
//     item.Fields.Checklist.Rows[6].Columns['Lista_de_Tarefas'] = "Encomendar Coffee Break";
	
// 	item = addTableRow(item, "Checklist");
//     item.Fields.Checklist.Rows[7].Columns['Lista_de_Tarefas'] = "Motivação De Acesso Dos Auditores No Sistema Icoa (Controle De Acesso)";
	
// 	item = addTableRow(item, "Checklist");
//     item.Fields.Checklist.Rows[8].Columns['Lista_de_Tarefas'] = "Encaminhamento De Invite Para As Áreas";
	
// 	item = addTableRow(item, "Checklist");
//     item.Fields.Checklist.Rows[9].Columns['Lista_de_Tarefas'] = "Encaminhar Orientações Seg Para As Áreas Auditadas";

    	
// 	item = addTableRow(item, "Checklist");
//     item.Fields.Checklist.Rows[10].Columns['Lista_de_Tarefas'] = "Reserva De Sala - Reunião De Abertura E Encerramento (Presencial)";

    	
// 	item = addTableRow(item, "Checklist");
//     item.Fields.Checklist.Rows[11].Columns['Lista_de_Tarefas'] = "Reserva De Carro";

    	
// 	item = addTableRow(item, "Checklist");
//     item.Fields.Checklist.Rows[12].Columns['Lista_de_Tarefas'] = "Reserva De Hotel Auditores";

    	
// 	item = addTableRow(item, "Checklist");
//     item.Fields.Checklist.Rows[13].Columns['Lista_de_Tarefas'] = "Lista De Presença - Encerramento E Abertura";

    	
// 	item = addTableRow(item, "Checklist");
//     item.Fields.Checklist.Rows[14].Columns['Lista_de_Tarefas'] = "Encaminhar Comunicado Sobre Encerramento Da Auditoria";