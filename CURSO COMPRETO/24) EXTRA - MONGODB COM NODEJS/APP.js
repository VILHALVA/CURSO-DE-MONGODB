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
