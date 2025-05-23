function Item_AfterUpload(item, file) {
    
    if(item.Type == "IR") {
        
        const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
            
        const month = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
        
        const year = date.getFullYear();
        
        const hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
        
        const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        
        item.Fields.Upload_Date = day + "/" + month + "/" + year + " " + hours + ":" + minutes;
        
    }
        
        
        
        if(item.Type == "CTP" || item.Type == "QLT" || item.Type == "OHPI") {
    
            item.Fields.Sender_Name = User.Name;
            
            let date = new Date();
        
            //Ajuste de fuso horário
            // date.setHours(date.getHours() - 0);
            
            const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
            
            const month = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
            
            const year = date.getFullYear();
            
            const hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
            
            const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
            
            item.Fields.Revision = day + "." + month + "." + year;
            
            item.Fields.Datetime_When_Received = day + "/" + month + "/" + year + " " + hours + ":" + minutes;
            item.RevisionNumber = item.Fields.Revision;
        }
}
