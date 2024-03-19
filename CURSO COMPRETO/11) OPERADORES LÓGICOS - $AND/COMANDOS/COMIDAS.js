// Exemplo de uso do operador $and para buscar produtos com nome contendo "Pizza Margherita" E sua descrição:
db.loja.produtos.find({
    $and: [
        { nome: /Pizza Margherita/i }, // O operador $regex é usado para buscar um padrão dentro de uma string (ignorando maiúsculas e minúsculas)
        { descricao: /Pizza tradicional italiana com molho de tomate, mussarela e manjericão…/i }
    ]
})
