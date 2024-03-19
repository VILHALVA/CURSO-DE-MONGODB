# OPERADORES DE ELEMENTOS - $EXISTS
O operador `$exists` é um operador de elemento no MongoDB que é usado para verificar se um campo existe em um documento. Ele é comumente usado em consultas para encontrar documentos com base na presença ou ausência de um campo específico em um documento. O operador `$exists` aceita um valor booleano (`true` ou `false`) como seu valor, que determina se você deseja encontrar documentos com o campo especificado ou sem ele.

Aqui está a sintaxe básica do operador `$exists` em uma consulta:

```javascript
db.minha_colecao.find({ campo: { $exists: valor } })
```

- `campo`: O nome do campo que você deseja verificar se existe.
- `valor`: Pode ser `true` (para encontrar documentos com o campo) ou `false` (para encontrar documentos sem o campo).

Exemplos de uso do operador `$exists`:

1. **Encontrar documentos com um campo específico:**

   Para encontrar documentos que tenham o campo "idade", você usaria o operador `$exists` com `true`:

   ```javascript
   db.minha_colecao.find({ idade: { $exists: true } })
   ```

   Isso retornaria todos os documentos que têm o campo "idade" definido.

2. **Encontrar documentos sem um campo específico:**

   Para encontrar documentos que não têm o campo "telefone", você usaria o operador `$exists` com `false`:

   ```javascript
   db.minha_colecao.find({ telefone: { $exists: false } })
   ```

   Isso retornaria todos os documentos que não têm o campo "telefone" definido.

O operador `$exists` é útil quando você deseja realizar consultas condicionais com base na presença ou ausência de campos em documentos. Ele pode ser combinado com outros operadores e critérios de consulta para criar consultas mais complexas.

Tenha em mente que o uso excessivo do operador `$exists` em consultas pode afetar o desempenho, portanto, é importante usá-lo de forma criteriosa e considerar o esquema de seus documentos ao projetar consultas.