// Para ler todos os documentos na coleção "comida":
db.loja.comida.find()

// Para ler todos os documentos na coleção "produtos":
db.loja.produtos.find()

// Se desejar filtrar os documentos com base em critérios específicos ou projetar apenas os campos desejados, você pode passar argumentos adicionais para o método find(). Por exemplo:
db.loja.produtos.find({ nome: { $gt: "Tênis Esportivo" }})

// Para projetar apenas o campo "nome" na coleção "comida":
db.loja.comida.find({}, { nome: 1, _id: 0 })

