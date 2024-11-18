// // Objeto de mapeamento entre área e diretoria
// var areaParaDiretoria = {
//     "AI-Auditoria Interna": "Diretoria Administrativo/Financeiro",
//     "ATI-Ativo": "Diretoria de Operações",
//     "ATI-Segurança Patrimonial": "Diretoria de Operações",
//     "CI-Controles Internos": "Diretoria Administrativo/Financeiro",
//     "CIP-Construção e Intervenção de Poços": "Diretoria de Operações",
//     "CIP-Manutenção": "Diretoria de Operações",
//     "CIP-Operações": "Diretoria de Operações",
//     "CIP-Planejamento": "Diretoria de Operações",
//     "CM-Engenharia": "Diretoria de Projetos",
//     "CM-Projetos, Construção e Montagem": "Diretoria de Projetos",
//     "COM-Comercialização": "Diretoria de Comercialização",
//     "CPL-Compliance": "Diretoria Jurídica",
//     "CPROD-Análises e Químicos": "Diretoria de Operações",
//     "CPROD-Produção e Medição": "Diretoria de Operações",
//     "CS-Comunicação e Sustentabilidade": "Presidencia",
//     "ENE-Energia": "Obsoleto - Não existe mais",
//     "EPN-Estratégia de Planos e Negócios": "Obsoleto - Não existe mais",
//     "ESGN-Estocagem de Gás": "Diretoria Técnica",
//     "FIN-Célula SAP": "Diretoria Administrativo/Financeiro",
//     "FIN-Contabilidade": "Diretoria Administrativo/Financeiro",
//     "FIN-Financeiro": "Diretoria Administrativo/Financeiro",
//     "FIN-Fiscal": "Diretoria Administrativo/Financeiro",
//     "FIN-Planejamento Financeiro": "Diretoria Administrativo/Financeiro",
//     "FIN-Tesouraria": "Diretoria Administrativo/Financeiro",
//     "G&G-Desenvolvimento Organizacional": "Diretoria Administrativo/Financeiro",
//     "G&G-Folha de Pagamento": "Diretoria Administrativo/Financeiro",
//     "G&G-Recrutamento e Seleção": "Diretoria Administrativo/Financeiro",
//     "G&G-Suporte Administrativo": "Diretoria Administrativo/Financeiro",
//     "G&G-Treinamento": "Diretoria Administrativo/Financeiro",
//     "GEO-Geologia e Geofísica": "Diretoria Técnica",
//     "GFUND-Gestão Fundiária": "Diretoria de Operações",
//     "GGD-Geotecnologias e Gestão de Dados": "Diretoria de Operações",
//     "INP-Integridade de Poços": "Diretoria de QSMS e Integridade",
//     "INT-Integridade": "Diretoria de QSMS e Integridade",
//     "JUR-Jurídico": "Diretoria Jurídica",
//     "MAN-Confiabilidade": "Diretoria de Operações",
//     "MAN-Gestão": "Diretoria de Operações",
//     "MAN-Manutenção E&I": "Diretoria de Operações",
//     "MAN-Manutenção Mecânica": "Diretoria de Operações",
//     "MAN-Planejamento": "Diretoria de Operações",
//     "MI-Caldeiraria": "Diretoria de Operações",
//     "MI-Confiabilidade": "Diretoria de Operações",
//     "MI-Gestão MI": "Diretoria de Operações",
//     "MI-Integridade": "Diretoria de Operações",
//     "MI-Manutenção": "Diretoria de Operações",
//     "MI-Planejamento": "Diretoria de Operações",
//     "NON-Novos Negócios": "Diretoria de Novos Negócios",
//     "NT-Novas Tecnologias": "Obsoleto - Não existe mais",
//     "O&M-Operação & Manutenção": "Diretoria de Operações",
//     "OPE-Operações de Poços": "Diretoria de Operações",
//     "OPE-Operações de Processamento": "Diretoria de Operações",
//     "OPE-Operações de Produção": "Diretoria de Operações",
//     "PLI-Planejamento Integrado": "Diretoria de Operações",
//     "PO-Poços (Completação, Intervenção e Workover)": "Diretoria Técnica",
//     "PO-Poços (Perfuração)": "Diretoria Técnica",
//     "QSMS-Emergência": "Diretoria de QSMS e Integridade",
//     "QSMS-Meio Ambiente": "Diretoria de QSMS e Integridade",
//     "QSMS-Qualidade": "Diretoria de QSMS e Integridade",
//     "QSMS-Qualidade, Segurança, Meio Ambiente e Saúde": "Diretoria de QSMS e Integridade",
//     "QSMS-Saúde": "Diretoria de QSMS e Integridade",
//     "QSMS-Segurança": "Diretoria de QSMS e Integridade",
//     "RC-Riscos Corporativos": "Diretoria Administrativo/Financeiro",
//     "REG-Regulação": "Diretoria Jurídica",
//     "RIP-Integridade de Poços": "Diretoria de Operações",
//     "RIP-Regulação": "Diretoria de Operações",
//     "RI-Relações Institucionais": "Diretoria de Relações Institucionais e Governamentais",
//     "RP-Elevação e Produção": "Diretoria Técnica",
//     "RP-Reservatório": "Diretoria Técnica",
//     "SOP-Alimentação, alojamento e hospedagem": "Diretoria de Operações",
//     "SOP-Armazenagem": "Diretoria de Operações",
//     "SOP-Hotelaria": "Diretoria de Operações",
//     "SOP-Limpeza e Conservação": "Diretoria de Operações",
//     "SOP-Manutenção Predial": "Diretoria de Operações",
//     "SOP-Segurança Patrimonial": "Diretoria de Operações",
//     "SOP-Suporte Operacional": "Diretoria de Operações",
//     "SOP-Transporte de Cargas": "Diretoria de Operações",
//     "SOP-Transporte de Pessoas": "Diretoria de Operações",
//     "SUP-Suprimentos": "Diretoria Administrativo/Financeiro",
//     "TI-Automação": "Diretoria Administrativo/Financeiro",
//     "TI-Célula SAP": "Diretoria Administrativo/Financeiro",
//     "TI-Gestão de Dados": "Diretoria Administrativo/Financeiro",
//     "TI-Governança": "Diretoria Administrativo/Financeiro",
//     "TI-Infra": "Diretoria Administrativo/Financeiro",
//     "TI-Service Desk": "Diretoria Administrativo/Financeiro",
//     "TI-Sistemas": "Diretoria Administrativo/Financeiro",
//     "TI-Tecnologia da Informação": "Diretoria Administrativo/Financeiro"
// };

// // Função para preencher o campo diretoria com base na área selecionada
// function TESTE(area) {
//     var diretoria = areaParaDiretoria[Area_responsavel_acao] || "Diretoria não encontrada"; // Busca a diretoria ou exibe uma mensagem padrão
//     Items.Fields.Diretoria_responsavel_acao = diretoria; // Preenche o campo com a diretoria encontrada
// }

var item = Items.Fields.Area_responsavel_acao;
function preencherDiretoria(){
    var diretoria;

    switch (true) {
        case /^(AI|CI|FIN|G&G|RC|SUP|TI)/.test(item):
            diretoria = "Diretoria Administrativo/Financeiro";
            break;

        case /^(ATI|CIP|CPROD|GFUND|GGD|MAN|MI|O&M|OPE|PLI|RIP|SOP)/.test(item):
            diretoria = "Diretoria de Operações";
            break;

        case /^(CM)/.test(item):
            diretoria = "Diretoria de Projetos";
            break;

        case /^(CPL|REG|JUR)/.test(item):
            diretoria = "Diretoria Jurídica";
            break;

        case /^COM/.test(item):
            diretoria = "Diretoria de Comercialização";
            break;

        case /^(ESGN|GEO|PO|RP)/.test(item):
            diretoria = "Diretoria Técnica";
            break;

        case /^(INP|INT|QSMS)/.test(item):
            diretoria = "Diretoria de QSMS e Integridade";
            break;

        case /^NON/.test(item):
            diretoria = "Diretoria de Novos Negócios";
            break;

        case /^CS/.test(item):
            diretoria = "Presidencia";
            break;

        case /^(ENE|EPN|NT)/.test(item):
            diretoria = "Obsoleto - Não existe mais";
            break;

    }

    // Preenche o campo no formulário
    Items.Fields.Diretoria_responsavel_acao = diretoria;
}