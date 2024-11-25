<template>
  <div class="tip-calculator">
    <AppHeader />
    <div class="tip-calculator__input-section" v-show="!isMobile || !showResultsPanel">
      <CurrencySelector v-model="selectedCurrency" />

      <div class="tip-calculator__bill">
        <label class="tip-calculator__bill-label"> Total da Conta </label>
        <div class="tip-calculator__bill-input-wrapper">
          <div class="tip-calculator__currency-sign">
            <span>{{ selectedCurrencySign }}</span>
          </div>
          <input
            v-model.number="billTotal"
            min="0"
            step="0.01"
            class="tip-calculator__bill-input"
          />
          <div class="tip-calculator__currency-code">
            <span class="span-something"> {{ selectedCurrency }} </span>
          </div>
        </div>
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
    </div>

    <div class="tip-calculator__toggle">
      <button
        class="tip-calculator__toggle-button"
        @click="toggleResultsPanel"
        v-show="isMobile"
        :aria-label="showResultsPanel ? 'Voltar para calculadora' : 'Ver resultados'"
      >
        {{ showResultsPanel ? '<' : '>' }}
      </button>
    </div>

    <ResultsPanel
      v-show="!isMobile || showResultsPanel"
      :bill-total="billTotal"
      :tip-amount="tipAmount"
      :total-with-tip="totalWithTip"
      :people-count="peopleCount"
      :selected-currency="selectedCurrency"
      class="tip-calculator__results"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import AppHeader from './AppHeader.vue'
import CurrencySelector from './CurrencySelector.vue'
import RangeInput from './RangeInput.vue'
import ResultsPanel from './ResultsPanel.vue'

const billTotal = ref(0)
const selectedCurrency = ref('USD')
const isMobile = ref(window.innerWidth <= 768)
const showResultsPanel = ref(false)

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

const selectedCurrencySign = computed(() => (selectedCurrency.value === 'USD' ? '$' : '€'))

// Computed properties para acessar os valores específicos
const tipPercentage = computed(() => rangeInputs.value[0].value)
const peopleCount = computed(() => rangeInputs.value[1].value)

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
  max-width: 600px;
  min-width: 400px;
  margin: 0 auto;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
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

  &__bill {
    margin-bottom: 1.5rem;
    padding: 0 2rem;

    &-label {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    &-input-wrapper {
      position: relative;
      justify-self: flex-start;

      & > .tip-calculator__currency-sign {
        position: absolute;
        display: flex;
        align-items: center;
        top: 0;
        bottom: 0;
        left: 0;
        padding-left: 0.75rem;

        span {
          color: #6b7280;
          line-height: 1.25rem;
        }
      }

      & > .tip-calculator__currency-code {
        position: absolute;
        display: flex;
        align-items: center;
        top: 0;
        bottom: 0;
        right: 0;
        padding-left: 0.75rem;

        span {
          color: #6b7280;
          padding-right: 0.75rem;
          line-height: 1.25rem;
        }
      }

      & > .tip-calculator__bill-input {
        display: block;
        align-self: flex-start;
        padding: 0.42rem 3rem 0.42rem 1.75rem;
        border: 1px solid #d1d5db;
        border-radius: 0.375rem;
        font-size: 0.875rem;
        line-height: 1.5;
        transition: border-color 0.15s ease-in-out;

        &:focus {
          outline: none;
          border-color: $primary-color;
        }
      }
    }
  }

  &__toggle-button {
    display: none;
    position: fixed;
    background-color: $primary-color;
    color: white;
    border: 1px solid $primary-color;
    border-radius: 50%;
    padding: 0.7rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    position: fixed;
    bottom: 1.25rem;
    right: 1.25rem;
    z-index: 1000;

    &:hover {
      background-color: darken($primary-color, 10%);
    }
  }

  @media (max-width: 768px) {
    min-width: auto;

    &__toggle-button {
      display: block;
      margin: 1rem 0;
    }
  }
}
</style>
