# Tip Calculator 💰

### Visão Geral
Uma aplicação web de calculadora de gorjetas construída com Vue.js, projetada para ser responsiva e oferecer uma experiência intuitiva para calcular gorjetas e dividir contas.

[Imagem do layout]

### 🚀 Tecnologias Utilizadas

- Vue.js 3 (Composition API)
- Vite
- SCSS
- Axios (para requisições de API)

### 🔑 Principais Decisões de Design
#### Arquitetura de Componentes

- Componentização para facilitar manutenção
- Uso de Composition API para lógica de estado
- Separação clara de responsabilidades entre componentes

#### Layout Móvel

- Toggle entre painel de entrada e resultados em telas menores
- Botão flutuante para navegação entre seções
- Design responsivo

#### Conversão de Moeda

- Suporte para USD e EUR
- Conversão em tempo real para BRL
- Tratamento de erros na conversão de moedas


### 🧩 Estrutura do Projeto
```
src/
├── assets/
│   ├── base.css
│   └── main.css
├── components/
│   ├── AppHeader.vue
│   ├── CurrencySelector.vue
│   ├── RangeInput.vue
│   ├── ResultItem.vue
│   ├── ResultsPanel.vue
│   └── TipCalculator.vue
├── composables/
│   ├── useCurrencyConverter.js
│   └── useExchangeRate.js
├── services/
│   └── currencyService.js
├── App.vue
└── main.js
```

### 🎨 Design no Figma
Link para o design no Figma
[Link]

### 🔧 Funcionalidades

- Cálculo de gorjeta baseado em percentual
- Divisão de conta entre múltiplas pessoas
- Seleção de moeda (USD/EUR)
- Conversão para BRL
- Layout responsivo

# frontend-test

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
