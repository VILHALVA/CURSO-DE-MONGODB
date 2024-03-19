// Limitar os resultados da consulta de comida a 5 documentos e pular os primeiros 2 documentos
db.loja.comida.find().limit(5).skip(2)

// Limitar os resultados da consulta de comida a 10 documentos e pular os primeiros 5 documentos
db.loja.comida.find().limit(10).skip(5)
