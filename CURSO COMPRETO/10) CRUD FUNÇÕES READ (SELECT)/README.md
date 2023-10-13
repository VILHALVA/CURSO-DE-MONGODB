# CRUD FUNÇÕES READ (SELECT)
No MongoDB, as operações de leitura, frequentemente referidas como operações de "seleção" em bancos de dados relacionais (equivalente a um comando `SELECT` em SQL), são realizadas principalmente por meio das funções `find` e `findOne`. Essas funções são usadas para recuperar documentos (ou registros) de uma coleção com base em critérios de consulta.

Aqui estão as principais funções de seleção no MongoDB e uma explicação sobre como usá-las:

**1. `find` - Recuperar Múltiplos Documentos:**

A função `find` é usada para recuperar vários documentos de uma coleção que correspondam a um determinado critério de consulta. Ela retorna um cursor, que é uma referência para os documentos correspondentes. Para acessar os resultados, é comum usar um loop para iterar sobre o cursor.

Exemplo de uso do `find`:

```javascript
// Recuperar todos os documentos em uma coleção
db.minha_colecao.find()

// Recuperar documentos com um critério específico
db.minha_colecao.find({ idade: 30 })

// Utilizar projeção para selecionar campos específicos
db.minha_colecao.find({ cidade: "Nova Iorque" }, { nome: 1, idade: 1 })
```

O `find` permite que você especifique critérios de consulta para filtrar documentos e pode ser usado com muitos operadores para realizar consultas complexas.

**2. `findOne` - Recuperar um Único Documento:**

A função `findOne` é usada para recuperar um único documento que corresponda a um determinado critério de consulta. Ela retorna o primeiro documento que atende aos critérios de consulta. Isso é útil quando você deseja recuperar apenas um único resultado, como um registro específico.

Exemplo de uso do `findOne`:

```javascript
// Recuperar o primeiro documento com idade igual a 30
db.minha_colecao.findOne({ idade: 30 })

// Recuperar um documento com base em vários critérios
db.minha_colecao.findOne({ nome: "Alice", idade: 25 })
```

O `findOne` é útil quando você espera apenas um resultado ou deseja recuperar o primeiro documento correspondente a um critério de consulta.

Ambas as funções `find` e `findOne` aceitam filtros de consulta que são usados para especificar as condições que os documentos devem atender para serem selecionados. Você pode usar operadores de consulta, como `$eq`, `$gt`, `$lt`, `$in`, `$and`, `$or`, entre outros, para criar critérios de consulta complexos.

Lembre-se de que o MongoDB retorna documentos no formato BSON, que é semelhante a JSON. Ao usar essas funções, você pode iterar sobre os resultados e manipular os documentos de acordo com suas necessidades.

Essas funções são a base para realizar operações de leitura (seleção) no MongoDB e são usadas para recuperar dados de coleções com base em critérios específicos.