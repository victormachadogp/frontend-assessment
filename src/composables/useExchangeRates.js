import { ref, onMounted } from 'vue'
import { fetchExchangeRates } from '../services/currencyService'

export function useExchangeRates() {
  const exchangeRates = ref([])
  const error = ref('')

  const findRate = (baseCurrency, quoteCurrency) => {
    return exchangeRates.value.find(
      (rate) => rate.base_currency === baseCurrency && rate.quote_currency === quoteCurrency,
    )?.quote
  }

  const updateRates = async () => {
    try {
      exchangeRates.value = await fetchExchangeRates()
      error.value = ''
    } catch (err) {
      error.value = 'Erro ao obter taxas de conversão. Por favor, tente novamente.'
      console.error('Exchange rate error:', err)
    }
  }

  onMounted(() => {
    updateRates()
  })

  return {
    exchangeRates,
    error,
    findRate,
  }
}
