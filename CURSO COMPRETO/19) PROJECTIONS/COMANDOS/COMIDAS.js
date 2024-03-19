// Exemplo de uso do operador $lt para buscar comidas onde o nome é alfabeticamente anterior a "P" e retornar apenas o campo "nome"
db.loja.comida.find({ nome: { $lt: "P" } }, { nome: 1, _id: 0 })

// Exemplo de uso do operador $lte para buscar comidas onde o nome é alfabeticamente anterior ou igual a "P" e retornar apenas o campo "nome"
db.loja.comida.find({ nome: { $lte: "P" } }, { nome: 1, _id: 0 })

// Exemplo de uso do operador $gt para buscar comidas onde o nome é alfabeticamente posterior a "M" e retornar apenas o campo "nome"
db.loja.comida.find({ nome: { $gt: "M" } }, { nome: 1, _id: 0 })

// Exemplo de uso do operador $gte para buscar comidas onde o nome é alfabeticamente posterior ou igual a "M" e retornar apenas o campo "nome"
db.loja.comida.find({ nome: { $gte: "M" } }, { nome: 1, _id: 0 })
