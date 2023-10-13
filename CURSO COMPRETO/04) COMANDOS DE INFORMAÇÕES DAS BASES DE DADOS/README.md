# COMANDOS DE INFORMAÇÕES DAS BASES DE DADOS
Vamos esclarecer o uso de comandos para obter informações sobre bancos de dados, coleções e documentos no MongoDB. Aqui estão alguns comandos e métodos que você pode usar para obter informações sobre bases de dados, coleções e documentos no MongoDB:

**Para obter informações sobre bases de dados:**

1. **Listar todas as bases de dados:**
   - No shell do MongoDB, você pode listar todas as bases de dados disponíveis usando o comando `show dbs`:
     ```
     show dbs
     ```

2. **Verificar a base de dados atual:**
   - Para verificar qual base de dados você está atualmente usando, você pode usar o comando `db` no shell do MongoDB:
     ```
     db
     ```

**Para obter informações sobre coleções:**

1. **Listar todas as coleções em uma base de dados:**
   - Você pode listar todas as coleções em uma base de dados específica usando o comando `show collections` no shell do MongoDB:
     ```
     use minha_base_de_dados
     show collections
     ```

**Para obter informações sobre documentos:**

1. **Contar o número de documentos em uma coleção:**
   - Use o método `countDocuments` para contar o número de documentos em uma coleção específica em uma base de dados:
     ```javascript
     db.minha_colecao.countDocuments()
     ```

2. **Listar documentos em uma coleção:**
   - Para listar documentos em uma coleção, você pode usar o método `find()`:
     ```javascript
     db.minha_colecao.find()
     ```

Estes são alguns dos comandos e métodos básicos para obter informações sobre bases de dados, coleções e documentos no MongoDB. Lembre-se de que a maioria desses comandos é executada no shell do MongoDB ou por meio de uma biblioteca de cliente se você estiver usando uma linguagem de programação para interagir com o MongoDB. Além disso, a forma exata de uso pode variar dependendo da versão do MongoDB e do driver que você está utilizando.