# OPERADORES LÓGICOS - $NOT
O operador lógico `$not` no MongoDB é usado para inverter o resultado de uma expressão de consulta. Ele permite que você negue uma condição especificada, encontrando documentos que não atendam a essa condição. O `$not` é especialmente útil quando você deseja excluir documentos que correspondem a uma determinada condição.

A sintaxe básica do operador `$not` envolve o uso de um objeto que contém a expressão que você deseja negar. Aqui está a sintaxe geral:

```javascript
db.minha_colecao.find({
   campo: {
      $not: { condição }
   }
});
```

- `campo`: O nome do campo no qual você deseja aplicar a negação.
- `condição`: A expressão de consulta que você deseja negar.

Exemplo de uso do operador `$not`:

Suponha que você queira encontrar documentos em que o campo "idade" não seja igual a 30. Você pode usar o operador `$not` para negar essa condição da seguinte maneira:

```javascript
db.minha_colecao.find({
   idade: {
      $not: { $eq: 30 }
   }
});
```

Neste exemplo, a consulta retornará todos os documentos cujo campo "idade" não é igual a 30.

Você também pode usar o operador `$not` com outros operadores de comparação, como `$gt` (maior que), `$lt` (menor que) e assim por diante, para criar condições negadas mais complexas. Por exemplo, para encontrar documentos em que o campo "quantidade" não seja maior que 100, você pode fazer o seguinte:

```javascript
db.minha_colecao.find({
   quantidade: {
      $not: { $gt: 100 }
   }
});
```

O operador `$not` é uma ferramenta útil para criar consultas que excluem documentos com base em condições específicas. Ele oferece flexibilidade adicional ao criar consultas avançadas no MongoDB.