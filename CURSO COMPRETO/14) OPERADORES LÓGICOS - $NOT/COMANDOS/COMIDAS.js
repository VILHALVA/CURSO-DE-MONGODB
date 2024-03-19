// Exemplo de uso do operador $not para buscar comidas onde o nome NÃO contenha "Pizza"
db.loja.comida.find({ nome: { $not: /Pizza/i } })

// Exemplo de uso do operador $not para buscar comidas onde a descrição NÃO contenha "salmão"
db.loja.comida.find({ descricao: { $not: /salmão/i } })
