# EXERCÍCIO - CRIANDO COLEÇÃO DE VENDAS
No MongoDB, é importante entender que ele não é um banco de dados relacional no sentido tradicional, como o MySQL ou o PostgreSQL. Em vez disso, o MongoDB é um banco de dados NoSQL, orientado a documentos, o que significa que os dados são armazenados em documentos JSON (BSON) flexíveis, em vez de tabelas com esquemas rígidos.

No entanto, você ainda pode modelar dados no MongoDB de uma maneira que se assemelha a uma estrutura tabular ou relacional. Para criar uma "tabela" de vendas e realizar operações de seleção, você pode seguir estas etapas:

**Passo 1: Conectar ao Banco de Dados e Criar uma Coleção:**

Certifique-se de que você está conectado ao seu banco de dados MongoDB e que tenha uma base de dados criada. Em seguida, crie uma coleção chamada "vendas" onde você irá armazenar os documentos de vendas.

```javascript
use minha_base_de_dados
db.createCollection("vendas")
```

**Passo 2: Inserir Documentos de Vendas:**

Para simular uma "tabela" de vendas, você pode inserir documentos JSON na coleção "vendas" que representem registros de vendas. Cada documento pode conter campos como "data", "produto", "quantidade", "valor", entre outros.

```javascript
db.vendas.insert({
  data: "2023-10-13",
  produto: "Produto A",
  quantidade: 10,
  valor: 500
})

db.vendas.insert({
  data: "2023-10-14",
  produto: "Produto B",
  quantidade: 5,
  valor: 300
})

// Insira mais documentos de vendas conforme necessário
```

**Passo 3: Consultar Documentos de Vendas:**

Agora, você pode consultar os documentos de vendas na coleção "vendas" usando o método `find` do MongoDB. Por exemplo, para selecionar todas as vendas:

```javascript
db.vendas.find()
```

Para selecionar vendas com critérios específicos, você pode passar um objeto de consulta como argumento para o método `find`. Por exemplo, para encontrar todas as vendas com um valor maior que 400:

```javascript
db.vendas.find({ valor: { $gt: 400 } })
```

