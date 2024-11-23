<template>
  <div class="tip-calculator">
    <h1 class="tip-calculator__title">Calculadora de Gorjetas</h1>

    <CurrencySelector />

    <RangeField />

    <ResultsPanel />
  </div>
</template>

<script setup>
import CurrencySelector from './CurrencySelector.vue'
import RangeField from './RangeField.vue'
import ResultsPanel from './ResultsPanel.vue'
</script>

<style></style>
