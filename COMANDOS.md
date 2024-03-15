# COMANDOS DE MONGODB VS MYSQL
Aqui está uma tabela comparativa dos principais comandos entre MySQL e MongoDB:

| Operação             | MySQL                                         | MongoDB                               |
|----------------------|-----------------------------------------------|---------------------------------------|
| Criar Banco de Dados | `CREATE DATABASE database_name;`             | -                                     |
| Usar Banco de Dados  | `USE database_name;`                          | `use database_name;`                 |
| Criar Coleção       | -                                             | `db.createCollection("collection_name");` |
| Inserir Documento    | `INSERT INTO table_name (column1, column2,...)| `db.collection_name.insert({key1: value1, key2: value2, ...});` |
| Ler Documento        | `SELECT * FROM table_name WHERE condition;`   | `db.collection_name.find({key: value});` |
| Atualizar Documento  | `UPDATE table_name SET column1 = value1 WHERE condition;` | `db.collection_name.update({key: value}, {$set: {new_key: new_value}});` |
| Excluir Documento    | `DELETE FROM table_name WHERE condition;`     | `db.collection_name.deleteOne({key: value});` |
| Excluir Coleção      | `DROP TABLE table_name;`                      | `db.collection_name.drop();`         |
| Listar Bancos de Dados | `SHOW DATABASES;`                            | `show databases;`                     |
| Listar Coleções      | -                                             | `show collections;`                   |
| Listar Documentos    | `SELECT * FROM table_name;`                   | `db.collection_name.find();`          |

Essa tabela lista os comandos básicos de cada sistema de banco de dados para operações comuns. Lembre-se de que há muitos outros comandos disponíveis, e a sintaxe exata pode variar dependendo da versão específica e das configurações do banco de dados.