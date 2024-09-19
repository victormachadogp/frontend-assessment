# Convenia

## Avaliação Técnica - Frontend

> O desafio é muito simples: um SPA responsivo (desktop e mobile) para divisão de gorjeta
> Esperamos avaliar sua melhor implementação para o contexto que estamos propondo.

Que tenha um excelente desenvolvimento :wink:

### Desafio

> Voce deverá desenvolver um SPA ou Aplicação responsiva usando o framework Vue.js e qualquer pacote de componentes que desejar.
> Calculadoras de gorjeta existem aos montes nas principais lojas de aplicativos. Você insere o total da conta, o quanto quer dar de gorjeta e quantas pessoas vão dividir a conta.
> O total da conta pode ser em USD(Dólar) ou EUR(Euro).
> Deve ser exibido a conversão para BRL(R$), obtida via chamada (REST)

Dica: você pode usar qualquer API gratuita para obter a conversão de moedas, como o [SWOP](https://swop.cx/).

### User Story

```gherkin
#language:pt
Funcionalidade: Calculo de Gorjeta
Como Usuário do App
Gostaria de Visualizar 
De maneira que estas informações alimentem meu sistema pessoal

    Regra: Valores padrão
        Dado que não queremos exibição de erros
        Então o valor padrão para o campo "Valor" é "0"
        E o valor padrão para o campo "Gorjeta" é "10"
        E o campo "Gorjeta" pode variar de "10" a "20" %
        E o valor padrão para o campo "Pessoas" é "2"
        E o campo "Pessoas" pode variar de "2" a "16"

    Regra: Exibição
        Dado que estejamos entrando no app Le/Tip
        E o cliente seja mobile
        Então devemos exibir o painel de Entrada
    
    Esquema do Cenário: Cálculo padrão
        Dado que estejamos no app Le/Tip
        Quando selecionamos EUR no seletor de moeda
        E inserirmos <conta> no campo "Valor" 
        E selecionamos <gorjeta> no campo "Gorjeta"
        E selecionamos <pessoas> no campo "Pessoas"
        Então visualizamos <conta> em Conta no painel de resultado
        E visualizamos <gorjetacalculada> em Gorjeta no painel de resultado
        E visualizamos <total> em Total no painel de resultado
        E visualizamos <porPessoa> em Por Pessoa no painel de resultado

        Exemplo:
        |conta|gorjeta|pessoas|gorjetacalculada|total|porPessoa|
        |73.23|13     |10     |9.52            |82.75|8.28     |
        |60.00|10     |3      |6.00            |66.00|22.00    |
        |13.00|15     |2      |1.95            |14.95|7.48     |
        |2.58 |17     |3      |0,44            |3.02 |1.01     |

    Cenário: Cálculo em reais
        Dado que estejamos no app Le/Tip
        E selecionamos EUR no seletor de moeda
        E inserirmos "13.00" no campo "Valor" 
        E selecionamos "15" no campo "Gorjeta"
        E selecionamos "2" no campo "Pessoas"
        Quando o cálculo é realizado de maneira fluente
        E o sistema realiza uma chamada de API para obter a conversão para BRL
        Então o obtém o resultado da conversão para BRL
        E apresenta o valor obtido em "em R$"
    
    Cenário: experiencia mobile
        Dado que estejamos no app Le/Tip
        E o cliente seja mobile
        E estejamos no painel de entrada
        Quando pressionarmos o botão ">"
        Então o painel de resultado deve ser exibido

    Cenário: experiencia mobile, novo cálculo
        Dado que estejamos no app Le/Tip
        E o cliente seja mobile
        E estejamos no painel de resultado
        Quando pressionarmos o botão "<"
        Então o painel de entrada deve ser exibido

    Esquema do Cenário: alteração de moeda
        Dado que estejamos no app Le/Tip
        Quando alteramos o campo "moeda" para <moeda>
        Então todas as etiquetas de moeda devem ser alteradas para <sinal>
        E a conversão para BRL deve considerar <moeda>

        Exemplo:
        |moeda|sinal|
        |EUR  |€    |
        |USD  |$    |
```

### Referência visual

#### Desktop

![Mockup Desktop](/Desktop.png)

#### Mobile

![Mockup Desktop](/Mobile.png)

### Considerações

* Como pode perceber, não há um botão "calcular", todos cálculos devem ser reativos
* Apreciamos o uso de alguma metodológia CSS (BEM, RSCSS, ou qualquer outra) 
* Avaliaremos como organizará a requisição para conversão de moeda
* A partir do apresentado, você pode incrementar a aplicação como quiser
* Você tem 1(uma) semana para realizar a avaliação

### Aguardamos seu Merge Request

Convenia :purple_heart:
