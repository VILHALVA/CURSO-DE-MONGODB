# MONGODB COM NODEJS - FORMULARIO
Para criar um formulário web com Node.js e MongoDB, você precisará de um servidor Node.js e um aplicativo web usando um framework como Express.js. Vou fornecer um exemplo simples de código que inclui um formulário HTML, JavaScript com Node.js e operações de inserção no MongoDB usando o driver oficial do MongoDB para Node.js.

**Código HTML (index.html):**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Formulário de Vendas</title>
</head>
<body>
    <h1>Formulário de Vendas</h1>
    <form id="vendaForm">
        <label>Data:</label>
        <input type="text" name="data" required><br>
        <label>Produto:</label>
        <input type="text" name="produto" required><br>
        <label>Quantidade:</label>
        <input type="number" name="quantidade" required><br>
        <label>Valor:</label>
        <input type="number" name="valor" required><br>
        <input type="submit" value="Enviar">
    </form>

    <script src="script.js"></script>
</body>
</html>
```

**Código JavaScript (script.js):**

```javascript
document.getElementById('vendaForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const venda = {
        data: formData.get('data'),
        produto: formData.get('produto'),
        quantidade: parseInt(formData.get('quantidade')),
        valor: parseFloat(formData.get('valor'))
    };

    // Enviar os dados para o servidor Node.js
    fetch('/inserir-venda', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(venda)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Venda inserida com sucesso!');
        } else {
            alert('Erro ao inserir a venda.');
        }
    });
});
```

**Código Node.js (app.js):**

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Conexão com o MongoDB
let db;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        console.log('Erro na conexão com o MongoDB: ' + err);
    } else {
        db = client.db('minha_base_de_dados');
        console.log('Conectado ao MongoDB');
    }
});

// Rota para inserir uma venda no MongoDB
app.post('/inserir-venda', (req, res) => {
    const venda = req.body;

    db.collection('vendas').insertOne(venda, (err, result) => {
        if (err) {
            res.json({ success: false });
        } else {
            res.json({ success: true });
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor Node.js rodando em http://localhost:${port}`);
});
```

**Explicações:**

1. O formulário HTML (`index.html`) é usado para coletar informações sobre a venda, incluindo data, produto, quantidade e valor. O JavaScript no arquivo `script.js` é responsável por capturar o envio do formulário e enviar os dados ao servidor Node.js.

2. O JavaScript usa a função `fetch` para enviar os dados do formulário para o servidor Node.js em uma rota chamada `/inserir-venda`.

3. O servidor Node.js (`app.js`) usa o Express.js como framework para criar um servidor web e receber as solicitações HTTP. Ele também se conecta ao MongoDB usando o driver oficial do MongoDB para Node.js.

4. Quando o formulário é enviado, os dados da venda são inseridos no MongoDB usando a função `insertOne`. Se a inserção for bem-sucedida, o servidor responde com `{ success: true }`, caso contrário, responde com `{ success: false}`.

5. O código JavaScript no arquivo `script.js` captura a resposta do servidor e exibe uma mensagem de sucesso ou erro ao usuário.

Certifique-se de substituir as informações de conexão ao MongoDB, como a URL de conexão e o nome da base de dados, pelo seu ambiente. Além disso, instale os pacotes necessários, como `express`, `mongodb`, e outros, usando o npm.