function Item_AfterUpload(item, file) {
    
    if (item.Type == "DOC"){
        
        
        // log('Para informação' + item.Fields.Para_Informacao)
        // log('Revisão Cliente' + item.Fields.Revisao_Cliente)
        
        let paraInformacao = item.Fields.Para_Informacao;
        let revisaodoCliente = item.Fields.Revisao_Cliente;
        // log(revisaodoCliente.length + 'revisaoDoclienteLentgh')
        let client = item.Fields.Numero_Documento_Cliente;
        
        if(paraInformacao == 'No'){
             let tamanho = revisaodoCliente.length;
             if(tamanho == 5){
                let nomeAlterado = revisaodoCliente.slice(0,-1)
                // item.Fields.Revisao_Cliente = nomeAlterado;
                log(nomeAlterado)
                let newName = client + "-" + nomeAlterado;
                log("Novo" + newName);
                file.Name = newName;
             }
            
            
        }
        
        
        // função abaixo ok    
        if(paraInformacao == 'Si'){
            log("Antigo "+file.Name);
            
            log(item.fields.Revisao_Cliente)
            log  (item.Fields.Numero_Documento_Cliente)
            
            
            let client = item.Fields.Numero_Documento_Cliente;
            let revision = item.Fields.Revisao_Cliente;
            
            
            let newName = client + "-" + revision;
            log("Novo "+newName);
            file.Name = newName;  //Altera o nome do upload para o "numero documento do cliente" e "revisão"
            
        }
            
    }
}