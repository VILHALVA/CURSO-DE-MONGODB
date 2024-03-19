// Exemplo de uso do operador $not para buscar produtos onde o nome NÃO contenha "Jaqueta"
db.loja.produtos.find({ nome: { $not: /Jaqueta/i } })

// Exemplo de uso do operador $not para buscar produtos onde a descrição NÃO contenha "resistente"
db.loja.produtos.find({ descricao: { $not: /resistente/i } })
