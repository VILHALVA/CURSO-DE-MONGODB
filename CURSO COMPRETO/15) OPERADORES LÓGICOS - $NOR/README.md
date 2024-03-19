# OPERADORES LÓGICOS - $NOR
O operador lógico `$nor` (abreviação de "nem este nem aquele" em inglês, "nor" significa "not or") no MongoDB é usado para realizar uma operação de negação lógica em várias condições de consulta. Isso significa que ele permite encontrar documentos que não atendam a nenhuma das condições especificadas. O `$nor` é especialmente útil quando você deseja criar consultas que excluem documentos com base em várias condições diferentes.

A sintaxe básica do operador `$nor` envolve o uso de um array de expressões de consulta. Para que um documento seja retornado na consulta, ele não deve atender a nenhuma das condições dentro do array `$nor`.

Aqui está a sintaxe geral do operador `$nor`:

```javascript
db.minha_colecao.find({
   $nor: [
      { condição1 },
      { condição2 },
      { condição3 },
      // ... mais condições
   ]
});
```

- Cada `{ condiçãoN }` dentro do array `$nor` representa uma condição de consulta.
- Para que um documento seja retornado, ele não deve atender a nenhuma das condições no array `$nor`.

Exemplo de uso do operador `$nor`:

Suponha que você deseja encontrar documentos em que o campo "idade" não seja igual a 30 e o campo "cidade" não seja igual a "Nova Iorque". Você pode usar o operador `$nor` da seguinte forma:

```javascript
db.minha_colecao.find({
   $nor: [
      { idade: 30 },
      { cidade: "Nova Iorque" }
   ]
});
```

Neste exemplo, a consulta retornará documentos que não atendem a nenhuma das condições especificadas, ou seja, documentos em que a idade não é igual a 30 e a cidade não é igual a "Nova Iorque."

O operador `$nor` é uma ferramenta poderosa para criar consultas que excluem documentos com base em múltiplas condições. Ele é particularmente útil quando você deseja criar consultas complexas que envolvem negações lógicas e a combinação de várias condições de consulta. Lembre-se de que o `$nor` é apenas um dos vários operadores lógicos disponíveis no MongoDB para criar consultas personalizadas e avançadas.