<h1 align="center">
<br>
  <img src=".github/logo.png" alt="GoBarber" width="300">
<br>
<br>
Proffy
</h1>
 
<p align="center">Um projeto para agendamento de barbearia. </p>
<p>
<br />
Os clientes através do aplicativo mobile podem se cadastrar, atualziar perfil, escolher o barbeiro e o melhor hórario disponivel.
<br />
Os Barbeiros através da página web conseguem se cadastrar, atualziar perfil, gerenciar seus hórarios e ver seus próximos compromissos.
</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

## Recursos usados:
[//]: # (Add the features of your project here:)

-  **Typescript** 
-  **Node Js**
-  **React Js** 
-  **React Native** 
-  **Express**
-  **PostgresSQL**
-  **Redis**
-  **MongoDB**
-  **Axios**
-  **UnForm**

## Layout
<div>
<h3>Web</h3>
  <h4>Landing Page
  <br />
  <img src=".github/landing.png" alt="landing" height="425" width="800">
  <img src=".github/landingresponsivo.png" alt="landing" height="425" width="600"></h4>

  <h4>Teacher Form
  <br />
  <img src=".github/teacherform.gif" alt="demo" height="425" width="600"></h4>

  <h4>Teacher List 
  <br />
  <img src=".github/teacherlist.gif" alt="demo" height="425" width="600">
  <img src=".github/teacherlist.png" alt="teacher list" height="425" width="600"></h4>

  <h3>Mobile</h3>
  <h4>Landing Page
  <br />
  <img src=".github/landingmobile.jpg" alt="landing" height="425">

  <h4>Teacher Form
  <br />
  <img src=".github/teacherformmobile.jpg" alt="teacher form" height="425"></h4>

  <h4>Teacher List 
  <br />
  <img src=".github/teacherlistmobile.jpg" alt="teacher list" height="425">
  <img src=".github/teacherlistmobile2.jpg" alt="teacher list" height="425">
  <img src=".github/teacherlikemobile.jpg" alt="teacher like" height="425"></h4>
</div>

## Requisitos

- Git
- Yarn
- Docker

## Preparando Ambiente

Para a preparação dos bancos de dados é recomendado o uso do Docker. Caso você decida utilizar o Docker, siga as etapas para configuração da imagem.
```bash
# Instale o PostgreSQL
  $ docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

  # Instale o MongoDB
  $ docker run --name mongodb -p 27017:27017 -d -t mongo

  # Instale o Redis
  $ docker run --name redis -p 6379:6379 -d -t redis:alpine

  # Inicie individualmente
  $ docker start gostack_postgres
  $ docker start mongodb
  $ docker start redis

  # Ou se preferir todos juntos
  $ docker start gostack_postgres mongodb redis 


`asijdsiad`
```


## Começando

1.  Clone este repo usando git clone `https://github.com/MatheusPetry/gobarber.git`
2.  Mova-se para o diretório apropriado: `cd gobarber`

## Primeiros passos com o servidor backend

Para poder se conectar ao bancos de dados você devera configurar um `ormconfig.json`. Um modelo é fornecido `ormconfig.example.json` na raiz do projeto.

Você tambem tera que configurar um `.env` para alterar as variaveis de acordo com seu ambiente. Um modelo é fornecido `.env.example` na raiz do projeto.

1.  Vá para a pasta backend: `cd api`
2.  Execute `yarn` para instalar dependências
3.  Execute `yarn typeorm migration:run` para criação das tabelas
4.  Execute `yarn start` para iniciar o servidor

## Primeiros passos com o aplicativo front-end

1.  Vá para a pasta frontend: `cd web`
2.  Execute `yarn` para instalar dependências
3.  Execute `yarn start` para iniciar o aplicativo da web

## Primeiros passos com o aplicativo móvel

1.  Vá para a pasta móvel `cd mobile`
2.  Execute `yarn` para instalar dependências
3.  Execute `react-native run-android` (ou `react-native run-ios`) para iniciar o aplicativo no emulador

## Licença

Este projeto está licenciado sob a Licença MIT - consulte a página [LICENSE](https://opensource.org/licenses/MIT) para obter detalhes.
 