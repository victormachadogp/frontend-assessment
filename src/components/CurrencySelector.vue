<template>
  <div class="currency-selector">
    <label class="currency-selector__label">
      Moeda:
      <div class="currency-selector__toggle">
        <button
          v-for="currency in currencies"
          :key="currency.value"
          class="currency-selector__toggle-button"
          :class="{ 'currency-selector__toggle-button--active': modelValue === currency.value }"
          @click="$emit('update:modelValue', currency.value)"
        >
          {{ currency.label }}
        </button>
      </div>
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

<style lang="scss">
.currency-selector {
  &__label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__toggle {
    display: inline-flex;
    background-color: #f0f0f0;
    padding: 0.25rem;
    border-radius: 0.5rem;
  }

  &__toggle-button {
    border: none;
    background: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:not(&--active) {
      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }

    &--active {
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
