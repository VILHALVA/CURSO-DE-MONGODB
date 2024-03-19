// Exemplo de uso do operador $nor para buscar comidas onde nem o nome contém "Pizza" nem a descrição contém "salmão"
db.loja.comida.find({
    $nor: [
      { nome: /Pizza/i },
      { descricao: /salmão/i }
    ]
  })
  