# DIFERENÇAS DE REGRAS ENTRE SQL E MONGODB
As diferenças nas regras entre SQL (bancos de dados relacionais) e MongoDB (banco de dados NoSQL schemaless) são fundamentais para entender como a estrutura de dados é gerenciada em ambos os sistemas. Vamos comparar as regras e demonstrar como a criação de tabelas (coleções no MongoDB) difere entre eles.

**SQL (Banco de Dados Relacional):**

1. **Esquema Rígido:** Em bancos de dados relacionais, como o MySQL ou PostgreSQL, você deve definir um esquema rígido com antecedência, especificando a estrutura de suas tabelas. Cada tabela tem colunas com tipos de dados predefinidos.

2. **Relações Rígidas:** Bancos de dados relacionais enfatizam relações entre tabelas usando chaves primárias e estrangeiras. Essas relações são rigorosas e devem ser definidas no esquema.

3. **SQL para Consultas:** Para recuperar dados, você usa a linguagem SQL com cláusulas como `SELECT`, `FROM`, `WHERE`, `JOIN`, etc.

4. **Transações ACID:** Os bancos de dados relacionais seguem o modelo ACID (Atomicidade, Consistência, Isolamento e Durabilidade) para garantir a integridade dos dados em transações.

**MongoDB (Banco de Dados NoSQL - Schemaless):**

1. **Esquema Flexível:** O MongoDB é schemaless, o que significa que você não precisa de um esquema rígido. Os documentos podem variar em estrutura, permitindo adicionar campos conforme necessário.

2. **Relações Não Rígidas:** O MongoDB não enfatiza relações rígidas. Você pode modelar relacionamentos de maneira diferente, incorporando documentos uns nos outros ou usando referências.

3. **Linguagem de Consulta Rica:** O MongoDB usa uma linguagem de consulta rica que se assemelha a JSON. Você pode realizar consultas com operadores como `$eq`, `$gt`, `$lt`, etc.

4. **Transações (Opcional):** O MongoDB suporta transações desde a versão 4.0, mas o suporte a transações é menos rígido do que em bancos de dados relacionais. Transações são usadas somente quando necessário.

**Exemplo de Criação de Tabelas (Coleções):**

**SQL (MySQL):**
```sql
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    idade INT,
    cidade VARCHAR(255)
);
```

**MongoDB (Shell):**
```javascript
// Não é necessário criar uma coleção explicitamente, ela será criada automaticamente ao inserir um documento
db.clientes.insertOne({
    nome: "John Doe",
    idade: 30,
    cidade: "Nova Iorque"
});
```

**Regras de uma Base Schemaless (MongoDB):**

- **Sem Esquema Rígido:** Não há necessidade de definir um esquema fixo com antecedência.
- **Documentos Flexíveis:** Documentos podem ter estruturas variadas, incluindo campos adicionais e aninhados.
- **Índices Opcionais:** Você pode criar índices para acelerar consultas em campos específicos, mas não são obrigatórios.
- **Relações Flexíveis:** Não há restrições rígidas em relação a relações. Você pode escolher como modelar relações.

A principal diferença está na flexibilidade do MongoDB para lidar com dados sem a necessidade de uma estrutura fixa. Isso é particularmente útil em cenários em que os requisitos de dados mudam com frequência ou quando você lida com dados semiestruturados ou não estruturados. No entanto, a escolha entre SQL e MongoDB dependerá dos requisitos específicos do projeto, da complexidade do modelo de dados, da escalabilidade e de outros fatores.