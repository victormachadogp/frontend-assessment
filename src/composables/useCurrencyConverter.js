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
