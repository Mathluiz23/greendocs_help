function CriaUsuario(item) {

    //PROCESSO: FORNECEDOR
        
    var username = "api@greendocs.net";
    var password = "";
    var encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));
    var enderecoCriar = "http://cattalini2.newhom.greendocs.net/api/v2/users";
 
    var TabelaRepresentantes = item.Fields.Representantes_legais;
    
    for(i=0;i < TabelaRepresentantes.Rows.length;i++){
        var nome = TabelaRepresentantes.Rows[i].Columns['Representante_legal'];
        var email = TabelaRepresentantes.Rows[i].Columns['Email_representante_legal'];
  
        var objetoCriar = {};
        objetoCriar.IdConta = 2;
        objetoCriar.Nome = nome;
        objetoCriar.Login = email;
        
        if(item.Fields.Desativar_usuarios == "Sim"){
            //log('entrou');
            objetoCriar.Ativo = false;
        }else{
            objetoCriar.Ativo = true;
            //objetoCriar.EmailNotificacao = email;
            objetoCriar.Pass = "";
            objetoCriar.TrocaSenha = true;
            objetoCriar.Grupos = [item.Fields.Fornecedor_contrato, ' CADFORN - Fornecedores'];
            TabelaRepresentantes.Rows[i].Columns['Usuario_Fornecedor'] = nome;
        }
        
        /*objetoCriar.EmailNotificacao = email;
        objetoCriar.Pass = "";
        objetoCriar.TrocaSenha = true;
        objetoCriar.Grupos = [item.Fields.Fornecedor_contrato, 'Fornecedores'];
        log("Nome: " + nome + ". Email: " + email);*/
        
        var retorno = callWebService(enderecoCriar, "Basic " + encoded, "POST", "application/json", JSON.stringify(objetoCriar), []);
        
        item.Fields.Usuario_Fornecedor = nome;
    }
}