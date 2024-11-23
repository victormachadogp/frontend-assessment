<template>
  <div class="currency-selector">
    <label>
      Moeda:
      <select
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="currency-selector__select"
      >
        <option value="USD">USD ($)</option>
        <option value="EUR">EUR (€)</option>
      </select>
    </label>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

defineEmits(['update:modelValue'])
</script>

<style></style>
