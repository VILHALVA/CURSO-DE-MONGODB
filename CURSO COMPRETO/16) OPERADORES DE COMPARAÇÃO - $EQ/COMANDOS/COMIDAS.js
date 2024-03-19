// Exemplo de uso do operador $eq para buscar comidas onde o nome é exatamente "Pizza Margherita"
db.loja.comida.find({ nome: { $eq: "Pizza Margherita" } })
