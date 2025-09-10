# Template Automatik Labs

Este é um template completo baseado no site da Automatik Labs, criado com React, TypeScript, Tailwind CSS e Framer Motion.

## 🎨 Características do Template

### Design e Estilo
- **Paleta de Cores**: 
  - Primary: Azul elétrico (#3A75FF)
  - Accent: Verde neon (#00FFAA)
  - Dark: Tons escuros profissionais (#0B0B0B, #111111, #1A1A1A)
- **Tipografia**: Inter font family
- **Efeitos**: Gradientes, blur effects, animações suaves
- **Responsivo**: Design adaptável para todos os dispositivos

### Seções Incluídas
1. **Header** - Navegação fixa com menu responsivo
2. **Hero** - Seção principal com typewriter effect e estatísticas interativas
3. **About** - Apresentação da empresa com cards informativos
4. **Services** - Soluções oferecidas em grid responsivo
5. **AI Agents** - Demonstração de agentes de IA com chat simulado
6. **Projects** - Portfólio de projetos com modal de detalhes
7. **Methodology** - Metodologia de trabalho em 4 etapas
8. **Comparison** - Tabela comparativa responsiva
9. **CTA** - Call-to-action com formulário integrado
10. **Footer** - Rodapé simples e elegante

### Componentes Reutilizáveis
- `Button` - Botões com variantes e animações
- `Container` - Wrapper para conteúdo centralizado
- `GradientText` - Texto com gradiente
- `Modal` - Modal responsivo para detalhes
- `ProjectCard` - Card de projeto com hover effects
- `ServiceCard` - Card de serviço animado
- `AIChat` - Simulação de chat com IA
- `InteractiveStats` - Estatísticas com animações
- `TypewriterEffect` - Efeito de máquina de escrever
- `Marquee` - Texto em movimento
- `LoadingScreen` - Tela de carregamento animada
- `ParticleBackground` - Fundo com partículas animadas
- `ScrollProgress` - Barra de progresso do scroll
- `FloatingElements` - Elementos flutuantes decorativos
- `CursorTrail` - Rastro do cursor

## 🖼️ Substituição de Imagens

### Imagens Atuais (Placeholders)
As seguintes imagens estão usando placeholders do Pexels e devem ser substituídas:

#### Projetos:
1. **Super Time de Agentes**: `https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg`
2. **Super Analista de Marketing**: `https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg`
3. **Super Robô Assistente**: `https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg`

#### Agentes de IA:
1. **Sarah - Atendimento**: `https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg`
2. **Marcus - Vendas**: `https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg`
3. **Ana - Marketing**: `https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg`

### Como Substituir as Imagens

1. **Prepare suas imagens**:
   - Formato recomendado: JPG ou PNG
   - Resolução mínima: 800x600px para projetos
   - Resolução mínima: 150x150px para avatares
   - Otimize as imagens para web

2. **Adicione ao projeto**:
   ```bash
   # Coloque as imagens na pasta public/
   public/
   ├── projeto-1.jpg
   ├── projeto-2.jpg
   ├── projeto-3.jpg
   ├── avatar-sarah.jpg
   ├── avatar-marcus.jpg
   └── avatar-ana.jpg
   ```

3. **Atualize os caminhos**:
   - Em `TemplateProjects.tsx`: substitua as URLs dos projetos
   - Em `TemplateAIAgents.tsx`: substitua as URLs dos avatares

## 🚀 Como Usar

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```

### Build para Produção
```bash
npm run build
```

## 📝 Personalização

### Cores
Edite o arquivo `tailwind.config.js` para alterar a paleta de cores:

```javascript
colors: {
  primary: {
    400: '#SUA_COR_AQUI',
    500: '#SUA_COR_PRINCIPAL',
    // ...
  }
}
```

### Textos
Todos os textos estão hardcoded nos componentes para facilitar a personalização. Procure por:
- Títulos em tags `<h1>`, `<h2>`, etc.
- Descrições em tags `<p>`
- Labels em botões e links

### Animações
As animações usam Framer Motion. Para ajustar:
- Duração: propriedade `duration`
- Delay: propriedade `delay`
- Easing: propriedade `ease`

### Formulário
O formulário CTA está integrado com Typebot. Para alterar:
1. Substitua a URL do iframe em `TemplateCTA.tsx`
2. Ou implemente seu próprio formulário

## 🎯 Funcionalidades Especiais

### Efeitos Visuais
- Partículas animadas no fundo
- Elementos flutuantes decorativos
- Rastro do cursor (desktop)
- Barra de progresso do scroll
- Gradientes animados

### Interatividade
- Menu mobile responsivo
- Modal de detalhes dos projetos
- Chat simulado com IA
- Estatísticas interativas
- Hover effects em todos os elementos

### Performance
- Lazy loading de imagens
- Otimização de animações
- Code splitting automático
- Compressão de assets

## 📱 Responsividade

O template é totalmente responsivo com breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Tecnologias Utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações
- **Lucide React** - Ícones
- **Vite** - Build tool

## 📄 Licença

Este template foi criado baseado no site da Automatik Labs. Use como referência para criar seu próprio design único.

---

**Nota**: Lembre-se de substituir todas as imagens placeholder pelas suas próprias imagens antes de usar em produção.