import { describe, it, expect, vi } from 'vitest'
import axios from 'axios'
import { fetchExchangeRates } from '@/services/currencyService'

describe('Serviço de Conversão de Moeda', () => {
  it('deve buscar taxas de câmbio com sucesso', async () => {
    // Dados mock de resposta da API
    const mockRates = [
      { base_currency: 'USD', quote_currency: 'BRL', quote: 5.0 },
      { base_currency: 'EUR', quote_currency: 'BRL', quote: 5.5 },
    ]

    // Mock da chamada do axios
    vi.spyOn(axios, 'get').mockResolvedValue({ data: mockRates })

    const rates = await fetchExchangeRates()

    expect(rates).toEqual(mockRates)
    expect(axios.get).toHaveBeenCalledWith('https://swop.cx/rest/rates', {
      headers: {
        Authorization: expect.stringContaining('ApiKey'),
        Accept: 'application/json',
      },
    })
  })

  it('deve lançar erro quando a requisição falhar', async () => {
    // Mock falha na requisição
    vi.spyOn(axios, 'get').mockRejectedValue(new Error('Erro de rede'))

    await expect(fetchExchangeRates()).rejects.toThrow('Falha ao buscar taxas de câmbio')
  })
})
