// Exemplo de uso do operador $or para buscar produtos com nome contendo "Jaqueta" OU descrição contendo "resistente"
db.loja.produtos.find({
    $or: [
        { nome: /Jaqueta/i },
        { descricao: /resistente/i }
    ]
})
