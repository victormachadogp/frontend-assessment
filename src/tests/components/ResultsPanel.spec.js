import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import ResultsPanel from '@/components/ResultsPanel.vue'

vi.mock('@/composables/useCurrencyConverter', () => ({
  useCurrencyConverter: () => ({
    convertToBRL: vi.fn(() => 50), // Mock do valor convertido
    error: null, // Mock do erro
  }),
}))

describe('ResultsPanel.vue', () => {
  const defaultProps = {
    billTotal: 200,
    tipAmount: 20,
    totalWithTip: 220,
    peopleCount: 4,
    selectedCurrency: 'USD',
  }

  it('renderiza os itens corretamente com os props fornecidos', () => {
    const wrapper = mount(ResultsPanel, {
      props: defaultProps,
    })

    const resultItems = wrapper.findAll('.result-item')
    expect(resultItems.length).toBe(4)

    expect(resultItems[0].text()).toContain('Gorjeta (USD)')

    expect(resultItems[1].text()).toContain('Total com Gorjeta (USD)')

    expect(resultItems[2].text()).toContain('Valor por Pessoa (USD)')

    expect(resultItems[3].text()).toContain('Total em BRL por Pessoa (R$)')
  })

  it('exibe o erro quando existe', () => {
    vi.mock('@/composables/useCurrencyConverter', () => ({
      useCurrencyConverter: () => ({
        convertToBRL: vi.fn(() => 50),
        error: 'Erro ao converter moeda',
      }),
    }))

    const wrapper = mount(ResultsPanel, {
      props: defaultProps,
    })
  })
})
