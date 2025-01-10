function piorizacaoMudancaGUT(item) {
    if (item.Type === 'TSR') {
        const mapa = ["1", "3", "5"];
        const mapeamento = {
            "Não afeta nenhum dos aspectos: segurança, meio ambiente, integridade ou parada de produção": mapa[0],
            "Afeta um dos aspectos: segurança, meio ambiente, integridade ou parada de produção": mapa[1],
            "Afeta dois ou mais aspectos OU é item regulatório passível de interdição /multa": mapa[2],
            "Pode esperar": mapa[0],
            "Precisa de atenção rápida, mas não imediata": mapa[1],
            "Requer ação imediata OU é item regulatório passível de interdição/multa": mapa[2],
            "Vai permanecer estável": mapa[0],
            "Vai piorar a médio prazo": mapa[1],
            "Vai piorar rapidamente ou é um item regulatório passível de interdição/multa": mapa[2]
        };

        const gravidade = mapeamento[item.Fields.Gravidade] || mapa[0];
        const urgencia = mapeamento[item.Fields.Urgencia] || mapa[0];
        const tendencia = mapeamento[item.Fields.Tendencia] || mapa[0];

        const prioridade = gravidade * urgencia * tendencia;
        item.Fields.Priorizacao_da_Mudanca = prioridade;
        item.Fields.Priorizacao_da_mudanca__75_Aux = prioridade >= 75 ? 'Sim' : 'Não';

        log("gravidade: " + gravidade);
        log("urgencia: " + urgencia);
        log("tendencia: " + tendencia); // Comentado anteriormente
        log("item.Fields.Priorizacao_da_Mudanca: " + item.Fields.Priorizacao_da_Mudanca);
        log("item.Fields.Priorizacao_da_mudanca__75_Aux: " + item.Fields.Priorizacao_da_mudanca__75_Aux);
    }
}
