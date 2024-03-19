// Limitar os resultados da consulta de produtos a 20 documentos e pular os primeiros 10 documentos
db.loja.produtos.find().limit(20).skip(10)

// Limitar os resultados da consulta de produtos a 50 documentos e pular os primeiros 20 documentos
db.loja.produtos.find().limit(50).skip(20)
