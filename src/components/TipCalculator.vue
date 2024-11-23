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
      v-model="input.value"
      :label="input.label"
      :min="input.min"
      :max="input.max"
      class="tip-calculator__range"
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
const selectedCurrency = ref('USD')

const rangeInputs = ref([
  {
    label: 'Gorjeta',
    value: 10,
    min: 10,
    max: 20,
  },
  {
    label: 'Número de Pessoas',
    value: 2,
    min: 2,
    max: 16,
  },
])
</script>
