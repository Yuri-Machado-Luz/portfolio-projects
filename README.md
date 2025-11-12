# portifólio | Biblioteca de Projetos

![Em Desenvolvimento](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Versão](https://img.shields.io/badge/version-0.1.0--alpha-blue)
![Licença](https://img.shields.io/badge/license-UNLICENSED-red)

Este repositório é meu portifólio pessoal onde coleciono e apresento projetos que desenvolvo durante minha jornada de aprendizado em programação. O objetivo é demonstrar meu progresso e habilidades em desenvolvimento web.

## 📋 Sobre o Projeto

Este é um site portifólio desenvolvido para apresentar meus projetos pessoais de forma organizada e profissional. O site foi construído com HTML, CSS e JavaScript, focando em aprender as bases do desenvolvimento web front-end.

### O que você vai encontrar

- 🎨 Design responsivo (funciona em celular, tablet e desktop)
- 🚀 Navegação entre páginas sem recarregar (SPA)
- 📱 Layout que se adapta a diferentes tamanhos de tela
- 🎭 Animações básicas
- 🧪 Testes automatizados para garantir que tudo funciona

## 🛠️ Tecnologias Utilizadas

### Tecnologias Principais

- **HTML5** - Estrutura das páginas
- **CSS3/SCSS** - Estilos e visual do site
- **JavaScript (ES6+)** - Interatividade e funcionalidades

### Ferramentas que Ajudam no Desenvolvimento

- **Sass** - Facilita escrever CSS de forma mais organizada
- **ESLint** - Ajuda a encontrar erros no código JavaScript
- **Prettier** - Formata o código automaticamente
- **Playwright** - Testa se o site funciona corretamente

## 📁 Estrutura do Projeto

```text
portfolio-projects/
├── .github/              # Configurações GitHub (workflows, etc)
├── config/               # Arquivos de configuração
│   └── playwright.md     # Documentação Playwright
├── src/                  # Código-fonte
│   ├── assets/          # Recursos estáticos (imagens, etc)
│   ├── js/              # Arquivos JavaScript
│   │   ├── app.js       # Aplicação principal
│   │   ├── router.js    # Roteamento SPA
│   │   └── utils/       # Utilitários
│   ├── scss/            # Estilos SCSS
│   │   └── styles.scss  # Estilos principais
│   └── views/           # Views/Templates
├── tests/               # Testes automatizados
│   └── example.spec.js  # Testes Playwright
├── .gitignore           # Arquivos ignorados pelo Git
├── eslint.config.js     # Configuração ESLint
├── index.html           # Página principal
├── index.js             # Ponto de entrada JavaScript
├── package.json         # Dependências do projeto
├── playwright.config.js # Configuração Playwright
└── README.md            # Este arquivo
```

## 🚀 Como Rodar o Projeto

### O que você precisa ter instalado

- Node.js (versão 14 ou mais recente) - [Download aqui](https://nodejs.org/)
- npm (já vem junto com o Node.js)
- Git - [Download aqui](https://git-scm.com/)

### Passos para instalação

1. Clone o repositório:

```bash
git clone https://github.com/Yuri-Machado-Luz/portfolio-projects.git
cd portfolio-projects
```

1. Instale as dependências:

```bash
npm install
```

1. Instale os navegadores do Playwright (só precisa fazer uma vez):

```bash
npx playwright install
```

### Como abrir o site no navegador

Você precisa de um servidor web local. Aqui estão algumas opções:

**Opção 1 - Usando Python (se você tem Python instalado):**

```bash
# Python 3
python -m http.server 8000
```

**Opção 2 - Usando Node.js:**

```bash
npx http-server
```

**Opção 3 - Usando VS Code:**

- Instale a extensão "Live Server"
- Clique com botão direito em `index.html`
- Selecione "Open with Live Server"

Depois, abra seu navegador e acesse: `http://localhost:8000`

## 🧪 Como Rodar os Testes

Os testes verificam se tudo está funcionando corretamente:

```bash
# Rodar todos os testes
npx playwright test

# Rodar testes com interface visual
npx playwright test --ui

# Rodar testes só no Chrome
npx playwright test --project=chromium
```

Para mais informações, veja [config/playwright.md](config/playlist.md).

## � Contato

### Yuri Machado Luz

- GitHub: [@Yuri-Machado-Luz](https://github.com/Yuri-Machado-Luz)
- Repositório: [portfolio-projects](https://github.com/Yuri-Machado-Luz/portfolio-projects)

## 📜 Licença

Este projeto é pessoal e todos os direitos são reservados.

---

**Status:** 🚧 Em Desenvolvimento Ativo

Última atualização: Novembro 2025
