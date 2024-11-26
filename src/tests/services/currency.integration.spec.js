import { fetchExchangeRates } from '@/services/currencyService'

describe('Integração de Serviço de Moeda', () => {
  it('deve buscar taxas reais da API', async () => {
    const rates = await fetchExchangeRates()

    expect(rates).toBeInstanceOf(Array)

    // Verificações de uma chamada API com dados reais
    const usdRate = rates.find((r) => r.base_currency === 'EUR' && r.quote_currency === 'USD')

    expect(usdRate).toBeDefined()
    expect(usdRate.quote).toBeGreaterThan(0)
  })
})
