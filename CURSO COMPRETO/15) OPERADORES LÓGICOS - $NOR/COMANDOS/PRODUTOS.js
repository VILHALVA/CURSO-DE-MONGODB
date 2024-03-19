// Exemplo de uso do operador $nor para buscar produtos onde nem o nome contém "Jaqueta" nem a descrição contém "resistente"
db.loja.produtos.find({
    $nor: [
      { nome: /Jaqueta/i },
      { descricao: /resistente/i }
    ]
  })
  