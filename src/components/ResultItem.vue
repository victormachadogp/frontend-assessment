<template>
  <div class="result-item">
    <span class="result-item__label">{{ label }}</span>
    <strong class="result-item__value">{{ formattedValue }}</strong>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: [Number, String],
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
})

const formattedValue = computed(() => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: props.currency,
  }).format(props.value)
})
</script>

<style lang="scss">
.result-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  &:last-of-type {
    border-top: 1px solid #ccc;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
  }
}
</style>
