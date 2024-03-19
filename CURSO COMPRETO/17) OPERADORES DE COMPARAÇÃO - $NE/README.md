# OPERADORES DE COMPARAÇÃO - $NE
O operador de comparação `$ne` no MongoDB é usado para verificar se um campo em um documento não é igual a um valor específico. Ele é útil para criar consultas que excluem documentos com um valor específico em um campo, retornando todos os documentos em que o campo difere do valor especificado.

A sintaxe básica do operador `$ne` é a seguinte:

```javascript
{ campo: { $ne: valor } }
```

- `campo`: O nome do campo que você deseja comparar.
- `valor`: O valor que você deseja usar como critério de diferença.

Exemplo de uso do operador `$ne`:

Suponha que você deseje encontrar documentos em que o campo "cidade" não seja igual a "Nova Iorque". Você pode usar o operador `$ne` da seguinte maneira:

```javascript
db.minha_colecao.find({ cidade: { $ne: "Nova Iorque" } })
```

Neste exemplo, a consulta retornará todos os documentos em que o campo "cidade" é diferente de "Nova Iorque."

O operador `$ne` é particularmente útil quando você deseja excluir documentos com base em um valor específico em um campo. Além disso, ele pode ser combinado com outros operadores e critérios de consulta para criar consultas mais complexas. Por exemplo, você pode usar `$ne` em conjunto com `$gt` (maior que) para encontrar documentos em que um campo seja diferente de um valor específico e maior que outro valor:

```javascript
db.minha_colecao.find({ idade: { $ne: 30, $gt: 25 } })
```

Neste caso, a consulta retornará documentos em que a idade seja diferente de 30 e maior que 25.

O operador `$ne` é uma ferramenta útil para criar consultas que envolvem a exclusão de documentos com base em valores específicos em campos. Juntamente com outros operadores de comparação, ele permite que você crie consultas personalizadas e avançadas no MongoDB.