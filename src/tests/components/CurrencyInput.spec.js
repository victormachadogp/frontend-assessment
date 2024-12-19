import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CurrencyInput from '@/components/CurrencyInput.vue'

describe('CurrencyInput', () => {
  it('deve emitir o valor numérico digitado', async () => {
    const wrapper = mount(CurrencyInput, {
      props: {
        modelValue: 0,
        currency: 'USD',
        currencySign: '$',
      },
    })

    const input = wrapper.find('.currency-input__field')
    await input.setValue('73.230')

    expect(wrapper.emitted('update:modelValue')[0]).toEqual([73.23])
  })

  it('deve exibir o símbolo e código da moeda corretos', () => {
    const wrapper = mount(CurrencyInput, {
      props: {
        modelValue: 0,
        currency: 'EUR',
        currencySign: '€',
      },
    })

    expect(wrapper.find('.currency-input__currency-sign span').text()).toBe('€')
    expect(wrapper.find('.currency-input__currency-code span').text()).toBe('EUR')
  })
})
