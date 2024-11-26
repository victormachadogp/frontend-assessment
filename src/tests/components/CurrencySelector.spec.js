import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CurrencySelector from '@/components/CurrencySelector.vue'

describe('CurrencySelector', () => {
  it('deve renderizar dois botões de moeda', () => {
    const wrapper = mount(CurrencySelector, {
      props: {
        modelValue: 'USD',
      },
    })

    const buttons = wrapper.findAll('.currency-selector__toggle-button')
    expect(buttons.length).toBe(2)
    expect(buttons[0].text()).toBe('USD ($)')
    expect(buttons[1].text()).toBe('EUR (€)')
  })

  it('deve acionar uma atualização quando uma moeda é selecionada', async () => {
    const wrapper = mount(CurrencySelector, {
      props: {
        modelValue: 'EUR',
      },
    })

    const eurButton = wrapper.findAll('.currency-selector__toggle-button')[1]
    await eurButton.trigger('click')

    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['EUR'])
  })
})
