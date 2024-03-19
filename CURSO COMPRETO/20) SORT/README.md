# SORT
A operação `sort` no MongoDB é usada para ordenar os resultados de uma consulta com base em um ou mais campos de documentos. Você pode especificar a ordenação ascendente (crescente) ou descendente (decrescente) para cada campo. A ordenação é frequentemente usada para organizar os resultados em uma ordem específica antes de apresentá-los ao usuário ou aplicação.

A sintaxe básica da operação `sort` é a seguinte:

```javascript
db.minha_colecao.find({ critério }).sort({ campo1: 1, campo2: -1 })
```

- `{ critério }`: Os critérios de consulta para selecionar os documentos que deseja ordenar.
- `.sort({ campo1: 1, campo2: -1 })`: O método `.sort()` que especifica os campos pelos quais você deseja ordenar e a direção da ordenação. Use `1` para ordenação ascendente e `-1` para ordenação descendente.

Exemplo de uso da operação `sort`:

Suponha que você deseje encontrar documentos na coleção "pessoas" e ordená-los pelo campo "idade" em ordem decrescente. Você pode usar o seguinte comando:

```javascript
db.pessoas.find().sort({ idade: -1 })
```

Neste exemplo, os documentos da coleção "pessoas" serão retornados em ordem decrescente de acordo com o campo "idade."

Você também pode ordenar por vários campos, o que é útil quando precisa de uma ordenação mais complexa. Por exemplo, para ordenar por "idade" em ordem decrescente e, em seguida, por "nome" em ordem ascendente, você pode fazer o seguinte:

```javascript
db.pessoas.find().sort({ idade: -1, nome: 1 })
```

Isso classificará os documentos primeiro por idade em ordem decrescente e, em seguida, por nome em ordem ascendente.

A ordenação é uma operação flexível e essencial ao recuperar dados de um banco de dados MongoDB. Permite que você controle a ordem em que os resultados são retornados e é útil para criar listas ordenadas e relatórios. Certifique-se de considerar quais campos são apropriados para a ordenação com base nas necessidades da sua aplicação.