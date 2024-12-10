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