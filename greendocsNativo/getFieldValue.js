var idFieldValue = getFieldValueID(item, nomeInterno);

function getFieldValueID(item, nomeInterno) {
    var fieldValue = item.Fields[nomeInterno];
    if (fieldValue && fieldValue.Rows) {
        return fieldValue.Rows[0].Columns.ID;
    }
    return null;
}