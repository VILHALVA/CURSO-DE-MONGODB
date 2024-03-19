// Realizar a consulta na coleção "vendas" e armazenar o resultado em uma variável chamada "result"
var result = db.vendas.find()

// Iterar sobre os documentos retornados
result.forEach(function(venda) {
    printjson(venda); // Exibir cada documento
})
