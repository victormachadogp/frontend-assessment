<template>
  <div class="results-panel">
    <ResultItem v-for="item in resultItems" :key="item.label" v-bind="item" />
    <div v-if="error" class="results-panel__error">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ResultItem from './ResultItem.vue'
import { useCurrencyConverter } from '../composables/useCurrencyConverter'

const props = defineProps({
  billTotal: {
    type: [Number, String],
    required: true,
  },
  tipAmount: {
    type: Number,
    required: true,
  },
  totalWithTip: {
    type: [Number, String],
    required: true,
  },
  peopleCount: {
    type: Number,
    required: true,
  },
  selectedCurrency: {
    type: String,
    required: true,
  },
})

const { convertToBRL, error } = useCurrencyConverter(
  computed(() => props.totalWithTip),
  computed(() => props.selectedCurrency),
)

const valuePerPerson = computed(() => props.totalWithTip / props.peopleCount)
const convertedTotalBRLPerPerson = computed(() => convertToBRL.value / props.peopleCount)

const resultItems = computed(() => [
  {
    label: `Gorjeta (${props.selectedCurrency})`,
    value: props.tipAmount,
    currency: props.selectedCurrency,
  },
  {
    label: `Total com Gorjeta (${props.selectedCurrency})`,
    value: props.totalWithTip,
    currency: props.selectedCurrency,
  },
  {
    label: `Valor por Pessoa (${props.selectedCurrency})`,
    value: valuePerPerson.value,
    currency: props.selectedCurrency,
  },
  {
    label: 'Total em BRL por Pessoa (R$)',
    value: convertedTotalBRLPerPerson.value,
    currency: 'BRL',
  },
])
</script>

<style lang="scss">
.results-panel {
  background-color: #f9fafb;
  padding: 2rem;
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}
</style>
