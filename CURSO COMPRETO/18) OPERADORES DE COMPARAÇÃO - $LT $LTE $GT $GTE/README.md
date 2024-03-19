# OPERADORES DE COMPARAÇÃO - $LT $LTE $GT $GTE
Os operadores de comparação `$lt` (menor que), `$lte` (menor ou igual a), `$gt` (maior que) e `$gte` (maior ou igual a) são usados no MongoDB para realizar comparações numéricas entre um campo em um documento e um valor especificado. Esses operadores permitem criar consultas que filtram documentos com base em critérios de comparação, como encontrar documentos com valores de campo maiores, menores ou iguais a um valor dado.

Aqui está uma explicação e exemplos de uso para cada um desses operadores:

**1. `$lt` (Menor que):**

O operador `$lt` é usado para encontrar documentos em que um campo seja menor do que um valor específico.

Exemplo de uso do `$lt`:

```javascript
db.minha_colecao.find({ idade: { $lt: 30 } })
```

Neste exemplo, a consulta retornará todos os documentos em que o campo "idade" seja menor do que 30.

**2. `$lte` (Menor ou igual a):**

O operador `$lte` é usado para encontrar documentos em que um campo seja menor ou igual a um valor específico.

Exemplo de uso do `$lte`:

```javascript
db.minha_colecao.find({ idade: { $lte: 30 } })
```

Neste exemplo, a consulta retornará todos os documentos em que o campo "idade" seja menor ou igual a 30.

**3. `$gt` (Maior que):**

O operador `$gt` é usado para encontrar documentos em que um campo seja maior do que um valor específico.

Exemplo de uso do `$gt`:

```javascript
db.minha_colecao.find({ idade: { $gt: 30 } })
```

Neste exemplo, a consulta retornará todos os documentos em que o campo "idade" seja maior do que 30.

**4. `$gte` (Maior ou igual a):**

O operador `$gte` é usado para encontrar documentos em que um campo seja maior ou igual a um valor específico.

Exemplo de uso do `$gte`:

```javascript
db.minha_colecao.find({ idade: { $gte: 30 } })
```

Neste exemplo, a consulta retornará todos os documentos em que o campo "idade" seja maior ou igual a 30.

Esses operadores de comparação numérica são frequentemente usados para criar consultas avançadas no MongoDB, permitindo que você filtre documentos com base em valores de campos específicos. Além disso, esses operadores podem ser combinados com outros operadores lógicos, como `$and` e `$or`, para criar consultas mais complexas que atendam a critérios específicos.