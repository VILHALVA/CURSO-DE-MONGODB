# Exportar e Importar Coleções MongoDB
No MongoDB, é importante entender que você pode exportar e importar coleções individualmente, mas não é possível exportar/importar o banco de dados inteiro diretamente.

## Exportar via Linha de Comando (Shell):
Para exportar uma coleção, utilize o comando `mongodump` com a opção `--collection` para especificar a coleção que deseja exportar:

```bash
mongodump --uri mongodb://[nome_do_usuário]:[senha]@[endereço_do_host]:[porta]/[nome_do_banco_de_dados] --collection [nome_da_coleção] --out [pasta_de_destino]
```

- Substitua `[nome_do_usuário]` pelo nome de usuário do MongoDB.
- Substitua `[senha]` pela senha do MongoDB.
- Substitua `[endereço_do_host]` pelo endereço do host onde o MongoDB está sendo executado.
- Substitua `[porta]` pela porta do MongoDB (normalmente 27017).
- Substitua `[nome_do_banco_de_dados]` pelo nome do banco de dados que contém a coleção que deseja exportar.
- Substitua `[nome_da_coleção]` pelo nome da coleção que deseja exportar.
- Substitua `[pasta_de_destino]` pelo diretório onde deseja salvar o backup.

## Exportar via MongoDB Compass:
1. Abra o MongoDB Compass e conecte-se ao seu servidor MongoDB.
2. Selecione o banco de dados que contém a coleção que deseja exportar.
3. Clique com o botão direito na coleção que deseja exportar.
4. Selecione "Export Collection".
5. Escolha as opções de exportação, como onde salvar o arquivo e o formato do arquivo.
6. Clique em "Export" para iniciar o processo de exportação.

Para importar uma coleção MongoDB, você pode utilizar o comando `mongorestore` via linha de comando ou importar manualmente através de ferramentas gráficas como o MongoDB Compass.

## Importar via Linha de Comando (Shell):
Para importar uma coleção, utilize o comando `mongorestore` especificando o diretório que contém os arquivos de backup da coleção:

```bash
mongorestore --uri mongodb://[nome_do_usuário]:[senha]@[endereço_do_host]:[porta]/[nome_do_banco_de_dados] [caminho_para_a_pasta_de_backup]
```

- Substitua `[nome_do_usuário]` pelo nome de usuário do MongoDB.
- Substitua `[senha]` pela senha do MongoDB.
- Substitua `[endereço_do_host]` pelo endereço do host onde o MongoDB está sendo executado.
- Substitua `[porta]` pela porta do MongoDB (normalmente 27017).
- Substitua `[nome_do_banco_de_dados]` pelo nome do banco de dados onde deseja importar a coleção.
- Substitua `[caminho_para_a_pasta_de_backup]` pelo caminho completo para o diretório que contém os arquivos de backup da coleção.

## Importar via MongoDB Compass:
1. Abra o MongoDB Compass e conecte-se ao seu servidor MongoDB.
2. Selecione o banco de dados onde deseja importar a coleção.
3. Clique no botão "Add Data".
4. Selecione o arquivo de backup da coleção que deseja importar.
5. Escolha as opções de importação, se necessário.
6. Clique em "Import" para iniciar o processo de importação.

