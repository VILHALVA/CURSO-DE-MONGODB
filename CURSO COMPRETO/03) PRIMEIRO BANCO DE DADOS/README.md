# PRIMEIRO BANCO DE DADOS
Vou explicar como criar sua primeira base de dados no MongoDB e, em seguida, comparar o processo com a criação de uma base de dados no Microsoft SQL Server.

**Criando uma Base de Dados no MongoDB:**

Para criar uma base de dados no MongoDB, siga estas etapas:

1. **Inicie o MongoDB:** Certifique-se de que o MongoDB esteja em execução no seu sistema. Você pode iniciar o servidor MongoDB usando o comando `mongod` ou iniciar o serviço (consulte as instruções de instalação anteriores).

2. **Conecte-se ao Servidor MongoDB:** Abra um terminal ou prompt de comando e execute o seguinte comando para conectar-se ao servidor MongoDB (por padrão, o MongoDB é executado na porta 27017):
   ```
   mongo
   ```

3. **Crie a Base de Dados:** No shell do MongoDB, você pode criar uma base de dados usando o comando `use`. Por exemplo, para criar uma base de dados chamada "minha_base_de_dados", digite:
   ```
   use minha_base_de_dados
   ```

Nesse ponto, sua base de dados foi criada. Lembre-se de que no MongoDB, a base de dados não é realmente criada até que você insira dados nela. O MongoDB criará a base de dados automaticamente quando você inserir o primeiro documento nela.

Agora, vamos comparar isso com a criação de uma base de dados no Microsoft SQL Server.

**Criando uma Base de Dados no Microsoft SQL Server:**

No Microsoft SQL Server, o processo é diferente e envolve o uso de SQL Management Studio (SSMS) ou comandos SQL. Aqui estão as etapas gerais:

1. **Inicie o SQL Server:** Certifique-se de que o SQL Server esteja em execução no seu sistema. Você pode iniciar o SQL Server e o SQL Server Management Studio (SSMS).

2. **Conecte-se ao SQL Server:** Abra o SQL Server Management Studio e conecte-se ao servidor SQL onde deseja criar a base de dados.

3. **Crie a Base de Dados:** No SQL Server, você pode criar uma base de dados usando SQL ou usando a interface gráfica do SSMS. Para criar uma base de dados com SQL, use o comando `CREATE DATABASE`. Por exemplo:
   ```sql
   CREATE DATABASE MinhaBaseDeDados
   ```

Aqui, a base de dados é criada no momento da execução do comando SQL.

**Comparação:**

- No MongoDB, a base de dados é criada automaticamente quando você insere dados nela, não é necessário um comando de criação explícito.

- No SQL Server, você deve usar um comando SQL específico para criar uma base de dados, e ela é criada no momento da execução do comando.

Portanto, a principal diferença reside na abordagem de criação de base de dados: o MongoDB cria dinamicamente a base de dados no momento em que você insere dados, enquanto o SQL Server requer que você crie a base de dados explicitamente com um comando SQL. Ambos os sistemas são poderosos, mas têm abordagens diferentes para gerenciar a estrutura do banco de dados.

## INSERINDO DADOS NO MONGO:
Para inserir dados em uma coleção no MongoDB, você pode usar o comando `insert` ou seu equivalente, `insertOne` (para inserir um único documento) ou `insertMany` (para inserir vários documentos de uma vez). Aqui estão os passos para inserir dados no MongoDB:

**Inserindo um único documento:**

1. Conecte-se ao servidor MongoDB usando o shell do MongoDB ou uma biblioteca de cliente.

2. Escolha a coleção na qual você deseja inserir o documento. Se a coleção ainda não existir, o MongoDB a criará automaticamente quando você inserir o primeiro documento.

3. Use o comando `insertOne` para inserir um único documento na coleção. O documento é um objeto JSON ou um documento BSON que você deseja inserir.

Exemplo:

```javascript
db.minha_colecao.insertOne({
   nome: "John Doe",
   idade: 30,
   cidade: "Nova Iorque"
})
```

O código acima insere um único documento na coleção `minha_colecao` com três campos: `nome`, `idade` e `cidade`.

**Inserindo vários documentos:**

Para inserir vários documentos de uma vez, você pode usar o comando `insertMany`. Este comando aceita uma matriz de documentos a serem inseridos.

Exemplo:

```javascript
db.minha_colecao.insertMany([
   { nome: "Alice", idade: 25, cidade: "Los Angeles" },
   { nome: "Bob", idade: 32, cidade: "Chicago" },
   { nome: "Eve", idade: 28, cidade: "San Francisco" }
])
```

O código acima insere três documentos na coleção `minha_colecao`.

Lembre-se de que, em um ambiente de produção, é importante lidar com erros e exceções ao inserir dados. Verifique o retorno dos comandos `insert` ou use tratamento de erros em seu código.

Além disso, se você estiver usando uma biblioteca de cliente para o MongoDB (por exemplo, em Node.js, Python, Java, etc.), os métodos de inserção podem variar, mas o conceito geral será o mesmo: fornecer os dados que você deseja inserir em sua coleção.