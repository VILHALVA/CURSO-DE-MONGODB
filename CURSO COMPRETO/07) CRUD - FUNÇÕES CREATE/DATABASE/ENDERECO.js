// Criando a coleção "ENDEREÇO"
db.loja.createCollection("ENDEREÇO")

// Adicionando um único endereço
db.loja.ENDEREÇO.insertOne({
    rua: "Rua das Flores",
    numero: 123,
    cidade: "NÃO SEI",
    estado: "NUNCA NEM VI",
    cep: "12345-678"
})
