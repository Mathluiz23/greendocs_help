function Item_AfterEditFields(item) {
  if (item.Type !== "GM") return; 
  const verificarTabela = (tabela, colunas) => {
    if (!tabela || tabela.Rows.length === 0) return false;

    for (const row of tabela.Rows) {
      const campos = row.Columns;

      if (colunas.some((coluna) => campos[coluna])) {
        return true;
      }
    }
    return false;
  };

  const acoesPrioridade = [
    {
      tabela: item.Fields.Acoes_Prioridade_1,
      colunas: [
        "Area_responsavel_ap1",
        "Descricao_da_acao_ap1",
        "Responsavel_pela_acao_ap1",
        "Prazo_ap1"
      ],
      campoAplicavel: "Acoes_P1_aplicavel"
    },
    {
      tabela: item.Fields.Acoes_Prioridade_3,
      colunas: [
        "Area_responsavel_ap3",
        "Descricao_da_acao_ap3",
        "Responsavel_pela_acao_ap3",
        "Prazo_ap3"
      ],
      campoAplicavel: "Acoes_P3_sao_aplicaveis"
    }
  ];

  acoesPrioridade.forEach((acao) => {
    const { tabela, colunas, campoAplicavel } = acao;
    if (verificarTabela(tabela, colunas)) {
      item.Fields[campoAplicavel] = "Sim";
    } else {
      item.Fields[campoAplicavel] = "Não";
    }
  });
}
