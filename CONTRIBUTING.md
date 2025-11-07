# Guia de Contribuição

Obrigado por considerar contribuir para este projeto! 🎉

## Como Contribuir

### Reportando Bugs

Se você encontrar um bug, por favor abra uma issue incluindo:

- Descrição clara do problema
- Passos para reproduzir o bug
- Comportamento esperado vs. comportamento atual
- Screenshots (se aplicável)
- Informações do ambiente (navegador, SO, versão do Node.js)

### Sugerindo Melhorias

Sugestões são bem-vindas! Para sugerir uma melhoria:

1. Verifique se já não existe uma issue similar
2. Abra uma nova issue com a tag `enhancement`
3. Descreva claramente a melhoria proposta
4. Explique por que essa melhoria seria útil

### Pull Requests

1. **Fork o projeto**
   ```bash
   git clone https://github.com/Yuri-Machado-Luz/portfolio-projects.git
   ```

2. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/minha-feature
   ```
   
   Convenções de nomenclatura:
   - `feature/` - para novas funcionalidades
   - `fix/` - para correções de bugs
   - `docs/` - para mudanças na documentação
   - `refactor/` - para refatorações
   - `test/` - para adição/modificação de testes

3. **Faça suas alterações**
   - Siga os padrões de código do projeto
   - Escreva mensagens de commit claras e descritivas
   - Adicione testes quando apropriado

4. **Teste suas alterações**
   ```bash
   # Execute os testes
   npx playwright test
   
   # Execute o linter
   npx eslint .
   
   # Formate o código
   npx prettier --write .
   ```

5. **Commit suas mudanças**
   ```bash
   git commit -m "tipo: descrição clara da mudança"
   ```
   
   Tipos de commit:
   - `feat:` - nova funcionalidade
   - `fix:` - correção de bug
   - `docs:` - mudanças na documentação
   - `style:` - formatação, ponto e vírgula, etc
   - `refactor:` - refatoração de código
   - `test:` - adição ou modificação de testes
   - `chore:` - atualização de tarefas de build, configs, etc

6. **Push para sua branch**
   ```bash
   git push origin feature/minha-feature
   ```

7. **Abra um Pull Request**
   - Use um título claro e descritivo
   - Descreva as mudanças em detalhes
   - Referencie issues relacionadas
   - Aguarde a revisão

## Padrões de Código

### JavaScript

- Use ES6+ features
- Use `const` e `let`, evite `var`
- Use arrow functions quando apropriado
- Mantenha funções pequenas e focadas
- Documente funções complexas

### CSS/SCSS

- Use metodologia BEM ou similar
- Mantenha seletores específicos
- Use variáveis SCSS para cores e medidas
- Organize por componentes

### HTML

- Use HTML5 semântico
- Mantenha estrutura hierárquica clara
- Use atributos ARIA quando apropriado
- Garanta acessibilidade

## Estrutura de Commits

```
tipo(escopo): descrição curta

Descrição mais detalhada do commit, se necessário.
Pode ter múltiplas linhas.

Refs: #123
```

Exemplo:
```
feat(router): adiciona navegação SPA

Implementa sistema de roteamento para Single Page Application
com suporte a histórico do navegador e navegação programática.

Refs: #45
```

## Testes

- Adicione testes para novas funcionalidades
- Mantenha cobertura de testes adequada
- Testes E2E devem cobrir fluxos principais
- Execute todos os testes antes de submeter PR

## Documentação

- Atualize README.md se necessário
- Documente APIs e interfaces públicas
- Adicione comentários para código complexo
- Atualize CHANGELOG.md

## Código de Conduta

### Nosso Compromisso

Este projeto busca ser acolhedor e inclusivo para todos.

### Comportamento Esperado

- Use linguagem acolhedora e inclusiva
- Respeite diferentes pontos de vista
- Aceite críticas construtivas graciosamente
- Foque no que é melhor para a comunidade
- Mostre empatia com outros membros

### Comportamento Inaceitável

- Linguagem ou imagens sexualizadas
- Trolling, comentários insultuosos
- Assédio público ou privado
- Publicar informações privadas de outros
- Conduta não profissional

## Dúvidas?

Se você tiver dúvidas sobre como contribuir, abra uma issue com a tag `question` ou entre em contato através do GitHub.

---

Obrigado por contribuir! 🚀
