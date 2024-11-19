    // lógica para preencher o campo Diretoria responsável ação, através do campo Área responsável ação. by Matheus L 18/11/2024

        // Grupos de áreas organizados por diretoria
        var grupos = [
            { diretoria: "Diretoria Administrativo/Financeiro", areas: [
                "AI - Auditoria Interna",
                "CI - Controles Internos",
                "FIN - Célula SAP",
                "FIN - Contabilidade",
                "FIN - Financeiro",
                "FIN - Fiscal",
                "FIN - Planejamento Financeiro",
                "FIN - Tesouraria",
                "G&G - Desenvolvimento Organizacional",
                "G&G - Folha de Pagamento",
                "G&G - Recrutamento e Seleção",
                "G&G - Suporte Administrativo",
                "G&G - Treinamento",
                "RC - Riscos Corporativos",
                "SUP - Suprimentos",
                "TI - Automação",
                "TI - Célula SAP",
                "TI - Gestão de Dados",
                "TI - Governança",
                "TI - Infra",
                "TI - Service Desk",
                "TI - Sistemas",
                "TI - Tecnologia da Informação"
            ]},
            { diretoria: "Diretoria de Operações", areas: [
                "ATI - Ativo",
                "ATI - Segurança Patrimonial",
                "CIP - Construção e Intervenção de Poços",
                "CIP - Manutenção",
                "CIP - Operações",
                "CIP - Planejamento",
                "CPROD - Análises e Químicos",
                "CPROD - Produção e Medição",
                "GFUND - Gestão Fundiária",
                "GGD - Geotecnologias e Gestão de Dados",
                "MAN - Confiabilidade",
                "MAN - Gestão",
                "MAN - Manutenção E&I",
                "MAN - Manutenção Mecânica",
                "MAN - Planejamento",
                "MI - Caldeiraria",
                "MI - Confiabilidade",
                "MI - Gestão MI",
                "MI - Integridade",
                "MI - Manutenção",
                "MI - Planejamento",
                "O&M - Operação & Manutenção",
                "OPE - Operações de Poços",
                "OPE - Operações de Processamento",
                "OPE - Operações de Produção",
                "PLI - Planejamento Integrado",
                "RIP - Integridade de Poços",
                "RIP - Regulação",
                "SOP - Alimentação, alojamento e hospedagem",
                "SOP - Armazenagem",
                "SOP - Hotelaria",
                "SOP - Limpeza e Conservação",
                "SOP - Manutenção Predial",
                "SOP - Segurança Patrimonial",
                "SOP - Suporte Operacional",
                "SOP - Transporte de Cargas",
                "SOP - Transporte de Pessoas"
            ]},
            { diretoria: "Diretoria de Projetos", areas: [
                "CM - Engenharia",
                "CM - Projetos, Construção e Montagem"
            ]},
            { diretoria: "Diretoria Jurídica", areas: [
                "CPL - Compliance",
                "REG - Regulação",
                "JUR - Jurídico"
            ]},
            { diretoria: "Diretoria de Comercialização", areas: [
                "COM - Comercialização"
            ]},
            { diretoria: "Diretoria Técnica", areas: [
                "ESGN - Estocagem de Gás",
                "GEO - Geologia e Geofísica",
                "PO - Poços (Completação, Intervenção e Workover)",
                "PO - Poços (Perfuração)",
                "RP - Elevação e Produção",
                "RP - Reservatório"
            ]},
            { diretoria: "Diretoria de QSMS e Integridade", areas: [
                "INP - Integridade de Poços",
                "INT - Integridade",
                "QSMS - Emergência",
                "QSMS - Meio Ambiente",
                "QSMS - Qualidade",
                "QSMS - Qualidade, Segurança, Meio Ambiente e Saúde",
                "QSMS - Saúde",
                "QSMS - Segurança"
            ]},
            { diretoria: "Diretoria de Novos Negócios", areas: [
                "NON - Novos Negócios"
            ]},
            { diretoria: "Presidencia", areas: [
                "CS - Comunicação e Sustentabilidade"
            ]},
            { diretoria: "Obsoleto - Não existe mais", areas: [
                "ENE - Energia",
                "EPN - Estratégia de Planos e Negócios",
                "NT - Novas Tecnologias"
            ]}
        ];

        var diretoria = " ";

        if (!item.Fields.Area_responsavel_acao) {
            log("Erro: O campo 'Área Responsável Ação' está vazio.");
            return;
        }

        var areaSelecionada = item.Fields.Area_responsavel_acao.trim();
        log("Área Selecionada (normalizada): " + areaSelecionada);

        for (var i = 0; i < grupos.length; i++) {
            var grupo = grupos[i];
            for (var j = 0; j < grupo.areas.length; j++) {
                if (grupo.areas[j] === areaSelecionada) {
                    diretoria = grupo.diretoria;
                    log("Diretoria encontrada: " + diretoria);
                    break;
                }
            }
            if (diretoria !== " ") {
                break;
            }
        }

        if (diretoria !== " ") {
            item.Fields.Diretoria_responsavel_acao = diretoria;
            log("campo 'Diretoria responsavel acao' atualizado para: " + diretoria);
        } else {
            log("sem correspondencia para a área: " + areaSelecionada);
        }