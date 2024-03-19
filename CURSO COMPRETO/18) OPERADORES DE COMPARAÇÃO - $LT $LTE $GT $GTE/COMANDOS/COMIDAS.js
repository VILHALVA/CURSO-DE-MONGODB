// Exemplo de uso do operador $lt para buscar comidas onde o nome é alfabeticamente anterior a "P"
db.loja.comida.find({ nome: { $lt: "P" } })

// Exemplo de uso do operador $lte para buscar comidas onde o nome é alfabeticamente anterior ou igual a "P"
db.loja.comida.find({ nome: { $lte: "P" } })

// Exemplo de uso do operador $gt para buscar comidas onde o nome é alfabeticamente posterior a "M"
db.loja.comida.find({ nome: { $gt: "M" } })

// Exemplo de uso do operador $gte para buscar comidas onde o nome é alfabeticamente posterior ou igual a "M"
db.loja.comida.find({ nome: { $gte: "M" } })
