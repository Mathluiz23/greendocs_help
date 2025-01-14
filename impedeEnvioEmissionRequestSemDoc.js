 //Impedir de enviar Emission Request sem documentos.
    //commit(false);
    if (item.Type == 'ER'){
        if (action.InternalName == 'Send_Request' || action.InternalName == 'Send_Request_and_Approve_Documents' || action.InternalName == 'Send_Request_and_Release_Documents'){
            var doc = searchReferencedItems(item, "Emission Requests", 1);
            if (doc.length === 0){
                abort ('Please add documents in this emission request');
            } else {
            //log ('entrou');
                for (var a=0; a < doc.length; a++){
                    //log (docs[i].Name + ' ** ' + docs[i].Fields.Purpose);
                    if (doc[a].Fields.Purpose === '' || doc[a].Fields.Purpose === null || doc[a].Fields.Media === '' || doc[a].Fields.Media === null){
                        abort ('Please fill Media and Purpose');
                    }
                    if (action.InternalName == 'Send_Request_and_Approve_Documents' || action.InternalName == 'Send_Request_and_Release_Documents'){
                        if (doc[a].Fields.Purpose_When_Received === 'For Certified Acceptance' || doc[a].Fields.Purpose_When_Received === 'For Approval/Comments' || doc[a].Fields.Purpose_When_Received === 'For Approval/Comments'){
                            abort ('Purpose and workflow action not allowed. Please use Send Request action instead.');
                        }
                    }
                }
            }
        }
    }