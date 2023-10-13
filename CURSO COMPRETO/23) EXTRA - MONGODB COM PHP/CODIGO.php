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
