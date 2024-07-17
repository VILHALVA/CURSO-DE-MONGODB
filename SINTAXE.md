# SINTAXE
## TIPOS PRIMITIVOS:
O MongoDB é um banco de dados NoSQL orientado a documentos que utiliza documentos JSON-like para armazenar dados. Ele suporta vários tipos de dados primitivos que podem ser usados para definir os campos dentro dos documentos. Abaixo estão alguns dos tipos de dados primitivos mais comuns no MongoDB:

* **1. String:** Representa uma sequência de caracteres. É o tipo de dados mais comum para armazenar texto.
* **2. Number:** Representa números inteiros ou de ponto flutuante. Pode ser especificado como int32, int64 ou double.
* **3. Boolean:** Representa valores booleanos, que podem ser true ou false.
* **4. Date:** Representa valores de data e hora. No MongoDB, as datas são armazenadas como milissegundos desde a época Unix.
* **5. Array:** Representa uma lista de valores ordenados, que podem ser de tipos diferentes. É usado para armazenar vários valores em um único campo.
* **6. Object:** Representa um objeto embutido ou um documento. É usado para aninhar documentos dentro de outros documentos.
* **7. ObjectId:** Representa um identificador único para documentos no MongoDB. É comumente usado como chave primária.
* **8. Binary Data:** Representa dados binários. É usado para armazenar dados binários, como arquivos e imagens.
* **9. Null:** Representa um valor nulo ou ausente.
* **10. Regular Expression:** Representa uma expressão regular para correspondência de padrões de string.

Esses são alguns dos tipos de dados primitivos suportados pelo MongoDB. Eles permitem flexibilidade no armazenamento e na manipulação dos dados dentro dos documentos.

Aqui está um exemplo de como você pode criar um documento no MongoDB usando os tipos de dados mencionados anteriormente:

```json
{
    "_id": ObjectId("60c72b2f9b1d4a3d2c8e6b8b"),
    "nome": "João",
    "idade": 25,
    "altura": 1.75,
    "ativo": true,
    "data_nascimento": ISODate("1996-05-15T00:00:00Z"),
    "enderecos": [
        {
            "rua": "Rua A",
            "numero": 123,
            "cidade": "São Paulo",
            "estado": "SP"
        },
        {
            "rua": "Rua B",
            "numero": 456,
            "cidade": "Rio de Janeiro",
            "estado": "RJ"
        }
    ],
    "telefone": null,
    "notas": [85, 90, 78],
    "perfil": {
        "usuario": "joao123",
        "email": "joao@example.com"
    }
}
```

Neste exemplo, criamos um documento com vários campos usando diferentes tipos de dados, incluindo string, number, boolean, date, array, object, objectId e null.

## COMANDOS MAIS USADOS:
### NO BANCO DE DADOS:
Aqui estão alguns dos principais comandos do MongoDB para criação, seleção e exclusão de bancos de dados:

* **1. use:** O comando `use` é usado para selecionar um banco de dados específico no qual você deseja trabalhar. Se o banco de dados não existir, ele será criado.
Exemplo:
```shell
use meu_banco_de_dados
```

* **2. show dbs:** O comando `show dbs` é usado para exibir uma lista de todos os bancos de dados disponíveis no servidor.
Exemplo:
```shell
show dbs
```

* **3. db.dropDatabase():** O comando `db.dropDatabase()` é usado para excluir o banco de dados atual. Tenha cuidado ao usar esse comando, pois ele excluirá permanentemente todos os dados e estrutura do banco de dados.
Exemplo:
```javascript
db.dropDatabase()
```

Esses são alguns dos comandos básicos do MongoDB relacionados à criação, seleção e exclusão de bancos de dados.

### NAS COLEÇÕES:
Aqui estão alguns dos principais comandos do MongoDB para criação, alteração e exclusão de coleções:

* **1. db.createCollection:** O comando `db.createCollection` é usado para criar uma nova coleção no banco de dados. Você pode especificar opções adicionais, como tamanho e limites de documentos.
Exemplo:
```javascript
db.createCollection("minha_colecao")
```

* **2. db.getCollectionNames:** O comando `db.getCollectionNames` é usado para listar todas as coleções em um banco de dados.
Exemplo:
```javascript
db.getCollectionNames()
```

* **3. db.collection.renameCollection:** O comando `renameCollection` é usado para renomear uma coleção existente.
Exemplo:
```javascript
db.minha_colecao.renameCollection("nova_colecao")
```

* **4. db.collection.drop:** O comando `drop` é usado para excluir uma coleção do banco de dados. Tenha cuidado ao usar esse comando, pois ele excluirá permanentemente todos os documentos da coleção.
Exemplo:
```javascript
db.minha_colecao.drop()
```

Esses são alguns dos principais comandos do MongoDB relacionados à criação, alteração e exclusão de coleções.

## CATEGORIAS DE COMANDOS:
### DDL:
Os comandos DDL (Data Definition Language) são um conjunto de comandos utilizados no MongoDB para definir e gerenciar a estrutura dos objetos de um banco de dados, como coleções e índices. Abaixo estão alguns dos principais comandos DDL do MongoDB:

* **1. db.createCollection:** O comando `db.createCollection` é usado para criar uma nova coleção no banco de dados. Você pode especificar opções adicionais, como tamanho e limites de documentos.
Exemplo:
```javascript
db.createCollection("minha_colecao")
```

* **2. db.collection.renameCollection:** O comando `renameCollection` é usado para renomear uma coleção existente.
Exemplo:
```javascript
db.minha_colecao.renameCollection("nova_colecao")
```

* **3. db.collection.drop:** O comando `drop` é usado para excluir uma coleção do banco de dados juntamente com todos os documentos contidos nela.
Exemplo:
```javascript
db.minha_colecao.drop()
```

* **4. db.collection.createIndex:** O comando `createIndex` é usado para criar um índice em uma ou mais campos de uma coleção. Isso melhora a velocidade de busca e classificação dos dados.
Exemplo:
```javascript
db.minha_colecao.createIndex({ nome: 1 })
```

* **5. db.collection.dropIndex:** O comando `dropIndex` é usado para excluir um índice existente de uma coleção.
Exemplo:
```javascript
db.minha_colecao.dropIndex("nome_1")
```

Esses são alguns dos comandos DDL mais comumente usados no MongoDB. Eles permitem criar, modificar e excluir objetos do banco de dados, bem como definir índices para otimizar o desempenho das consultas.

### DML:
Os comandos DML (Data Manipulation Language) são um conjunto de comandos utilizados no MongoDB para manipular dados dentro de coleções existentes. Eles são usados para inserir, atualizar, excluir e consultar dados. Abaixo estão alguns dos principais comandos DML do MongoDB:

* **1. db.collection.find:** O comando `find` é usado para consultar e recuperar documentos de uma coleção. Ele permite especificar filtros, projeções, ordenações e limitação de resultados.
Exemplo:
```javascript
db.minha_colecao.find({ idade: { $gt: 18 } }).sort({ nome: 1 })
```

* **2. db.collection.insertOne:** O comando `insertOne` é usado para inserir um novo documento em uma coleção.
Exemplo:
```javascript
db.minha_colecao.insertOne({ nome: "João", idade: 25 })
```

* **3. db.collection.insertMany:** O comando `insertMany` é usado para inserir vários documentos em uma coleção.
Exemplo:
```javascript
db.minha_colecao.insertMany([
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 22 }
])
```

* **4. db.collection.updateOne:** O comando `updateOne` é usado para atualizar um único documento em uma coleção com base em um filtro.
Exemplo:
```javascript
db.minha_colecao.updateOne(
    { nome: "João" },
    { $set: { idade: 26 } }
)
```

* **5. db.collection.updateMany:** O comando `updateMany` é usado para atualizar vários documentos em uma coleção com base em um filtro.
Exemplo:
```javascript
db.minha_colecao.updateMany(
    { idade: { $lt: 18 } },
    { $set: { menor_de_idade: true } }
)
```

* **6. db.collection.deleteOne:** O comando `deleteOne` é usado para excluir um único documento de uma coleção com base em um filtro.
Exemplo:
```javascript
db.minha_colecao.deleteOne({ nome: "João" })
```

* **7. db.collection.deleteMany:** O comando `deleteMany` é usado para excluir vários documentos de uma coleção com base em um filtro.
Exemplo:
```javascript
db.minha_colecao.deleteMany({ idade: { $lt: 18 } })
```

Esses são alguns dos principais comandos DML do MongoDB. Eles permitem inserir, atualizar, excluir e consultar dados em coleção.

## COLLETION ~= TABELAS:
Sim, as coleções no MongoDB são análogas às tabelas em um banco de dados relacional, como o MySQL. No entanto, existem algumas diferenças importantes entre coleções no MongoDB e tabelas em um banco de dados relacional:

1. **Esquema flexível**: As coleções no MongoDB têm um esquema flexível, o que significa que os documentos em uma coleção não precisam ter a mesma estrutura. Cada documento pode ter campos diferentes e o esquema pode ser alterado dinamicamente.

2. **Sem esquema rígido**: Ao contrário das tabelas em bancos de dados relacionais, as coleções no MongoDB não têm um esquema rígido que defina a estrutura dos documentos. Isso oferece mais flexibilidade ao lidar com dados não estruturados ou semiestruturados.

3. **Documentos em vez de linhas**: Em vez de linhas como em uma tabela relacional, os dados são armazenados como documentos BSON (JSON binário) em uma coleção. Cada documento é uma estrutura de dados independente que pode conter campos e valores arbitrários.

4. **Sem suporte a transações em várias coleções**: Enquanto bancos de dados relacionais como o MySQL suportam transações ACID (Atomicidade, Consistência, Isolamento, Durabilidade) que podem abranger várias tabelas, o MongoDB oferece suporte a transações apenas em uma única coleção em uma única instância.

No geral, as coleções no MongoDB desempenham um papel semelhante ao das tabelas em bancos de dados relacionais, mas com algumas diferenças fundamentais devido à natureza flexível e sem esquema do MongoDB.

## MONGODB != [MYSQL:](https://github.com/VILHALVA/CURSO-DE-MYSQL)
| MySQL                      | MongoDB                          |
|----------------------------|----------------------------------|
| Banco de dados            | Banco de dados                   |
| Tabelas                   | Coleções                         |
| Linhas                    | Documentos                       |
| Colunas                   | Campos                           |
| Chave primária            | Chave primária (\_id)            |
| Chave estrangeira         | Referência de documento aninhado |
| Índices                   | Índices                          |
| JOINs                     | Operações de agregação           |
| SQL (Structured Query Language) | Operações de consulta           |
| Transações                | Operações de transação           |
| ACID (Atomicidade, Consistência, Isolamento, Durabilidade) | ACID (geralmente apenas Atomicidade e Durabilidade) |
| Schema rígido             | Schema flexível                  |
| Normalização              | Denormalização                   |
| Relacionamento um-para-muitos | Referência de documento aninhado |
| Relacionamento muitos-para-muitos | Referências mútuas ou array de referências |
| Suporte a SQL completo    | Não utiliza SQL                  |


1. **Banco de dados**: Ambos o MySQL e o MongoDB são sistemas de gerenciamento de banco de dados (SGBD) que armazenam e gerenciam dados.

2. **Tabelas vs. Coleções**: No MySQL, os dados são organizados em tabelas, que consistem em linhas e colunas. No MongoDB, os dados são armazenados em coleções, que são conjuntos de documentos.

3. **Linhas vs. Documentos**: Em um banco de dados MySQL, cada linha representa um registro de dados individual dentro de uma tabela. No MongoDB, cada documento representa um registro de dados, e todos os dados relacionados são agrupados dentro desse documento.

4. **Colunas vs. Campos**: Em um banco de dados MySQL, as colunas representam os atributos individuais de um registro, enquanto no MongoDB, os campos são as chaves e valores dentro de um documento.

5. **Chave primária**: Tanto no MySQL quanto no MongoDB, é possível ter uma chave primária para identificar exclusivamente cada registro/documento. No MongoDB, por padrão, a chave primária é chamada de `_id`.

6. **Chave estrangeira**: No MySQL, as chaves estrangeiras são usadas para estabelecer relacionamentos entre tabelas. No MongoDB, os relacionamentos podem ser representados por referências de documento aninhadas (como um objeto dentro de outro objeto) ou por referências mútuas (um documento faz referência a outro por meio de um campo).

7. **Índices**: Tanto no MySQL quanto no MongoDB, índices podem ser criados para melhorar o desempenho das consultas. Eles ajudam a acelerar a pesquisa e recuperação de dados.

8. **JOINs vs. Operações de agregação**: No MySQL, os JOINs são usados para combinar dados de múltiplas tabelas em uma consulta. No MongoDB, as operações de agregação, como `$lookup`, são usadas para realizar operações semelhantes, onde dados de múltiplas coleções são combinados.

9. **SQL vs. Operações de consulta**: O MySQL utiliza a linguagem SQL (Structured Query Language) para realizar operações de consulta e manipulação de dados. No MongoDB, as consultas são feitas usando operadores específicos do MongoDB, como `$match`, `$group`, `$project`, entre outros.

10. **Transações e ACID**: O MySQL suporta transações ACID (Atomicidade, Consistência, Isolamento e Durabilidade) para garantir a integridade dos dados. O MongoDB geralmente suporta apenas Atomicidade e Durabilidade, embora a disponibilidade de transações tenha sido introduzida em versões mais recentes.

11. **Schema rígido vs. Schema flexível**: No MySQL, o esquema de uma tabela é rígido e requer a definição prévia das colunas e seus tipos de dados. No MongoDB, o esquema é flexível, permitindo que os documentos na mesma coleção tenham estruturas diferentes.

12. **Normalização vs. Denormalização**: No MySQL, a normalização é o processo de organizar os dados em tabelas para evitar a redundância e a dependência. No MongoDB, a denormalização é muitas vezes preferida, onde os dados são combinados em um único documento para otimizar o desempenho das consultas.

13. **Relacionamentos um-para-muitos vs. muitos-para-muitos**: No MySQL, os relacionamentos um-para-muitos são estabelecidos usando chaves estrangeiras. No MongoDB, isso pode ser feito por meio de referências de documento aninhadas (um documento dentro de outro) ou por referências mútuas (um documento referenciando outro por meio de um campo).

14. **Suporte a SQL completo**: Enquanto o MySQL suporta SQL completo, o MongoDB não utiliza SQL, em vez disso, usa uma interface baseada em JSON e operações específicas do MongoDB.

## DOCUMENTS JSON:
Quando você importa um arquivo JSON para o MongoDB usando a ferramenta `mongoimport`, cada objeto JSON no arquivo é considerado como um documento no banco de dados MongoDB. 

No exemplo que forneci, o arquivo [`ANIMAIS.json`](./ANIMAIS.json) continha uma matriz de quatro objetos JSON, cada um representando um animal diferente, com suas propriedades como nome, espécie, habitat e alimentação.

Quando você importa esse arquivo usando `mongoimport`, o MongoDB insere cada objeto JSON como um documento separado em sua coleção especificada. Portanto, como havia quatro objetos no arquivo JSON, quatro documentos foram criados na coleção do MongoDB. Cada documento agora representa um animal na sua coleção.

