import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TipCalculator from '@/components/TipCalculator.vue'

describe('TipCalculator', () => {
  it('deve inicializar com valores padrão corretos', () => {
    const wrapper = mount(TipCalculator)

    expect(wrapper.vm.billTotal).toBe(0)
    expect(wrapper.vm.selectedCurrency).toBe('USD')
    expect(wrapper.vm.tipPercentage).toBe(10)
    expect(wrapper.vm.peopleCount).toBe(2)
  })

  it('deve calcular corretamente o valor da gorjeta', () => {
    const wrapper = mount(TipCalculator)

    wrapper.vm.billTotal = 100
    wrapper.vm.tipPercentage = 15

    expect(wrapper.vm.tipAmount).toBe(15)
    expect(wrapper.vm.totalWithTip).toBe(115)
  })

  it('deve alternar o painel de resultados em dispositivos móveis', async () => {
    const wrapper = mount(TipCalculator)

    wrapper.vm.isMobile = true
    await wrapper.vm.$nextTick()

    const floatButton = wrapper.findComponent({ name: 'FloatButton' })
    await floatButton.vm.$emit('toggle')

    expect(wrapper.vm.showResultsPanel).toBe(true)
  })
})
