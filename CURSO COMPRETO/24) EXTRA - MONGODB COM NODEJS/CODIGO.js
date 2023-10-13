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
