/**
 * Conversão de moeda utilizando uma abordagem alternativa devido a limitações da API Swop.
 *
 * A API Swop não permite chamadas diretas para taxas de conversão específicas como USD/BRL
 * sem um plano pago. Como solução alternativa, este método realiza a conversão em duas etapas:
 *
 * 1. Para USD: Converte USD para EUR (invertendo a taxa EUR/USD)
 * 2. Em seguida, converte EUR para BRL usando a taxa direta
 *
 * Isso contorna a limitação de "feature_authorization" que impede chamadas diretas
 * para pares de moeda específicos com a conta gratuita.
 *
 * Exemplo de fluxo de conversão:
 * USD -> (1/EUR_USD) -> EUR -> (EUR_BRL) -> BRL
 */

import { computed } from 'vue'
import { useExchangeRates } from './useExchangeRates'

export function useCurrencyConverter(amount, selectedCurrency) {
  const { findRate, error } = useExchangeRates()

  const convertToBRL = computed(() => {
    if (!amount.value) return 0

    let rate = 1
    if (selectedCurrency.value === 'USD') {
      const usdToEurRate = 1 / findRate('EUR', 'USD')
      const eurToBrlRate = findRate('EUR', 'BRL') || 0
      rate = usdToEurRate * eurToBrlRate
    } else if (selectedCurrency.value === 'EUR') {
      // EUR -> BRL direto
      rate = findRate('EUR', 'BRL') || 0
    }

    return amount.value * rate
  })

  return {
    convertToBRL,
    error,
  }
}
