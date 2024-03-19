// Exemplo de uso do operador $and para buscar produtos com nome contendo "Perfume Masculino" E sua descrição:
db.loja.produtos.find({
    $and: [
        { nome: /Perfume Masculino/i }, // O operador $regex é usado para buscar um padrão dentro de uma string (ignorando maiúsculas e minúsculas)
        { descricao: /Perfume masculino com fragrância marcante e duradoura/i }
    ]
})
