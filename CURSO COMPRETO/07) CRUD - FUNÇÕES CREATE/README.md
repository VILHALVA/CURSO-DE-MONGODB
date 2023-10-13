# CRUD - FUNÇÕES CREATE
No contexto do MongoDB, as operações de criação, leitura, atualização e exclusão de dados são frequentemente referidas como operações CRUD (Create, Read, Update, Delete). Neste momento, vou explicar as funções de inserção de dados, que são responsáveis por criar novos documentos em uma coleção.

O MongoDB oferece várias maneiras de inserir dados em uma coleção:

**1. `insertOne` - Inserir um Único Documento:**

A função `insertOne` é usada para inserir um único documento em uma coleção. Ela aceita um documento (geralmente em formato BSON) como argumento e insere esse documento na coleção especificada.

Exemplo de uso:

```javascript
db.minha_colecao.insertOne({
   nome: "Alice",
   idade: 30,
   cidade: "São Paulo"
});
```

Neste exemplo, um único documento é inserido na coleção `minha_colecao`.

**2. `insertMany` - Inserir Vários Documentos:**

A função `insertMany` permite inserir vários documentos de uma vez em uma coleção. Você passa um array de documentos como argumento, e todos esses documentos são inseridos na coleção.

Exemplo de uso:

```javascript
db.minha_colecao.insertMany([
   { nome: "Bob", idade: 25, cidade: "Rio de Janeiro" },
   { nome: "Carol", idade: 35, cidade: "Recife" },
   { nome: "David", idade: 28, cidade: "Salvador" }
]);
```

Neste exemplo, três documentos são inseridos na coleção `minha_colecao` de uma só vez.

**3. `insert` - Obsoleto, use `insertOne` ou `insertMany:**

A função `insert` foi usada em versões antigas do MongoDB e é considerada obsoleta. Você deve preferir `insertOne` ou `insertMany` para inserções de documentos.

Exemplo de uso (não recomendado):

```javascript
db.minha_colecao.insert({
   nome: "Eva",
   idade: 22,
   cidade: "Fortaleza"
});
```

Em versões modernas do MongoDB, é mais recomendável usar `insertOne` para inserir um único documento ou `insertMany` para inserir vários documentos.

Lembre-se de que, ao inserir documentos, o MongoDB criará a coleção automaticamente se ela ainda não existir. Além disso, você pode especificar um campo `_id` para cada documento, que atua como um identificador exclusivo. Se você não fornecer um `_id`, o MongoDB gerará automaticamente um para você.

Essas funções de inserção de dados são essenciais para criar registros em coleções do MongoDB e são amplamente usadas na criação e atualização de dados em aplicativos que usam este banco de dados NoSQL.