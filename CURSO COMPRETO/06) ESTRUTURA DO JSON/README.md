# ESTRUTURA DO JSON
JSON (JavaScript Object Notation) é um formato de dados leve, legível por humanos e fácil de ser transmitido e interpretado por máquinas. É amplamente utilizado para a troca de dados em aplicativos web e é a base para o armazenamento de documentos no MongoDB. A estrutura básica de um JSON é uma coleção de pares chave-valor. Aqui estão os principais elementos da estrutura JSON:

1. **Objeto JSON (JSON Object):**

   Um objeto JSON é delimitado por chaves `{}` e contém um conjunto de pares chave-valor. Cada par chave-valor é separado por vírgula.

   Exemplo de um objeto JSON:

   ```json
   {
       "nome": "João",
       "idade": 30,
       "cidade": "São Paulo"
   }
   ```

2. **Chave (Key):**

   A chave é uma string que representa o nome do atributo ou campo. Ela é seguida por dois pontos `:`.

   Exemplo:

   ```json
   "nome": "João"
   ```

3. **Valor (Value):**

   O valor associado à chave pode ser de vários tipos, incluindo strings, números, objetos JSON, arrays, booleanos, nulos, etc.

   Exemplo:

   ```json
   "idade": 30
   ```

4. **Array JSON (JSON Array):**

   Um array JSON é uma coleção ordenada de valores, delimitada por colchetes `[]`. Os elementos do array são separados por vírgulas.

   Exemplo de um array JSON:

   ```json
   ["Maçã", "Banana", "Laranja"]
   ```

5. **Tipos de Valores Comuns em JSON:**

   - **String:** Deve estar entre aspas duplas (`"`).
   - **Número:** Pode ser um número inteiro ou de ponto flutuante.
   - **Booleano:** Pode ser `true` ou `false`.
   - **Nulo:** Representado como `null`.

6. **Aninhamento (Nesting):**

   JSON permite aninhar objetos e arrays. Isso significa que você pode ter objetos dentro de objetos ou arrays dentro de objetos, criando estruturas de dados complexas.

   Exemplo de aninhamento:

   ```json
   {
       "pessoa": {
           "nome": "Maria",
           "idade": 25
       },
       "interesses": ["Música", "Esportes"]
   }
   ```

A estrutura JSON é simples e versátil, tornando-a uma escolha popular para troca de dados e armazenamento de informações em vários tipos de aplicativos e bancos de dados, incluindo o MongoDB. JSON é amplamente suportado em várias linguagens de programação e é uma parte fundamental da comunicação entre sistemas na web.