# LIMIT E SKIP
As operações `limit` e `skip` no MongoDB são usadas para controlar a quantidade de documentos retornados em uma consulta e a partir de qual documento a consulta deve começar. Essas operações são úteis ao implementar a paginação de resultados, permitindo que você exiba um número específico de documentos por página e navegue pelas páginas de resultados.

Aqui está uma explicação de como usar essas operações:

**1. `limit` (Limitar a Quantidade de Documentos):**

A operação `limit` é usada para especificar o número máximo de documentos a serem retornados em uma consulta. Ela limita a quantidade de resultados retornados pela consulta.

Sintaxe da operação `limit`:

```javascript
db.minha_colecao.find({ critério }).limit(quantidade)
```

- `{ critério }`: Os critérios de consulta que selecionam os documentos.
- `.limit(quantidade)`: O método `.limit()` que especifica o número máximo de documentos a serem retornados.

Exemplo de uso da operação `limit`:

```javascript
// Retorna os primeiros 10 documentos que atendem ao critério
db.minha_colecao.find({ cidade: "Nova Iorque" }).limit(10)
```

Neste exemplo, a consulta retorna apenas os primeiros 10 documentos cujo campo "cidade" seja igual a "Nova Iorque."

**2. `skip` (Pular Documentos):**

A operação `skip` é usada para especificar quantos documentos iniciais devem ser ignorados na consulta. Ela é frequentemente usada em conjunto com a operação `limit` para implementar a paginação.

Sintaxe da operação `skip`:

```javascript
db.minha_colecao.find({ critério }).skip(quantidade)
```

- `{ critério }`: Os critérios de consulta que selecionam os documentos.
- `.skip(quantidade)`: O método `.skip()` que especifica a quantidade de documentos a serem pulados.

Exemplo de uso da operação `skip`:

```javascript
// Pula os primeiros 5 documentos e retorna os próximos 10 que atendem ao critério
db.minha_colecao.find({ cidade: "Nova Iorque" }).skip(5).limit(10)
```

Neste exemplo, a consulta pula os primeiros 5 documentos que atendem ao critério e, em seguida, retorna os próximos 10.

Ao usar `limit` e `skip` juntas, você pode implementar a paginação eficazmente em sua aplicação. Isso permite que você divida grandes conjuntos de resultados em páginas menores, tornando a exibição e a navegação pelos resultados mais gerenciáveis. Certifique-se de considerar o desempenho ao usar essas operações em grandes coleções de dados, pois `skip` em particular pode ser custoso em termos de recursos se usado em conjunto com `limit` para grandes deslocamentos.