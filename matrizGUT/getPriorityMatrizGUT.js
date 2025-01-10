function piorizacaoMudancaGUT(item) {

    if (item.Type == 'TSR') {
        
        var gravidade = item.Fields.Gravidade;
        var gravidade_mapa = ["1", "3", "5"]; 
        
        if (gravidade === "Não afeta nenhum dos aspectos: segurança, meio ambiente, integridade ou parada de produção") {
            gravidade = gravidade_mapa[0];
        } else if (gravidade === "Afeta um dos aspectos: segurança, meio ambiente, integridade ou parada de produção") {
            gravidade = gravidade_mapa[1];
        } else if (gravidade === "Afeta dois ou mais aspectos OU é item regulatório passível de interdição /multa") {
            gravidade = gravidade_mapa[2];
        }
        log("gravidade: " + gravidade); 
    
        var urgencia = item.Fields.Urgencia;
        var urgencia_mapa = ["1", "3", "5"];
        
        if (urgencia === "Pode esperar") {
            urgencia = urgencia_mapa[0];
        } else if (urgencia === "Precisa de atenção rápida, mas não imediata") {
            urgencia = urgencia_mapa[1];
        } else if (urgencia === "Requer ação imediata OU é item regulatório passível de interdição/multa") {
            urgencia = urgencia_mapa[2];
        }	
        log("urgencia: " + urgencia);
    
        var tendencia = item.Fields.Tendencia;
        var tendencia_mapa = ["1", "3", "5"];
        
        if (tendencia === "Vai permanecer estável") {
            tendencia = tendencia_mapa[0];
        } else if (tendencia === "Vai piorar a médio prazo") {
            tendencia = tendencia_mapa[1];
        } else if (tendencia === "Vai piorar rapidamente ou é um item regulatório passível de interdição/multa") {
            tendencia = tendencia_mapa[2];
        }	
        //log("tendencia: " + tendencia);
    
        var calculaPriorizacaoMudanca = (gravidade * urgencia * tendencia);
        log("entrou calculo");
        
        item.Fields.Priorizacao_da_Mudanca = calculaPriorizacaoMudanca;
        
        // metadados auxiliares para regras de visibilidade
        if (calculaPriorizacaoMudanca >= 75) {
            item.Fields.Priorizacao_da_mudanca__75_Aux = 'Sim';
        } else {
            item.Fields.Priorizacao_da_mudanca__75_Aux = 'Não';
            
        log("item.Fields.Priorizacao_da_Mudanca: " + item.Fields.Priorizacao_da_Mudanca);
        log("item.Fields.Priorizacao_da_mudanca__75_Aux: " + item.Fields.Priorizacao_da_mudanca__75_Aux);
        }
    }
}
