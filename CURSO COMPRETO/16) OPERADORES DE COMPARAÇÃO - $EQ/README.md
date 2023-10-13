# OPERADORES DE COMPARAÇÃO - $EQ
O operador de comparação `$eq` no MongoDB é usado para verificar se um campo em um documento é igual a um valor específico. Ele é parte de um conjunto de operadores de comparação que permitem criar consultas para comparar valores em documentos com valores específicos.

A sintaxe básica do operador `$eq` é a seguinte:

```javascript
{ campo: { $eq: valor } }
```

- `campo`: O nome do campo que você deseja comparar.
- `valor`: O valor que você deseja usar como critério de igualdade.

Exemplo de uso do operador `$eq`:

Suponha que você queira encontrar documentos em que o campo "idade" seja igual a 30. Você pode usar o operador `$eq` da seguinte maneira:

```javascript
db.minha_colecao.find({ idade: { $eq: 30 } })
```

Neste exemplo, a consulta retornará todos os documentos em que o campo "idade" seja igual a 30.

Além de números, o operador `$eq` também pode ser usado para comparar valores de outros tipos, como strings, datas e assim por diante. Por exemplo, para encontrar documentos em que o campo "nome" seja igual a "Alice", você pode usar:

```javascript
db.minha_colecao.find({ nome: { $eq: "Alice" } })
```

O operador `$eq` é um dos operadores de comparação mais simples e comuns no MongoDB. Ele é útil para criar consultas que comparam valores de campos específicos em documentos com valores desejados. Além do `$eq`, o MongoDB oferece outros operadores de comparação, como `$ne` (diferente de), `$gt` (maior que), `$lt` (menor que), `$gte` (maior ou igual a), `$lte` (menor ou igual a), entre outros, para realizar comparações mais avançadas em consultas.