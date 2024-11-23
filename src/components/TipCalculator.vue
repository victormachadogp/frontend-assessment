<template>
  <div class="tip-calculator">
    <h1 class="tip-calculator__title">Calculadora de Gorjetas</h1>

    <CurrencySelector v-model="selectedCurrency" class="tip-calculator__currency-selector" />

    <RangeField />

    <ResultsPanel />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

import CurrencySelector from './CurrencySelector.vue'
import RangeField from './RangeField.vue'
import ResultsPanel from './ResultsPanel.vue'

const selectedCurrency = ref('USD')
</script>

<style></style>
