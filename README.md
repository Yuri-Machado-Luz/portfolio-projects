# Portfólio | Biblioteca de Projetos

![Em Desenvolvimento](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Versão](https://img.shields.io/badge/version-0.1.0--alpha-blue)
![Licença](https://img.shields.io/badge/license-UNLICENSED-red)

Este repositório serve como um portfólio pessoal e uma biblioteca de projetos desenvolvidos ao longo do tempo. Apresentados em um site de fácil navegação, os projetos abrangem diversas tecnologias e áreas de interesse, demonstrando habilidades e conhecimentos adquiridos.

## 📋 Sobre o Projeto

Este é um projeto de portfólio web moderno desenvolvido para showcasing de projetos pessoais. O site apresenta uma interface responsiva e moderna, construída com tecnologias web atuais, incluindo uma arquitetura SPA (Single Page Application).

### Características Principais

- 🎨 Interface moderna e responsiva
- 🚀 Single Page Application (SPA)
- 📱 Design mobile-first
- ⚡ Performance otimizada
- 🎭 Animações suaves
- 🧪 Testes automatizados com Playwright

## 🛠️ Tecnologias Utilizadas

### Frontend

- **HTML5** - Estrutura semântica
- **CSS3/SCSS** - Estilização com pré-processador
- **JavaScript (ES6+)** - Funcionalidades interativas
- **React** - Framework JavaScript (planejado para pós-MVP)

### Ferramentas de Desenvolvimento

- **Sass 1.93.2** - Pré-processador CSS
- **ESLint 9.38.0** - Linting de código
- **Prettier 3.6.2** - Formatação de código
- **Jest 30.2.0** - Testes unitários
- **Playwright 1.56.1** - Testes E2E

### Outras Dependências

- **glob 11.0.3** - Pattern matching de arquivos
- **yamljs 0.3.0** - Parser YAML

## 📁 Estrutura do Projeto

```
portfolio-project/
├── .github/              # Configurações GitHub (workflows, etc)
├── config/               # Arquivos de configuração
│   └── playwright.md     # Documentação Playwright
├── roadmap/              # Documentação de planejamento
│   ├── CHANGELOG.md      # Registro de alterações
│   ├── PLANNING.md       # Planejamento do projeto
│   └── ROADMAP.md        # Roadmap de desenvolvimento
├── src/                  # Código-fonte
│   ├── js/              # Arquivos JavaScript
│   │   ├── app.js       # Aplicação principal
│   │   ├── router.js    # Roteamento SPA
│   │   └── utils/       # Utilitários
│   └── scss/            # Estilos SCSS
│       └── styles.scss  # Estilos principais
├── tests/               # Testes automatizados
│   └── example.spec.js  # Testes Playwright
├── index.html           # Página principal
├── index.js             # Ponto de entrada JavaScript
├── package.json         # Dependências do projeto
├── eslint.config.js     # Configuração ESLint
├── playwright.config.js # Configuração Playwright
├── README.md           # Este arquivo
└── ROADMAP.md          # Roadmap principal
```

## 🚀 Como Começar

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (geralmente vem com Node.js)
- Git

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Yuri-Machado-Luz/portfolio-projects.git
cd portfolio-projects
```

2. Instale as dependências:
```bash
npm install
```

3. Instale os browsers do Playwright (necessário apenas uma vez):
```bash
npx playwright install
```

### Executando o Projeto

Para desenvolvimento local, você pode usar qualquer servidor HTTP. Exemplos:

**Usando Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Usando Node.js (http-server):**
```bash
npx http-server
```

**Usando extensão Live Server do VS Code:**
- Clique com botão direito em `index.html` e selecione "Open with Live Server"

Acesse: `http://localhost:8000` (ou a porta configurada)

## 🧪 Executando Testes

### Testes E2E com Playwright

```bash
# Executar todos os testes
npx playwright test

# Executar testes em modo UI
npx playwright test --ui

# Executar testes em um browser específico
npx playwright test --project=chromium

# Executar testes em modo debug
npx playwright test --debug

# Gerar testes automaticamente
npx playwright codegen
```

Para mais informações sobre testes, consulte [config/playwright.md](config/playwright.md).

## 📝 Scripts Disponíveis

Atualmente, o projeto está em fase inicial e os scripts estão sendo configurados. Verifique o `package.json` para scripts atualizados.

## 🗺️ Roadmap

O projeto está atualmente na versão **0.1.0-alpha** em desenvolvimento ativo. Para ver o roadmap completo e metas de desenvolvimento, consulte:

- [ROADMAP.md](ROADMAP.md) - Roadmap principal do projeto
- [roadmap/ROADMAP.md](roadmap/ROADMAP.md) - Roadmap detalhado

### Versão Atual: 0.1.0-alpha

#### Metas Principais
- ✅ Configuração do Ambiente de Desenvolvimento
- 🔄 MVP de Landing Page
- 🔄 Implementação da Estrutura de Pastas
- 🔄 Criação de Componentes Reutilizáveis

## 📄 Documentação Adicional

- [CHANGELOG.md](roadmap/CHANGELOG.md) - Registro de todas as alterações
- [PLANNING.md](roadmap/PLANNING.md) - Planejamento detalhado
- [Playwright Documentation](config/playwright.md) - Guia de testes

## 🤝 Contribuindo

Este é um projeto pessoal, mas sugestões e feedback são bem-vindos! Por favor:

1. Abra uma issue para discutir mudanças propostas
2. Fork o projeto
3. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
4. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
5. Push para a branch (`git push origin feature/MinhaFeature`)
6. Abra um Pull Request

## 📧 Contato

**Yuri Machado Luz**

- GitHub: [@Yuri-Machado-Luz](https://github.com/Yuri-Machado-Luz)
- Repositório: [portfolio-projects](https://github.com/Yuri-Machado-Luz/portfolio-projects)

## 📜 Licença

Este projeto é privado e todos os direitos são reservados. UNLICENSED - veja o campo de licença no [package.json](package.json) para mais detalhes.

---

**Status:** 🚧 Em Desenvolvimento Ativo

Última atualização: Novembro 2025
