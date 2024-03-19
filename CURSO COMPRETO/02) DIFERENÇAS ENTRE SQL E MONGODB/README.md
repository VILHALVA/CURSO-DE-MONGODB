# DIFERENÇAS ENTRE SQL E MONGODB
## DIFERENÇAS:
O SQL (Structured Query Language) e o MongoDB são dois sistemas de gerenciamento de banco de dados (SGBD) com abordagens diferentes para armazenar e recuperar dados. Aqui estão algumas das principais diferenças entre SQL e MongoDB:

1. **Modelagem de Dados:**

   - **SQL:** Os bancos de dados relacionais, como o MySQL e o PostgreSQL, usam uma abordagem tabular para armazenar dados. Os dados são organizados em tabelas com esquemas fixos, onde cada tabela tem colunas predefinidas.

   - **MongoDB:** O MongoDB é um banco de dados NoSQL orientado a documentos que armazena dados em formato de documento BSON (Binary JSON). Os dados são armazenados em documentos flexíveis que podem ter estruturas variáveis, incluindo campos aninhados.

2. **Consulta e Linguagem de Consulta:**

   - **SQL:** O SQL é uma linguagem de consulta declarativa usada para recuperar, filtrar, juntar e manipular dados em tabelas relacionais. Ela usa cláusulas como `SELECT`, `FROM`, `WHERE`, `JOIN`, `GROUP BY`, entre outras.

   - **MongoDB:** O MongoDB usa uma linguagem de consulta rica que é semelhante ao JSON. As consultas são realizadas em documentos BSON usando operadores como `$eq`, `$gt`, `$lt` para filtrar e manipular dados.

3. **Esquema e Flexibilidade:**

   - **SQL:** Bancos de dados SQL possuem esquemas rígidos e requerem que os dados estejam em conformidade com a estrutura definida pelas tabelas. Mudanças no esquema podem ser complexas.

   - **MongoDB:** O MongoDB é altamente flexível e não requer um esquema rígido. Documentos podem variar em estrutura, permitindo que você adicione ou remova campos conforme necessário.

4. **Escalabilidade:**

   - **SQL:** A escalabilidade dos bancos de dados relacionais geralmente envolve aumentar a capacidade do servidor (escalabilidade vertical), o que pode ser complexo.

   - **MongoDB:** O MongoDB é altamente escalável e suporta a escalabilidade horizontal. Você pode adicionar mais servidores para aumentar a capacidade de armazenamento e lidar com cargas de trabalho maiores.

5. **Transações:**

   - **SQL:** Bancos de dados relacionais, como o MySQL, são conhecidos por seu suporte a transações e conformidade com o padrão ACID. Transações garantem consistência e integridade.

   - **MongoDB:** O MongoDB suporta transações desde a versão 4.0, mas o suporte a transações é menos rígido do que em bancos de dados relacionais. As transações são usadas quando necessário.

6. **Índices:**

   - **SQL:** Os bancos de dados relacionais suportam índices para acelerar consultas em colunas específicas.

   - **MongoDB:** O MongoDB suporta a criação de índices em campos específicos, mas também pode indexar campos incorporados em documentos.

7. **Relacionamento de Dados:**

   - **SQL:** Bancos de dados relacionais são projetados para criar relacionamentos entre tabelas usando chaves estrangeiras.

   - **MongoDB:** O MongoDB não enfatiza a criação de relacionamentos rígidos entre documentos, mas permite que você modele relacionamentos de forma diferente, incorporando documentos uns nos outros ou usando referências.

A escolha entre SQL e MongoDB depende das necessidades do projeto, da estrutura de dados, da escalabilidade e da complexidade do modelo de dados. Frequentemente, as soluções envolvem o uso de ambos os tipos de banco de dados, dependendo das demandas específicas do aplicativo.

## JOINS, SCHEMALESS E AFINS:
Vamos explorar com mais detalhes os conceitos de "joins" e "schemaless" e como eles se relacionam ao uso de bancos de dados SQL e MongoDB.

**Joins:**

**Joins** são uma operação comum em bancos de dados relacionais (SQL) que permitem combinar dados de duas ou mais tabelas com base em uma coluna comum. Isso é especialmente útil quando você tem dados relacionados distribuídos em várias tabelas e deseja recuperar informações de várias fontes. Existem vários tipos de joins, incluindo:

1. **INNER JOIN:** Retorna apenas os registros que têm correspondências em ambas as tabelas.
2. **LEFT JOIN (OUTER JOIN):** Retorna todos os registros da tabela à esquerda e os registros correspondentes da tabela à direita.
3. **RIGHT JOIN (OUTER JOIN):** Retorna todos os registros da tabela à direita e os registros correspondentes da tabela à esquerda.
4. **FULL JOIN (OUTER JOIN):** Retorna todos os registros de ambas as tabelas, combinando registros quando houver correspondência.

**Schemaless (Sem Esquema):**

O termo **"schemaless"** está intimamente relacionado ao MongoDB e outros bancos de dados NoSQL. Refere-se à capacidade de armazenar dados sem a necessidade de um esquema rígido. No contexto do MongoDB:

- **Flexibilidade:** No MongoDB, os documentos em uma coleção podem ter estruturas variadas. Isso significa que você pode adicionar campos a um documento sem precisar atualizar um esquema central, o que é uma característica chave do "schemaless."

- **Adaptação Rápida:** Em aplicativos que evoluem rapidamente, é útil ter a capacidade de acomodar novos campos ou tipos de dados sem interromper os sistemas existentes.

- **Menos Restrições:** Os bancos de dados "schemaless" são menos restritivos em comparação com os bancos de dados relacionais. Isso permite que você lide com dados semiestruturados ou não estruturados de maneira mais eficiente.

**Como o MongoDB se Encaixa:**

O MongoDB é um exemplo de banco de dados "schemaless". Ele permite que você armazene documentos BSON (Binários JSON) com flexibilidade na modelagem de dados. No entanto, isso não significa que ele não tenha estrutura; a estrutura é definida pelos documentos individuais, mas os documentos na mesma coleção podem ter estruturas diferentes. Isso é especialmente útil para aplicativos que têm requisitos de dados variáveis ou em evolução, onde a capacidade de adaptar rapidamente o esquema de dados é importante.

Embora o MongoDB seja "schemaless," ele ainda fornece mecanismos para criar índices, realizar consultas ricas e suporta recursos como transações (a partir da versão 4.0) para garantir a consistência de dados em ambientes que precisam dela.

Em resumo, "joins" são comuns em bancos de dados SQL para combinar dados de várias tabelas, enquanto a característica "schemaless" do MongoDB permite flexibilidade na modelagem de dados e acomodação de dados semiestruturados ou não estruturados. A escolha entre esses bancos de dados dependerá das necessidades específicas do seu projeto e das características de seus dados.