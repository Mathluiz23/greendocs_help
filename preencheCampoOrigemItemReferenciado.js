//  referência criado através de um sub-processo. 
// Se o item for criado através de techinical support preenche o campo com não se caso o item for criado através de engenharia então preenche com sim

function Reference_Create(item) {
    log(reference.Type)
     
    if (reference.Type == 'MOC') {
        item.Fields.Esta_MOC_possui_projeto_atrelado = 'No/Não';
    }
    
    if (reference.Type == 'EPR') {
        item.Fields.Esta_MOC_possui_projeto_atrelado = 'Yes/Sim';
    }
    
}