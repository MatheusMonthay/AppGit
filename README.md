# Projeto GitHub User Search

Este é um projeto desenvolvido para um trabalho da disciplina de Desenvolvimento mobile, utilizando o Expo. O aplicativo busca informações de usuários do GitHub.

### Tela Inicial

A tela inicial contém um campo de entrada onde o usuário pode digitar o nome de usuário do GitHub que deseja pesquisar. Há também um botão "Buscar" que, quando pressionado, aciona a busca dos dados do usuário.

#### Comportamento ao clicar no botão "Buscar"

Quando o botão "Buscar" é pressionado, o aplicativo envia uma requisição para a API do GitHub, buscando pelo usuário informado. 

- Caso não encontre o usuário, uma mensagem aparece na tela: "Usuário não encontrado na base de dados."
- Caso o usuário exista, o aplicativo mostra as seguintes informações:
  - O nome do usuário
  - A foto do usuário
  - A quantidade de repositórios que o usuário tem
  - A quantidade de seguidores que o usuário tem
  - A quantidade de usuários que o usuário em questão segue

## Como executar o projeto

1. Clone este repositório
2. Instale as dependências com `npm install`
3. Inicie o servidor com `expo start`
4. Abra o aplicativo Expo no seu telefone e escaneie o código QR


