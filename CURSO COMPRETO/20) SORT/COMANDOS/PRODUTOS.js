// Ordenar os resultados da consulta de produtos por ordem alfabética ascendente (A-Z) pelo campo "nome"
db.loja.produtos.find().sort({ nome: 1 })

// Ordenar os resultados da consulta de produtos por ordem alfabética descendente (Z-A) pelo campo "nome"
db.loja.produtos.find().sort({ nome: -1 })
