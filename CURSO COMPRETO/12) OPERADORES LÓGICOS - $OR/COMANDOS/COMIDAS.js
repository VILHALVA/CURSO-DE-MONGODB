// Exemplo de uso do operador $or para buscar comidas com nome contendo "Pizza" OU descrição contendo "salada"
db.loja.comida.find({
    $or: [
        { nome: /Pizza/i }, // O operador $regex é usado para buscar um padrão dentro de uma string (ignorando maiúsculas e minúsculas)
        { descricao: /salada/i }
    ]
})
