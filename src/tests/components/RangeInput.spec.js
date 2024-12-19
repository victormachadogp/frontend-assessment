import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import RangeInput from '@/components/RangeInput.vue'

describe('RangeInput', () => {
  it('deve emitir o valor do range gorjeta corretamente', async () => {
    const wrapper = mount(RangeInput, {
      props: {
        modelValue: 10,
        label: 'Gorjeta',
        min: 10,
        max: 20,
        formatType: 'percentage',
      },
    })

    const input = wrapper.find('.input-range__slider')
    await input.setValue(15)

    expect(wrapper.emitted('update:modelValue')[0]).toEqual([15])
  })

  it('deve renderizar label e valores do range numero de pessoas corretamente', () => {
    const wrapper = mount(RangeInput, {
      props: {
        modelValue: 15,
        label: 'Número de Pessoas',
        min: 2,
        max: 16,
        formatType: 'number',
      },
    })

    expect(wrapper.find('.input-range__label').text()).toContain('Número de Pessoas (15)')
    expect(wrapper.find('.input-range__min').text()).toBe('2')
    expect(wrapper.find('.input-range__max').text()).toBe('16')
  })
})
