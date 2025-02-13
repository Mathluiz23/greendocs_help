function PrazoComment(item) {
   
    var dia = new Date();
        var prazo = getDateFromWorkDays(dia, item.Fields.Supplier_revison_days);
        
        var dia_prazo = prazo.getDate(); 
        var mes_prazo = prazo.getMonth()+1;
        var ano_prazo = prazo.getFullYear();
        
        if(mes_prazo<10)
        {
            mes_prazo = '0' + mes_prazo;
                }
        if(dia_prazo<10){
           dia_prazo = '0' + dia_prazo;
                    }
    
        var prazo_correto = (dia_prazo + "/" + mes_prazo + "/" + ano_prazo);
        
        item.Fields.Prazo_Comment = prazo_correto;
        //log('entrou');
        //log('dias: ' + item.Fields.Supplier_revison_days);
        //log(item.Name + ' ' + item.Fields.Prazo_Comment);
}