# Arquitetura do Portfolio Project

## Visão Geral da Arquitetura

Este documento descreve a arquitetura técnica do projeto Portfolio, detalhando a organização do código, padrões de design e decisões arquiteturais.

## Arquitetura de Alto Nível

```
┌─────────────────────────────────────────────┐
│           Cliente (Browser)                 │
│  ┌─────────────────────────────────────┐   │
│  │      Interface do Usuário (HTML)    │   │
│  └──────────────┬──────────────────────┘   │
│                 │                            │
│  ┌──────────────▼──────────────────────┐   │
│  │     Camada de Apresentação (CSS)    │   │
│  └──────────────┬──────────────────────┘   │
│                 │                            │
│  ┌──────────────▼──────────────────────┐   │
│  │   Camada de Lógica (JavaScript)     │   │
│  │   ┌─────────────────────────────┐   │   │
│  │   │   Router (SPA Navigation)   │   │   │
│  │   └─────────────────────────────┘   │   │
│  │   ┌─────────────────────────────┐   │   │
│  │   │   Utils (Helper Functions)  │   │   │
│  │   └─────────────────────────────┘   │   │
│  │   ┌─────────────────────────────┐   │   │
│  │   │   App (Main Application)    │   │   │
│  │   └─────────────────────────────┘   │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

## Estrutura de Diretórios

```
portfolio-project/
│
├── src/                    # Código-fonte principal
│   ├── js/                # JavaScript modules
│   │   ├── app.js         # Ponto de entrada da aplicação
│   │   ├── router.js      # Sistema de roteamento SPA
│   │   └── utils/         # Utilitários e helpers
│   │       └── interact.js # Funções de interação
│   │
│   └── scss/              # Estilos SCSS
│       └── styles.scss    # Estilos principais (compilados para CSS)
│
├── tests/                 # Testes automatizados
│   └── example.spec.js    # Testes E2E com Playwright
│
├── config/                # Arquivos de configuração
│   └── playwright.md      # Documentação de testes
│
├── roadmap/               # Documentação de planejamento
│   ├── CHANGELOG.md       # Histórico de mudanças
│   ├── PLANNING.md        # Planejamento do projeto
│   └── ROADMAP.md         # Roadmap de desenvolvimento
│
├── docs/                  # Documentação técnica
│   └── ARCHITECTURE.md    # Este arquivo
│
├── index.html             # Página HTML principal
├── index.js               # Entry point JavaScript
│
└── [arquivos de config]   # ESLint, Playwright, package.json, etc.
```

## Camadas da Aplicação

### 1. Camada de Apresentação (View Layer)

**Responsabilidades:**
- Renderização da interface do usuário
- Estrutura HTML semântica
- Estilos visuais e responsividade

**Tecnologias:**
- HTML5
- CSS3/SCSS
- Google Fonts

**Arquivos principais:**
- `index.html` - Template principal
- `src/scss/styles.scss` - Estilos globais

### 2. Camada de Roteamento (Routing Layer)

**Responsabilidades:**
- Navegação entre páginas (SPA)
- Gerenciamento de histórico do navegador
- Carregamento dinâmico de conteúdo

**Tecnologias:**
- JavaScript ES6+ (History API)
- Custom Router Implementation

**Arquivos principais:**
- `src/js/router.js` - Implementação do router

**Funcionalidades:**
```javascript
// Estrutura conceitual do router
Router {
  - routes: Map<string, Component>
  - navigate(path): void
  - handlePopState(): void
  - getCurrentRoute(): Route
}
```

### 3. Camada de Lógica (Business Logic Layer)

**Responsabilidades:**
- Lógica de negócio da aplicação
- Manipulação de dados
- Interações do usuário
- Gerenciamento de estado

**Tecnologias:**
- JavaScript ES6+
- Módulos ES6
- React (planejado para pós-MVP)

**Arquivos principais:**
- `src/js/app.js` - Aplicação principal
- `src/js/utils/interact.js` - Utilitários de interação

### 4. Camada de Dados (Data Layer)

**Status:** Planejada para implementação futura

**Responsabilidades:**
- Gerenciamento de estado da aplicação
- Comunicação com APIs
- Cache local
- Persistência de dados

**Tecnologias futuras:**
- LocalStorage/SessionStorage
- IndexedDB (se necessário)
- Fetch API para comunicação HTTP
- Possível integração com backend REST API

## Padrões de Design

### 1. Single Page Application (SPA)

A aplicação utiliza o padrão SPA para proporcionar uma experiência fluida sem recarregamento de página:

- **Roteamento client-side:** Navegação gerenciada pelo JavaScript
- **History API:** Suporte a botões voltar/avançar do navegador
- **Dynamic loading:** Conteúdo carregado dinamicamente

### 2. Componentização

Embora ainda em desenvolvimento, a aplicação segue princípios de componentização:

- **Separação de concerns:** HTML, CSS e JS separados por responsabilidade
- **Reutilização:** Componentes projetados para reutilização
- **Modularidade:** Código organizado em módulos independentes

### 3. Mobile-First Design

- **Responsividade:** Design adaptável para diferentes tamanhos de tela
- **Progressive Enhancement:** Funcionalidades básicas para todos, melhorias para dispositivos mais capazes
- **Performance:** Otimização para conexões lentas

### 4. BEM (Block Element Modifier) - Planejado

Para nomenclatura de classes CSS:

```scss
// Exemplo de estrutura BEM
.navbar {           // Block
  &__menu {        // Element
    &--active {    // Modifier
    }
  }
}
```

## Fluxo de Dados

### Inicialização da Aplicação

```
1. Browser carrega index.html
   ↓
2. HTML carrega estilos CSS
   ↓
3. HTML carrega scripts JavaScript
   ↓
4. app.js inicializa a aplicação
   ↓
5. Router configura rotas
   ↓
6. Router renderiza rota inicial
   ↓
7. Event listeners são configurados
   ↓
8. Aplicação pronta para interação
```

### Navegação SPA

```
1. Usuário clica em link
   ↓
2. Event listener intercepta clique
   ↓
3. Router.navigate(path) é chamado
   ↓
4. History API atualiza URL
   ↓
5. Router busca componente da rota
   ↓
6. Componente é renderizado no DOM
   ↓
7. Animações de transição (se houver)
   ↓
8. Nova página exibida
```

## Decisões Arquiteturais

### 1. Por que SPA?

**Decisão:** Implementar como Single Page Application

**Razões:**
- ✅ Melhor experiência do usuário (transições suaves)
- ✅ Menor carga no servidor (após carregamento inicial)
- ✅ Ideal para portfolios com navegação frequente
- ✅ Facilita animações e transições

**Trade-offs:**
- ⚠️ SEO mais complexo (solucionável com SSR no futuro)
- ⚠️ Carregamento inicial pode ser mais lento
- ⚠️ JavaScript obrigatório

### 2. Por que SCSS?

**Decisão:** Usar SCSS ao invés de CSS puro

**Razões:**
- ✅ Variáveis para temas consistentes
- ✅ Nesting para código mais legível
- ✅ Mixins para reutilização
- ✅ Modularidade com imports

### 3. Por que Playwright para testes?

**Decisão:** Playwright para testes E2E

**Razões:**
- ✅ Suporte multi-browser
- ✅ API moderna e intuitiva
- ✅ Debugging facilitado
- ✅ Screenshots e vídeos automáticos
- ✅ Execução rápida e confiável

### 4. Vanilla JS vs Framework

**Decisão Atual:** Vanilla JavaScript para MVP inicial, migração para React pós-MVP

**Razões para MVP com Vanilla JS:**
- ✅ Aprendizado dos fundamentos
- ✅ Performance otimizada
- ✅ Sem dependências pesadas
- ✅ Flexibilidade total
- ✅ Implementação rápida do MVP

**Plano Futuro:**
- React será adotado após conclusão do MVP
- Migração será feita gradualmente
- Permitirá componentização mais robusta e escalabilidade

## Performance

### Estratégias de Otimização

1. **Code Splitting**
   - Carregar JavaScript sob demanda
   - Lazy loading de componentes

2. **Asset Optimization**
   - Minificação de CSS/JS em produção
   - Compressão de imagens
   - Uso de formatos modernos (WebP, AVIF)

3. **Caching**
   - Service Workers (planejado)
   - Cache de assets estáticos
   - LocalStorage para dados frequentes

4. **Critical CSS**
   - Inline critical CSS
   - Defer non-critical styles

## Segurança

### Medidas Implementadas/Planejadas

1. **Content Security Policy (CSP)**
   - Headers CSP adequados
   - Prevenção de XSS

2. **HTTPS**
   - Sempre usar HTTPS em produção
   - Secure cookies

3. **Sanitização de Inputs**
   - Validação de formulários
   - Escape de HTML

4. **Dependencies**
   - Auditoria regular com `npm audit`
   - Atualizações de segurança

## Acessibilidade

### WCAG 2.1 AA Compliance

1. **Semântica HTML**
   - Tags apropriadas
   - Landmarks ARIA

2. **Navegação por Teclado**
   - Tab order lógico
   - Focus indicators visíveis

3. **Screen Readers**
   - Alt text em imagens
   - ARIA labels quando necessário
   - Skip links

4. **Contraste de Cores**
   - Ratio mínimo 4.5:1 para texto
   - Cores não como único meio de informação

## Escalabilidade Futura

### Preparação para Crescimento

1. **Modularização**
   - Código organizado em módulos
   - Fácil adição de novas features

2. **API-Ready**
   - Estrutura preparada para integração com backend
   - Separação de concerns

3. **State Management**
   - Estrutura para Redux ou Context API no futuro
   - Padrões de gerenciamento de estado

4. **Internacionalização (i18n)**
   - Estrutura preparada para múltiplos idiomas
   - Textos separados de lógica

## Monitoramento e Observabilidade

### Métricas Planejadas

1. **Performance Monitoring**
   - Core Web Vitals
   - Lighthouse CI
   - Real User Monitoring (RUM)

2. **Error Tracking**
   - Sentry ou similar (planejado)
   - Console error logging

3. **Analytics**
   - Google Analytics (planejado)
   - Eventos customizados
   - Conversões

## Referências e Recursos

- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/)
- [React Documentation](https://react.dev/)
- [Playwright Documentation](https://playwright.dev/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Versão do documento:** 1.0  
**Última atualização:** Novembro 2025  
**Autor:** Yuri Machado Luz
