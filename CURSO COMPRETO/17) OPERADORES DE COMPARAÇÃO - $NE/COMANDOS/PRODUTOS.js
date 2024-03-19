// Exemplo de uso do operador $ne para buscar produtos onde o nome não é "Jaqueta de Couro"
db.loja.produtos.find({ nome: { $ne: "Jaqueta de Couro" } })
