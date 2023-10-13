# OPERADORES LÓGICOS - $OR
O operador lógico `$or` é usado no MongoDB para criar consultas que combinam várias condições, onde pelo menos uma das condições deve ser verdadeira para que um documento seja retornado na consulta. O `$or` é útil quando você deseja recuperar documentos que atendam a qualquer uma das condições especificadas, em vez de todas as condições ao mesmo tempo.

A sintaxe do operador `$or` envolve a criação de um array de documentos, onde cada documento representa uma condição de consulta. Para que um documento seja retornado, ele deve atender a pelo menos uma das condições no array `$or`. Aqui está a sintaxe básica do operador `$or`:

```javascript
db.minha_colecao.find({
   $or: [
      { condição1 },
      { condição2 },
      { condição3 },
      // ... mais condições
   ]
});
```

Cada `{ condiçãoN }` dentro do array `$or` representa uma condição de consulta. Se um documento atender a pelo menos uma dessas condições, ele será incluído nos resultados da consulta.

Exemplo de uso do operador `$or`:

Suponha que você deseja encontrar todos os documentos em que o campo "idade" seja igual a 30 ou o campo "cidade" seja igual a "Nova Iorque". Você pode usar o operador `$or` da seguinte forma:

```javascript
db.minha_colecao.find({
   $or: [
      { idade: 30 },
      { cidade: "Nova Iorque" }
   ]
});
```

Neste caso, o MongoDB retornará documentos que atendam a pelo menos uma das condições especificadas: idade igual a 30 ou cidade igual a "Nova Iorque."

O operador `$or` é útil para criar consultas mais flexíveis e abrangentes, permitindo que você recupere documentos que atendam a uma variedade de condições diferentes em uma única consulta. Além disso, você pode combinar o operador `$or` com outros operadores lógicos, como `$and`, para criar consultas ainda mais complexas e personalizadas.