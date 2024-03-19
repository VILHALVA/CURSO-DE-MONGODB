// Exemplo de uso do operador $lt para buscar produtos onde o nome é alfabeticamente anterior a "S"
db.loja.produtos.find({ nome: { $lt: "S" } })

// Exemplo de uso do operador $lte para buscar produtos onde o nome é alfabeticamente anterior ou igual a "S"
db.loja.produtos.find({ nome: { $lte: "S" } })

// Exemplo de uso do operador $gt para buscar produtos onde o nome é alfabeticamente posterior a "M"
db.loja.produtos.find({ nome: { $gt: "M" } })

// Exemplo de uso do operador $gte para buscar produtos onde o nome é alfabeticamente posterior ou igual a "M"
db.loja.produtos.find({ nome: { $gte: "M" } })
