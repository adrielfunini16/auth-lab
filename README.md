# Full-Stack Authentication Lab

Projeto laboratório utilizado para praticar conceitos de desenvolvimento full-stack e, principalmente, autenticação e autorização.

## Stack atual

Front-end:
- React
- Vite
- React Router

Back-end:
- Node.js
- Express
- MongoDB
- Mongoose

## Estrutura

```text
node-pratice/
├── CreateSever-Demo/   # Aplicação existente, preservada
├── frontend/          # Aplicação React independente
│   ├── src/
│   │   ├── components/Navbar/
│   │   ├── pages/
│   │   │   ├── Login/
│   │   │   ├── Register/
│   │   │   ├── Feed/
│   │   │   └── Profile/
│   │   ├── styles/global.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── package-lock.json
├── .gitignore
└── README.md
```

O `.gitignore` da raiz contém as regras comuns aos dois projetos. O arquivo preexistente dentro do back-end foi preservado.

## Executar o front-end

Use Node.js 22.12 ou superior na linha 22, ou uma versão LTS mais recente compatível com o Vite.

```sh
cd frontend
npm install
npm run dev
```

Abra o endereço mostrado pelo Vite no terminal (normalmente `http://localhost:5173`). O front-end funciona de forma independente, sem precisar iniciar o back-end.

Para gerar e visualizar o build:

```sh
npm run build
npm run preview
```

## Estado atual

Existem quatro páginas: `/register`, `/login`, `/feed` e `/profile`. A raiz `/` redireciona para `/login`. Feed e Profile estão abertos, sem proteção.

Os formulários apenas impedem o recarregamento da página. O botão Logout é visual e o perfil usa dados fictícios. Não há validação de formulário, autenticação, tokens, armazenamento de dados ou chamadas à API no front-end.

## Objetivos futuros

As funcionalidades abaixo serão implementadas durante os estudos; a estrutura visual inicial não as implementa:

- Registro de usuários
- Login
- Autenticação
- Autorização
- JWT
- Rotas protegidas
- Integração front-end/back-end
- Perfil do usuário
- Logout
- Feed
