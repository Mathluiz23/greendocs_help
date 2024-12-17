// script criado para tratar um campo RTF exportado no template através de um campo memo

function Item_AfterEditFields(item) {
    if (item.Type == "NC e IC") {
       function formatHTMLToText(html) {
           html = html.replace(/<\/p>/g, '\n\n').replace(/<p>/g, '');
           html = html.replace(/<br\s*\/?>/g, '\n');
           html = html.replace(/<[^>]*>/g, '');
           html = html.replace(/\n{3,}/g, '\n\n');
           html = html.replace(/&nbsp;/g, ' ');
           return html.trim();
       }
       var textoFormatado = formatHTMLToText(item.Fields.Descricao_da_Nao_Conformidade);
       item.Fields.Descricao_da_Nao_Conformidade_Memo_template = textoFormatado;
    }
}