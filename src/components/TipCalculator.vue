<template>
  <div class="tip-calculator">
    <AppHeading> Calculadora de Gorjeta </AppHeading>
    <div class="tip-calculator__input-section" v-show="!isMobile || !showResultsPanel">
      <CurrencySelector v-model="selectedCurrency" />

      <CurrencyInput
        v-model="billTotal"
        :currency="selectedCurrency"
        :currency-sign="selectedCurrencySign"
      />

      <RangeInput
        v-model="tipPercentage"
        label="Gorjeta"
        :min="10"
        :max="20"
        format-type="percentage"
      />

      <RangeInput
        v-model="peopleCount"
        label="Número de Pessoas"
        :min="2"
        :max="16"
        format-type="number"
      />
    </div>

    <FloatButton
      v-show="isMobile"
      :is-showing-results="showResultsPanel"
      @toggle="toggleResultsPanel"
    />

    <ResultsPanel
      v-show="!isMobile || showResultsPanel"
      :bill-total="billTotal"
      :tip-amount="tipAmount"
      :total-with-tip="totalWithTip"
      :people-count="peopleCount"
      :selected-currency="selectedCurrency"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import AppHeading from './AppHeading.vue'
import CurrencySelector from './CurrencySelector.vue'
import CurrencyInput from './CurrencyInput.vue'
import RangeInput from './RangeInput.vue'
import FloatButton from './FloatButton.vue'
import ResultsPanel from './ResultsPanel.vue'

const billTotal = ref(0)
const selectedCurrency = ref('USD')
const isMobile = ref(window.innerWidth <= 768)
const showResultsPanel = ref(false)
const tipPercentage = ref(10)
const peopleCount = ref(2)

const selectedCurrencySign = computed(() => (selectedCurrency.value === 'USD' ? '$' : '€'))

// Cálculos
const tipAmount = computed(() => billTotal.value * (tipPercentage.value / 100))
const totalWithTip = computed(() => billTotal.value + tipAmount.value)

const toggleResultsPanel = () => {
  showResultsPanel.value = !showResultsPanel.value
}

// Atualiza o estado de `isMobile` quando a tela é redimensionada
const handleResize = () => {
  isMobile.value = window.innerWidth <= 768
  if (!isMobile.value) {
    showResultsPanel.value = false
  }
}

onMounted(() => window.addEventListener('resize', handleResize))
onBeforeUnmount(() => window.removeEventListener('resize', handleResize))
</script>

<style lang="scss">
.tip-calculator {
  $primary-color: #820be0;
  background-color: white;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  height: fit-content;
  box-shadow:
    0 1px 3px 0 rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.1);

  &__title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1.5rem;
    text-align: center;
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    min-width: auto;
  }
}
</style>
