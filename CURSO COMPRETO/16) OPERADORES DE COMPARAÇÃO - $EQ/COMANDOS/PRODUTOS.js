// Exemplo de uso do operador $eq para buscar produtos onde o nome é exatamente "Jaqueta de Couro"
db.loja.produtos.find({ nome: { $eq: "Jaqueta de Couro" } })
