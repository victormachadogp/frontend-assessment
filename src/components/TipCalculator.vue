<template>
  <div class="tip-calculator">
    <h1 class="tip-calculator__title">Calculadora de Gorjetas</h1>

    <CurrencySelector v-model="selectedCurrency" class="tip-calculator__currency-selector" />

    <div class="tip-calculator__bill-input">
      <label class="tip-calculator__label">
        Total da Conta ({{ selectedCurrency }})
        <input
          type="number"
          v-model.number="billTotal"
          min="0"
          step="0.01"
          class="tip-calculator__input"
        />
      </label>
    </div>

    <RangeInput
      v-for="(input, index) in rangeInputs"
      :key="index"
      :label="input.label"
      :value="input.value"
      :min="input.min"
      :max="input.max"
      @update="(newValue) => updateValue(index, newValue)"
    />

    <ResultsPanel />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

import CurrencySelector from './CurrencySelector.vue'
import RangeInput from './RangeInput.vue'
import ResultsPanel from './ResultsPanel.vue'

const billTotal = ref(0)
const tipPercentage = ref(10)
const peopleCount = ref(2)
const selectedCurrency = ref('USD')

// Dados dinâmicos
const rangeInputs = ref([
  { label: 'Tip', value: 10, min: 10, max: 20 },
  { label: 'Number of People', value: 2, min: 2, max: 16 },
])

const updateValue = (index, newValue) => {
  rangeInputs.value[index].value = newValue
}
</script>

<style></style>
