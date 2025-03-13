//insere uma linha vazia na tabela

            
//preenche as colunas da linha inserida
let tabela = item.Fields.Order_Handling_Pending_Issues;


// favor corrigir o código conforme a necessidade que tenho aqui : 
if(item.Type === "MOC"){
    var itemsReferenced = searchReferencedItems(item,"MOC > Ações",1);
    for (var i=0; i < itemsReferenced.length; i++){
    log("Quantidade de Ações: " + itemsReferenced.length);
    
    log("Ações: " + itemsReferenced[i].Name);
   
    log("tabelaAcoes: " + tabelaAcoes);

    item = addTableRow(item, "Acoes");
    let tabelaAcoes = item.Fields.Acoes;
    // preciso verificar se essa tabela ja tem linha e se o tabelaAcoes.Rows[i].Columns["Nome_da_Acao"] já existe no itemsReferenced[i].Name, se já existir ele não deve acrescentar linha, porém se não existir ele deve criar uma linha nova e atribuir o itemsReferenced[i].Name; ao  tabelaAcoes.Rows[i].Columns["Nome_da_Acao"] na nova linha
    tabelaAcoes.Rows[i].Columns["Nome_da_Acao"] = itemsReferenced[i].Name;

    log("Nome Ação: " + itemsReferenced[i].Name);
    }
}









if (item.Type === "MOC") {
    var itemsReferenced = searchReferencedItems(item, "MOC > Ações", 1);
    let tabelaAcoes = item.Fields.Acoes;

    log("Quantidade de Ações Referenciadas: " + itemsReferenced.length);

    for (var i = 0; i < itemsReferenced.length; i++) {
        log("Ações: " + itemsReferenced[i].Name);

        let existe = false;

        if(tabelaAcoes !== "undefined" && tabelaAcoes !== '' && tabelaAcoes !== null) {
            for (var j = 0; j < tabelaAcoes.Rows.length; j++) {
                if (tabelaAcoes.Rows[j].Columns["Nome_da_Acao"] === itemsReferenced[i].Name) {
                    existe = true;
                    break;
                }
            }
        }

        if (!existe) {
            log("Adicionando nova linha para: " + itemsReferenced[i].Name);
            
            item = addTableRow(item, "Acoes");
            tabelaAcoes = item.Fields.Acoes;
            
            let novaLinha = tabelaAcoes.Rows[tabelaAcoes.Rows.length - 1];
            novaLinha.Columns["Nome_da_Acao"] = itemsReferenced[i].Name;

            log("adicionado na tablea: " + itemsReferenced[i].Name);
        } else {
            log("Ação já existe: " + itemsReferenced[i].Name);
        }
    }
}
