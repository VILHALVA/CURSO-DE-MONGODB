// Exemplo de uso do operador $exists para buscar comidas que possuem o campo "nome"
db.loja.comida.find({ nome: { $exists: true } })

// Exemplo de uso do operador $exists para buscar comidas que NÃO possuem o campo "descricao"
db.loja.comida.find({ descricao: { $exists: false } })
