# 🚀 Portal Espacial Pulsar (NASA API)

## 📚 Identificação do Projeto

* **Nome:** Portal Espacial Pulsar
* **Disciplina:** Construção de Páginas Web IV
* **Instituição:** Instituto Federal de Mato Grosso do Sul
* **Professora:** Milena Alegre
* **Aluna:** Marcella Hernandes de Souza

---

## 🧠 Descrição

O **Portal Espacial Pulsar** é uma aplicação do tipo **Single Page Application (SPA)** desenvolvida em React, que consome dados da API pública da NASA para exibir conteúdos astronômicos de forma interativa e educativa.

O sistema **simula um portal institucional de divulgação científica**, permitindo aos usuários explorar imagens espaciais, visualizar detalhes e salvar conteúdos favoritos, promovendo aprendizado e engajamento com temas de ciência e tecnologia.

---

## 🧩 Decisões Técnicas

### 🌐 Uso da API

A API da NASA foi escolhida por afinidade com o tema espacial, que desperta grande interesse pessoal, além de oferecer conteúdos ricos e relevantes para a proposta do projeto. Durante a fase de pesquisa, a API se destacou pela qualidade dos dados e pela possibilidade de criar uma aplicação interativa e educativa.

### ⭐ Sistema de Favoritos

O sistema de favoritos permite que o usuário salve conteúdos de seu interesse para acessá-los posteriormente. Essa funcionalidade evita que informações importantes ou preferidas sejam perdidas, proporcionando uma experiência mais personalizada e prática.

---

## 🛠️ Tecnologias e Funcionalidades

### Tecnologias Utilizadas:
* **React 19 & Vite:** Framework e ferramenta de build modernos para alta performance.
* **React Router Dom:** Gerenciamento de navegação entre Home, Detalhes e Favoritos.
* **Context API & LocalStorage:** Sistema global de favoritos com persistência de dados.
* **SASS (SCSS):** Estilização avançada com variáveis e aninhamento.
* **NASA APOD API:** Consumo de dados reais de astronomia.

### Funcionalidades Implementadas:
* **Exploração:** Listagem de imagens aleatórias da NASA.
* **Busca:** Filtro de conteúdos por data específica.
* **Favoritos:** Sistema para salvar e remover itens da lista de interesses.
* **Responsividade:** Interface adaptável para diferentes dispositivos.

---

## ▶️ Instruções de Execução

### 📌 Pré-requisitos

* Node.js instalado
* Gerenciador de pacotes (npm ou yarn)

### 🚀 Passos para execução

```bash
# Acessar a pasta do projeto
cd app-espace

# Instalar dependências
npm install

# Rodar o projeto em modo de desenvolvimento
npm run dev
```

### 🌐 Acesso

A aplicação estará disponível em:

```
http://localhost:5173
```

---

## 📁 Estrutura do Projeto

```
app-espace/
├── public/              # Arquivos públicos (ícones e favicon)
├── src/                 # Código fonte principal
│   ├── assets/          # Imagens de backup e recursos estáticos
│   ├── components/      # Componentes como Navbar e Card
│   ├── context/         # Gerenciamento de estado (Favoritos)
│   ├── hooks/           # Hooks customizados (LocalStorage)
│   ├── pages/           # Páginas: Home, About e NewsFav
│   ├── service/         # Integração com a API da NASA
│   ├── styles/          # Estilização global em SCSS
│   ├── App.jsx          # Componente principal e Rotas
│   ├── main.jsx         # Ponto de entrada do React
├── index.html           # HTML base
├── package.json         # Dependências e scripts
└── vite.config.js       # Configuração do Vite
```

---

## 💡 Considerações Finais

Este projeto demonstra a integração bem-sucedida entre uma interface React moderna e uma API externa complexa, aplicando conceitos de estados globais, persistência de dados e roteamento dinâmico para criar uma experiência de usuário fluida e informativa no campo da divulgação científica.