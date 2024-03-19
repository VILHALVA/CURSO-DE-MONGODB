db.loja.ENDEREÇO.updateOne(
    // Critério de filtro para encontrar o documento que deseja atualizar
    { rua: "Rua das Flores" },
    // Operador $set para atualizar o campo "rua" para o novo valor
    { $set: { rua: "Nova Rua" } }
)
