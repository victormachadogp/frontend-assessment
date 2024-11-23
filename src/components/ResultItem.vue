<template>
  <div class="result-item">
    <span>{{ label }}:</span>
    <strong>{{ formattedValue }}</strong>
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
