<h1 align="center">Testes de API</h1>
<p align="center">Projeto destinado aos Testes Automatizados BackEnd</p>

[![Generic badge](https://img.shields.io/badge/Cypress-v9.2.1-blue.svg)](https://docs.cypress.io/guides/references/changelog#9-2-1)
[![Generic badge](https://img.shields.io/badge/JavaScript--blue.svg)](https://devdocs.io/javascript/)

<h1 align="center">Pré-requisitos</h1>

Antes de começar, você precisa ter instalado em sua máquina as seguintes ferramentas:

[![Generic badge](https://img.shields.io/badge/Node-Download-green.svg)](https://nodejs.org/en/download/)
[![Generic badge](https://img.shields.io/badge/Git-Download-green.svg)](https://git-scm.com)
[![Generic badge](https://img.shields.io/badge/VS_Code-Download-green.svg)](https://code.visualstudio.com/download)

<h1 align="center">Configurar o Git</h1>

O Git vem com uma ferramenta chamada git config que permite ver e atribuir variáveis de configuração que controlam todos os aspectos de como o Git aparece e opera.

## Sua Identidade
A primeira coisa que você deve fazer ao instalar Git é configurar seu nome de usuário e endereço de e-mail. Isto é importante porque cada commit usa esta informação, e ela é carimbada de forma imutável nos commits que você começa a criar:

1. Executar o Git Bash
2. Executar os comandos no Git Bash: 
```bash
$ git config --global user.name "Fulano de Tal" ###Seu nome aqui, conforme nome definifo no GitHub
$ git config --global user.email fulanodetal@exemplo.br  ###Email utilizado no GitHub
```

## Testando Suas Configurações
Se você quiser testar as suas configurações, você pode usar o comando git config --list para listar todas as configurações que o Git conseguir encontrar naquele momento:

1. Executar o Git Bash
2. Executar os comandos no Git Bash: 
```bash
$ git config --list
```
Irá exibir o resultado da seguinte forma:
```bash
user.name=Fulano de Tal
user.email=fulanodetal@exemplo.br
color.status=auto
color.branch=auto
color.interactive=auto
color.diff=auto
...
```

<h1 align="center">Git Clone</h1>

## Clone este repositório

1. Executar o git bash
2. Navegue entre as pastas para definir em qual pasta ficarão os arquivos do projeto
    - Ex.: CD C:/   <-Aqui o bash está acessando o disco C, ou seja, os arquivos ficarão aqui
3. Executar o comando
```bash
$ git clone https://github.com/pedroemanueell/testeMercadoEnvio.git
```

<h1 align="center">Executando os Testes</h1>

## Abrir projeto no VS Code
1. Abra o VS Code
2. Clique em arquivo > abrir pasta
3. Selecione a pasta que foi clonada

## Utilizar o Terminal do VS Code para executar comandos
Dessa forma é possível executar os comandos a seguir utilizando o VS Code

1. Clique em Terminal > Novo Terminal


## Comando para abrir o Cypress
```bash
$ npm run cypress:open
```

## Para executar os testes no terminal
```bash
$ npx cypress run
```

## Para executar os testes e atualizar o Dashboard
```bash
$ npm run atualizar:dash
```

<h1 align="center">Enviar modificações para o GIT | git push</h1>

O comando git push é usado para enviar o conteúdo do repositório local para um repositório remoto.

1. No terminal do VS Code, execute:
```bash
$ git add .
```
```bash
$ git commit -m "comentario aqui"
```
```bash
$ git push origin develop #Atualmente estamos enviando os commits para a branch develop
```

<h1 align="center">Atualizar código local | git pull</h1>
O comando git pull é usado para buscar e baixar conteúdo de repositórios remotos e fazer a atualização imediata ao repositório local para que os conteúdos sejam iguais.

1. No terminal do VS Code, execute:
```bash
$ git pull
```

<h1 align="center">Alterar versão do Cypress</h1>

## Documentação de todas as versões
https://docs.cypress.io/guides/references/changelog

## Modificar versão
1. No terminal do VS Code, execute:
```bash
$ npm install --save-dev cypress@9.3.1    #Modificar a numeracao para a versão que deseja
```
## Validar a modificação
1. Estando no VS Code, procurar o arquivo: package.json
2. A informação estará da seguinte forma
```bash
  "dependencies": {
    "cypress": "^9.2.1"  ##Aqui fica a versão utilizada}
```
<h1 align="center">Bibliotecas Instaladas</h1>

As principais bibliotecas utilizadas neste projeto são:

- **Cypress**: Para testes de automação end-to-end.

Para instalar todas as dependências, execute o comando:

```bash
$ npm install 

