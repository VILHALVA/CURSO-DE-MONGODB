// Ordenar os resultados da consulta de comidas por ordem alfabética ascendente (A-Z) pelo campo "nome"
db.loja.comida.find().sort({ nome: 1 })

// Ordenar os resultados da consulta de comidas por ordem alfabética descendente (Z-A) pelo campo "nome"
db.loja.comida.find().sort({ nome: -1 })
