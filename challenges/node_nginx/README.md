# 🐋 Desafio Full Cycle - Módulo Docker: Nginx com Node

Repositório responsável pelo desafio de Nginx com Node usando Docker do curso da Full Cycle

## 📝 Instruções

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o `nginx`, o mesmo fará uma chamada em nossa aplicação `Node.js`. Essa aplicação por sua vez adicionará um registro em nosso banco de dados `Mysql`, cadastrando um nome na tabela `people`.

O retorno da aplicação Node.js para o nginx deverá ser:

```html
<h1>Full Cycle Rocks!</h1>
```

- Lista de nomes cadastradas no banco de dados.

Gere o `docker-compose` de uma forma que basta apenas rodarmos que tudo deverá estar funcionando e disponível na porta: 8080.
                                                            
```bash
docker-compose up -d 
```

Suba tudo em um repositório e faça a entrega.

> observação: A linguagem de programação para este desafio é Node/JavaScript.

## 🚀 Tecnologias

- **[Docker](https://www.docker.com/)**
- **[Node.js](https://nodejs.org/en/)**
- **[Visual Studio Code](https://code.visualstudio.com/)**
- **[MySQL](https://www.mysql.com/)**
- **[Nginx](https://www.nginx.com/)**
- **[Docker Hub](https://hub.docker.com/)**

## 🔥Como executar o projeto

1. Executar o comando `docker-compose` para subir os containers:

```bash
docker-compose up -d
```

2. Agora basta acessar a aplicação em seu browser:

```bash
http://localhost:8080
```

Todas as vezes que você atualizar a página, um novo nome será adicionado ao banco de dados. :)
