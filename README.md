# Tip Calculator 💰

> [!IMPORTANT]
>
> Este projeto utiliza uma API externa para buscar as taxas de câmbio. **Para que a funcionalidade de integração com a API funcione corretamente, é necessário adicionar uma API Key no arquivo `src/services/currencyService.js`**.
>
> Para configurar a API Key: 
> 1. Obtenha sua API Key na plataforma [SWOP](https://swop.cx/).
> 2. Substitua o valor de `<SUA_API_KEY>` pelo valor da sua chave API. 


### Visão Geral
Uma aplicação web de calculadora de gorjetas construída com Vue.js, projetada para ser responsiva e oferecer uma experiência intuitiva para calcular gorjetas e dividir contas.

### Versão Desktop
![image](https://github.com/user-attachments/assets/5b36e1ed-1f93-46e3-aa73-b42668948836)

## Versão Mobile
![image](https://github.com/user-attachments/assets/d5361109-3468-4cf9-865f-448e3d84fb7a)
![image](https://github.com/user-attachments/assets/4f1a0bbb-6066-4f9c-8744-1aa75f310d5c)

### 🚀 Tecnologias Utilizadas

- Vue.js 3 (Composition API)
- Vite
- SASS/SCSS
- Axios (para requisições de API)
- API SWOP

### 🔑 Principais Decisões de Design
#### Arquitetura de Componentes

- Componentização para facilitar manutenção
- Uso de Composition API para lógica de estado
- Separação clara de responsabilidades entre componentes

#### Layout Mobile

- Toggle entre painel de entrada e resultados em telas menores
- Botão flutuante para navegação entre seções
- Design responsivo

#### Conversão de Moeda

- Suporte para USD e EUR
- Conversão em tempo real para BRL
- Tratamento de erros na conversão de moedas

### 🎨 Design no Figma
O design da interface foi criado no Figma, é possivel observar o processo de design até a criação do layout final no link abaixo:

👉 [Design Workflow do Projeto](https://www.figma.com/design/AssQRqrLObmgOIXx5YQIuk/Calculadora-de-Gorjeta-Workflow?node-id=0-1&t=F5VvKkGfJBUx7D7u-1)

### 🔧 Funcionalidades

- Cálculo de gorjeta baseado em percentual
- Divisão de conta entre múltiplas pessoas
- Seleção de moeda (USD/EUR)
- Conversão para BRL
- Layout responsivo
- Botão flutuante para alternar entre o painel de entrada e os resultados em telas menores.

## Configuração Recomendada de IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (com Vetur desabilitado).

### Instalação e Execução

```sh
npm install
```

### Compilar e Hot-Reload para Desenvolvimento

```sh
npm run dev
```


### Linter com [ESLint](https://eslint.org/)

```sh
npm run lint
```

### 🧪 Testes
Este projeto possui testes implementados utilizando Vitest e Vue Test Utils para garantir a confiabilidade dos componentes e dos serviços.

#### Executando os Testes
Para rodar os testes localmente, use o seguinte comando:

```bash
npm run test
```
Isso executará todos os testes definidos na aplicação.


### 🧩 Estrutura do Projeto
```
src/
├── assets/
│   └── base.scss
├── components/
│   ├── AppHeading.vue
│   ├── CurrencyInput.vue
│   ├── CurrencySelector.vue
│   ├── FloatButton.vue
│   ├── RangeInput.vue
│   ├── ResultItem.vue
│   ├── ResultsPanel.vue
│   └── TipCalculator.vue
├── composables/
│   ├── useCurrencyConverter.js
│   └── useExchangeRates.js
├── services/
│   └── currencyService.js
├── tests__/
│   ├── components/
│   │   ├── TipCalculator.spec.vue
│   │   ├── CurrencySelector.spec.vue
│   │   ├── RangeInput.spec.vue
│   │   ├── ResultsPanel.spec.vue
│   │   └── CurrencyInput.spec.vue
│   └── services/
│        ├── currency.integration.spec.js
│        └── currencyService.spec.js
├── App.vue
└── main.js    
```


