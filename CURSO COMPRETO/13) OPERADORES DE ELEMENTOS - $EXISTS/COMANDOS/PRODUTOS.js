// Exemplo de uso do operador $exists para buscar produtos que possuem o campo "nome"
db.loja.produtos.find({ nome: { $exists: true } })

// Exemplo de uso do operador $exists para buscar produtos que NÃO possuem o campo "descricao"
db.loja.produtos.find({ descricao: { $exists: false } })
