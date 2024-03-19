# CRUD: FUNÇÕES UPDATE
As operações de atualização de dados em um banco de dados MongoDB são essenciais para modificar documentos existentes em uma coleção. Vou falar sobre três das funções de atualização mais comuns no MongoDB: `update`, `updateOne` e `updateMany`, e discutir a importância do operador `$set` nessas operações.

**1. `update` - Atualização Genérica (Obsoleto):**

A função `update` é obsoleta nas versões mais recentes do MongoDB e não é recomendada para uso. Em vez disso, você deve usar `updateOne` ou `updateMany` para operações de atualização específicas.

**2. `updateOne` - Atualizar um Único Documento:**

A função `updateOne` é usada para atualizar um único documento que corresponde a um filtro específico. Ela aceita um filtro para selecionar o documento a ser atualizado e um objeto de modificação para especificar as alterações.

Exemplo de uso do `updateOne`:

```javascript
db.minha_colecao.updateOne(
   { nome: "Alice" }, // Filtro para selecionar o documento
   {
      $set: { cidade: "Nova Iorque" } // Modificação - $set define o novo valor
   }
);
```

Neste exemplo, o documento com o nome "Alice" terá o campo `cidade` atualizado para "Nova Iorque".

**3. `updateMany` - Atualizar Múltiplos Documentos:**

A função `updateMany` é usada para atualizar vários documentos que correspondem a um filtro específico. Ela funciona de maneira semelhante ao `updateOne`, mas atualiza todos os documentos que atendem ao critério de seleção.

Exemplo de uso do `updateMany`:

```javascript
db.minha_colecao.updateMany(
   { idade: { $gt: 30 } }, // Filtro para selecionar documentos com idade superior a 30
   {
      $set: { categoria: "Mais de 30" } // Modificação - $set define a nova categoria
   }
);
```

Neste exemplo, todos os documentos com idade superior a 30 terão o campo `categoria` atualizado para "Mais de 30".

**O Operador `$set` nas Operações de Atualização:**

O operador `$set` é fundamental para operações de atualização no MongoDB. Ele é usado para definir um novo valor para um campo específico em um documento. Sem o operador `$set`, uma operação de atualização substituiria o documento inteiro pelo novo valor, o que pode resultar na perda de dados.

Ao usar `$set`, você pode atualizar apenas os campos desejados em um documento, mantendo os outros campos inalterados. Isso é crucial para a precisão e flexibilidade nas operações de atualização. Além do `$set`, o MongoDB oferece uma variedade de outros operadores para realizar operações de atualização mais avançadas, como `$inc` (incremento), `$push` (adicionar a um array), `$pull` (remover de um array), entre outros.

O uso eficaz do operador `$set` permite que você mantenha a integridade dos seus dados durante as operações de atualização, garantindo que apenas os campos necessários sejam modificados sem afetar o restante do documento.

