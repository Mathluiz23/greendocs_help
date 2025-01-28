function UnificaTabelas(item) {
    
    //Unifica tabelas de um processo para a criação de Issues através de Subprocesso
    
    //PROCESSO: ATA
    var TabelaAta = item.Fields.Itens_da_ATA;
    var TabelaCriterios = item.Fields.Criterios_de_Aceitacao;
    var TabelaExclusos = item.Fields.Exclusos;
    var TabelaPremissas = item.Fields.Premissas;
    var TabelaRiscos = item.Fields.Riscos_observados;
    var TabelaRestricoes = item.Fields.Restricoes;
    var origem = item.Name;
    
        if (TabelaAta){
            for(var a = 0; a < TabelaAta.Rows.length; a++){
                //log("ENTROU NO FOR TabelaAta");

                item = addTableRow(item, "Issues_List");
                var TabelaIssues = item.Fields.Issues_List;

                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Origem"] = origem;
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Tipo"] = "Ata de Reunião";
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Descricao_issues"] = TabelaAta.Rows[a].Columns["Descricao_issues"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Plano_de_Acao_issues"] = TabelaAta.Rows[a].Columns["Plano_de_Acao_issues"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Data_de_Entrega_Planejada"] = TabelaAta.Rows[a].Columns["Data_de_Entrega_Planejada"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Status_issues"] = TabelaAta.Rows[a].Columns["Status_issues"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Etapa_de_Criacao"] = TabelaAta.Rows[a].Columns["Etapa_de_Criacao"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Setor_Responsavel_GERAL"] = TabelaAta.Rows[a].Columns["Setor_Responsavel_GERAL"];
            
            if ((TabelaAta.Rows[a].Columns["Status_issues"] == 'Concluído') || (TabelaAta.Rows[a].Columns["Status_issues"] == 'Informação') || (TabelaAta.Rows[a].Columns["Status_issues"] == 'Suspenso')){
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Criar_Issues"] = "Não";
            }
            }
        }
        
    //PROCESSO: TAP    
    if ((item.Fields.Processo_originador == "TAP") && (item.Fields.Primeira_Ata_de_reuniao == "Sim")){
        
        if (TabelaCriterios){
            for(var b = 0; b < TabelaCriterios.Rows.length; b++){
                //log("ENTROU NO FOR TabelaCriterios");

                item = addTableRow(item, "Issues_List");
                var TabelaIssues = item.Fields.Issues_List;
                
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Origem"] = origem;
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Tipo"] = "Critérios de Aceitação";
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Descricao_issues"] = TabelaCriterios.Rows[b].Columns["Descricao_issues"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Plano_de_Acao_issues"] = TabelaCriterios.Rows[b].Columns["Plano_de_Acao_issues"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Data_de_Entrega_Planejada"] = TabelaCriterios.Rows[b].Columns["Data_de_Entrega_Planejada"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Status_issues"] = TabelaCriterios.Rows[b].Columns["Status_issues"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Etapa_de_Criacao"] = "Iniciação";
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Setor_Responsavel_GERAL"] = TabelaCriterios.Rows[b].Columns["Setor_Responsavel_GERAL"];
                
                if ((TabelaCriterios.Rows[b].Columns["Status_issues"] == 'Concluído') || (TabelaCriterios.Rows[b].Columns["Status_issues"] == 'Informação') || (TabelaCriterios.Rows[b].Columns["Status_issues"] == 'Suspenso')){
                    TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Criar_Issues"] = "Não";
                }
            }
        }
            
        if (TabelaExclusos){
            for(var c = 0; c < TabelaExclusos.Rows.length; c++){
                //log("ENTROU NO FOR TabelaExclusos");

                item = addTableRow(item, "Issues_List");
                var TabelaIssues = item.Fields.Issues_List;
                
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Origem"] = origem;
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Tipo"] = "Exclusos";
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Descricao_issues"] = TabelaExclusos.Rows[c].Columns["Descricao_issues"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Plano_de_Acao_issues"] = TabelaExclusos.Rows[c].Columns["Plano_de_Acao_issues"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Data_de_Entrega_Planejada"] = TabelaExclusos.Rows[c].Columns["Data_de_Entrega_Planejada"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Status_issues"] = TabelaExclusos.Rows[c].Columns["Status_issues"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Etapa_de_Criacao"] = "Iniciação";
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Setor_Responsavel_GERAL"] = TabelaExclusos.Rows[c].Columns["Setor_Responsavel_GERAL"];
                
                if ((TabelaExclusos.Rows[c].Columns["Status_issues"] == 'Concluído') || (TabelaExclusos.Rows[c].Columns["Status_issues"] == 'Informação') || (TabelaExclusos.Rows[c].Columns["Status_issues"] == 'Suspenso')){
                    TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Criar_Issues"] = "Não";
                }
            }
        }
            
        if (TabelaPremissas){
            for(var d = 0; d < TabelaPremissas.Rows.length; d++){
                //log("ENTROU NO FOR TabelaPremissas");

                item = addTableRow(item, "Issues_List");
                var TabelaIssues = item.Fields.Issues_List;
                
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Origem"] = origem;
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Tipo"] = "Premissas";
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Descricao_issues"] = TabelaPremissas.Rows[d].Columns["Descricao_issues"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Plano_de_Acao_issues"] = TabelaPremissas.Rows[d].Columns["Plano_de_Acao_issues"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Data_de_Entrega_Planejada"] = TabelaPremissas.Rows[d].Columns["Data_de_Entrega_Planejada"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Status_issues"] = TabelaPremissas.Rows[d].Columns["Status_issues"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Etapa_de_Criacao"] = "Iniciação";
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Setor_Responsavel_GERAL"] = TabelaPremissas.Rows[d].Columns["Setor_Responsavel_GERAL"];
                
                if ((TabelaPremissas.Rows[d].Columns["Status_issues"] == 'Concluído') || (TabelaPremissas.Rows[d].Columns["Status_issues"] == 'Informação') || (TabelaPremissas.Rows[d].Columns["Status_issues"] == 'Suspenso')){
                    TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Criar_Issues"] = "Não";
                }    
            }
        }
            
        if (TabelaRiscos){
            for(var e = 0; e < TabelaRiscos.Rows.length; e++){
                //log("ENTROU NO FOR TabelaRiscos");

                item = addTableRow(item, "Issues_List");
                var TabelaIssues = item.Fields.Issues_List;
                
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Origem"] = origem;
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Tipo"] = "Riscos";
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Descricao_issues"] = TabelaRiscos.Rows[e].Columns["Descricao_issues"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Plano_de_Acao_issues"] = TabelaRiscos.Rows[e].Columns["Plano_de_Acao_issues"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Data_de_Entrega_Planejada"] = TabelaRiscos.Rows[e].Columns["Data_de_Entrega_Planejada"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Status_issues"] = TabelaRiscos.Rows[e].Columns["Status_issues"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Etapa_de_Criacao"] = "Iniciação";
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Setor_Responsavel_GERAL"] = TabelaRiscos.Rows[e].Columns["Setor_Responsavel_GERAL"];
                
                if ((TabelaRiscos.Rows[e].Columns["Status_issues"] == 'Concluído') || (TabelaRiscos.Rows[e].Columns["Status_issues"] == 'Informação') || (TabelaRiscos.Rows[e].Columns["Status_issues"] == 'Suspenso')){
                    TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Criar_Issues"] = "Não";
                }
            }
        }
            
        if (TabelaRestricoes){
            for(var f = 0; f < TabelaRestricoes.Rows.length; f++){
                //log("ENTROU NO FOR TabelaRiscos");

                item = addTableRow(item, "Issues_List");
                var TabelaIssues = item.Fields.Issues_List;
                
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Origem"] = origem;
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Tipo"] = "Restrições";
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Descricao_issues"] = TabelaRestricoes.Rows[f].Columns["Descricao_issues"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Plano_de_Acao_issues"] = TabelaRestricoes.Rows[f].Columns["Plano_de_Acao_issues"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Data_de_Entrega_Planejada"] = TabelaRestricoes.Rows[f].Columns["Data_de_Entrega_Planejada"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Status_issues"] = TabelaRestricoes.Rows[f].Columns["Status_issues"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Etapa_de_Criacao"] = "Iniciação";
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Setor_Responsavel_GERAL"] = TabelaRestricoes.Rows[f].Columns["Setor_Responsavel_GERAL"];
                
                if ((TabelaRestricoes.Rows[f].Columns["Status_issues"] == 'Concluído') || (TabelaRestricoes.Rows[f].Columns["Status_issues"] == 'Informação') || (TabelaRestricoes.Rows[f].Columns["Status_issues"] == 'Suspenso')){
                    TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Criar_Issues"] = "Não";
                }
            }
        }
    }
    
    //PROCESSO: MATRIZ DE RISCO        
    if (item.Fields.Processo_originador === "Matriz de Risco"){
            
        var TabelaMatrizRisco = item.Fields.Matriz_de_Risco;
        var origem = item.Name;
            
        if (TabelaMatrizRisco){
            for(var g = 0; g < TabelaMatrizRisco.Rows.length; g++){
                //log("ENTROU NO FOR TabelaMatrizRisco");
        
                item = addTableRow(item, "Issues_List");
                var TabelaIssues = item.Fields.Issues_List;
                
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Origem"] = origem;
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Tipo"] = "Matriz de Risco";
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Descricao_issues"] = TabelaMatrizRisco.Rows[g].Columns["Risco"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Plano_de_Acao_issues"] = TabelaMatrizRisco.Rows[g].Columns["Plano_de_Acao_issues"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Data_de_Entrega_Planejada"] = TabelaMatrizRisco.Rows[g].Columns["Data_de_Entrega_Planejada"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Status_issues"] = TabelaMatrizRisco.Rows[g].Columns["Status_issues"];
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Etapa_de_Criacao"] = "Design";
                TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Setor_Responsavel_GERAL"] = TabelaMatrizRisco.Rows[g].Columns["Setor_Responsavel_GERAL"];
                
                if (TabelaMatrizRisco.Rows[g].Columns["Categoria_Matriz_de_Risco"] == 'Aceitar risco'){
                    TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Criar_Issues"] = "Não";
                }
            }
        }
    }
        
    //PROCESSO: GERENCIAMENTO DE MUDANÇAS    
    if (item.Fields.Processo_originador === "Gerenciamento de mudança"){
        
        item.Fields.Ata_de_reuniao_do_Gerenciamento_finalizada = "Sim";
        var TabelaGM = item.Fields.Gerenciamento_de_Mudancas;
        var origem = item.Name;
                
        var itemsReferenced = searchReferencedItems(item,"",1);
            for (var h=0; h < itemsReferenced.length; h++){
                if (itemsReferenced[h].Type == 'GM'){
                    var TabelaGM = itemsReferenced[h].Fields.Gerenciamento_de_Mudancas;

                    for(var i = 0; i < TabelaGM.Rows.length; i++){
                        if (TabelaGM.Rows[i].Columns["Requer_acao_GM"] == 'Sim'){
                            item.Fields.GM_gerou_issues = "Sim";
                            var Issues = "Sim";
                            //log(Issues);
                            //log("ENTROU");
                            item = addTableRow(item, "Issues_List");
                            var TabelaIssues = item.Fields.Issues_List;
                            
                            TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Origem"] = origem;
                            TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Tipo"] = "Gerenciamento de Mudanças";
                            TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Descricao_issues"] = TabelaGM.Rows[i].Columns["Atividade"];
                            TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Plano_de_Acao_issues"] = TabelaGM.Rows[i].Columns["Plano_de_Acao_issues"];
                            TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Data_de_Entrega_Planejada"] = TabelaGM.Rows[i].Columns["Data_de_Entrega_Planejada"];
                            TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Status_issues"] = TabelaGM.Rows[i].Columns["Status_Ger_Mud"];
                            TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Etapa_de_Criacao"] = "Design";
                            TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Setor_Responsavel_GERAL"] = TabelaGM.Rows[i].Columns["Setor_Responsavel_GERAL"];
                            TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Criar_Issues"] = "Não";
                            TabelaIssues.Rows[TabelaIssues.Rows.length - 1].Columns["Requer_acao_GM"] = TabelaGM.Rows[i].Columns["Requer_acao_GM"];
                        
                        }
                    }
                }
            }
            
            saveItem(itemsReferenced[h]);
        
            if (Issues == "Sim"){
                item.Fields.GM_gerou_issues = "Sim";
                //log(item.Fields.GM_gerou_issues);
            } else {
                item.Fields.GM_gerou_issues = "Não";
                //log(item.Fields.GM_gerou_issues);
            }
    }
        
    /*//Atualiza campo do item referenciado. Serve para as validações contidas no "OnClick" que impede ou não o andamento do fluxo, de acordo com o valor dos campos abaixo.
    var itemsReferenced = searchReferencedItems(item,"",0);
    for (var j=0; j < itemsReferenced.length; j++){
        log("Chegou aqui");
        if (itemsReferenced[j].Type == 'TAP'){
            
            itemsReferenced[j].Fields.Primeira_Ata_de_reuniao = "Não";
            itemsReferenced[j].Fields.Ata_de_reuniao_finalizada = "Sim";
            saveItem(itemsReferenced[j]);
            //log("Gravou");
        }
    }*/
        
    var itemsReferenced = searchReferencedItems(item,"",0);
    for (var l=0; l < itemsReferenced.length; l++){
        if (itemsReferenced[l].Type == 'MTR'){
                itemsReferenced[l].Fields.Primeira_Ata_de_reuniao = "Não";
                itemsReferenced[l].Fields.Ata_de_reuniao_da_Matriz_finalizada = "Sim";
                saveItem(itemsReferenced[l]);
        }
    }
}