<template>
  <div class="currency-selector">
    <label>
      Moeda:
      <select
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
        class="currency-selector__select"
      >
        <option v-for="currency in currencies" :key="currency.value" :value="currency.value">
          {{ currency.label }}
        </option>
      </select>
    </label>
  </div>
</template>

<script setup>
const currencies = [
  { value: 'USD', label: 'USD ($)' },
  { value: 'EUR', label: 'EUR (€)' },
]

defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

defineEmits(['update:modelValue'])
</script>

<style></style>
