// Exemplo de uso do operador $lt para buscar produtos onde o nome é alfabeticamente anterior a "S" e retornar apenas o campo "nome"
db.loja.produtos.find({ nome: { $lt: "S" } }, { nome: 1, _id: 0 })

// Exemplo de uso do operador $lte para buscar produtos onde o nome é alfabeticamente anterior ou igual a "S" e retornar apenas o campo "nome"
db.loja.produtos.find({ nome: { $lte: "S" } }, { nome: 1, _id: 0 })

// Exemplo de uso do operador $gt para buscar produtos onde o nome é alfabeticamente posterior a "M" e retornar apenas o campo "nome"
db.loja.produtos.find({ nome: { $gt: "M" } }, { nome: 1, _id: 0 })

// Exemplo de uso do operador $gte para buscar produtos onde o nome é alfabeticamente posterior ou igual a "M" e retornar apenas o campo "nome"
db.loja.produtos.find({ nome: { $gte: "M" } }, { nome: 1, _id: 0 })
