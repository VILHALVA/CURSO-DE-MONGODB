// Exemplo de uso do operador $ne para buscar comidas onde o nome não é "Pizza Margherita"
db.loja.comida.find({ nome: { $ne: "Pizza Margherita" } })
