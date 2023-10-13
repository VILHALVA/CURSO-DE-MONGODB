# MONGODB COM PHP - FORMULARIO
Vou fornecer um exemplo simples de um formulário HTML e código PHP para interagir com o MongoDB. Neste exemplo, criaremos um formulário para inserir dados de vendas em uma coleção MongoDB chamada "vendas". Certifique-se de que você tenha um ambiente de desenvolvimento PHP com o driver MongoDB instalado e configurado.

**Código HTML (form.html):**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Formulário de Vendas</title>
</head>
<body>
    <h1>Formulário de Vendas</h1>
    <form action="process.php" method="post">
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
</body>
</html>
```

**Código PHP (process.php):**

```php
<?php
// Conexão com o MongoDB
$cliente = new MongoDB\Client("mongodb://localhost:27017");
$banco = $cliente->minha_base_de_dados;
$colecao = $banco->vendas;

// Receber os dados do formulário
$data = $_POST['data'];
$produto = $_POST['produto'];
$quantidade = (int)$_POST['quantidade'];
$valor = (float)$_POST['valor'];

// Criar um documento de venda
$venda = [
    'data' => $data,
    'produto' => $produto,
    'quantidade' => $quantidade,
    'valor' => $valor
];

// Inserir o documento na coleção "vendas"
$resultado = $colecao->insertOne($venda);

// Verificar se a inserção foi bem-sucedida
if ($resultado->getInsertedCount() > 0) {
    echo "Venda inserida com sucesso!";
} else {
    echo "Erro ao inserir a venda.";
}
?>
```

**Explicações:**

1. O código HTML (`form.html`) contém um formulário simples com campos para inserir dados de vendas, incluindo data, produto, quantidade e valor.

2. O código PHP (`process.php`) é responsável por processar o formulário, conectar-se ao MongoDB e inserir os dados na coleção "vendas".

3. Ele utiliza a biblioteca oficial do MongoDB para PHP (https://docs.mongodb.com/drivers/php/) para realizar a conexão e a inserção.

4. Os dados do formulário são recebidos via `$_POST` e são tratados (conversão de tipos, se necessário) antes de serem inseridos no MongoDB.

5. Um documento de venda é criado como um array associativo no PHP.

6. O método `insertOne` é usado para inserir o documento na coleção "vendas".

7. O código verifica se a inserção foi bem-sucedida e exibe uma mensagem apropriada.

Lembre-se de configurar o URL de conexão MongoDB e o nome da base de dados de acordo com o seu ambiente. Certifique-se também de que o driver MongoDB para PHP esteja instalado e habilitado em seu ambiente de desenvolvimento.