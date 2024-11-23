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

    <RangeField />

    <ResultsPanel />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

import CurrencySelector from './CurrencySelector.vue'
import RangeField from './RangeField.vue'
import ResultsPanel from './ResultsPanel.vue'

const billTotal = ref(0)
const selectedCurrency = ref('USD')
</script>

<style></style>
