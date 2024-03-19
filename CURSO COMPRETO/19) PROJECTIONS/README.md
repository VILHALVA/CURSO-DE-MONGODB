# PROJECTIONS
As projeções no MongoDB são usadas para controlar quais campos de um documento devem ser incluídos ou excluídos nos resultados de uma consulta. Elas permitem que você especifique quais campos são retornados em documentos correspondentes, permitindo que você limite a quantidade de dados que é recuperada em uma consulta. As projeções são úteis para otimizar consultas e economizar largura de banda, pois você pode solicitar apenas os campos que são relevantes para a sua aplicação.

Existem duas maneiras de especificar projeções em consultas no MongoDB: incluindo ou excluindo campos. Aqui estão os principais operadores de projeção no MongoDB:

**1. Incluir Campos:**

Para incluir campos específicos em documentos correspondentes, você pode usar o operador de projeção `$project`. Você deve fornecer um objeto que contenha os campos que deseja incluir na projeção.

Exemplo de projeção para incluir campos:

```javascript
db.minha_colecao.find({ critério }, { campo1: 1, campo2: 1 })
```

Neste exemplo, a consulta retornará apenas os campos `campo1` e `campo2` dos documentos correspondentes.

**2. Excluir Campos:**

Para excluir campos específicos em documentos correspondentes, você pode usar o operador de projeção `$project` com um valor `0` para os campos que deseja excluir.

Exemplo de projeção para excluir campos:

```javascript
db.minha_colecao.find({ critério }, { campo_indesejado: 0, outro_campo_indesejado: 0 })
```

Neste exemplo, a consulta retornará todos os campos, exceto `campo_indesejado` e `outro_campo_indesejado`.

As projeções são úteis em situações em que você deseja limitar a quantidade de dados recuperados em uma consulta. Isso pode melhorar o desempenho e a eficiência da sua aplicação, especialmente quando você lida com grandes volumes de dados. Lembre-se de que, ao criar projeções, você deve equilibrar a quantidade de dados recuperados com as necessidades da sua aplicação, garantindo que as informações essenciais sejam sempre incluídas nos resultados da consulta.