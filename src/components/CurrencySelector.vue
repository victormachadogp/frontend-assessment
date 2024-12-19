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
    flex-direction: column;
    gap: 0.5rem;
    font-weight: 500;
    padding: 2rem 2rem 0 2rem;
    margin-bottom: 1.5rem;
  }

  &__toggle {
    display: inline-flex;
    background-color: #f1f5f9;
    padding: 0.125rem;
    border-radius: 0.5rem;
    align-self: flex-start;
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
        background-color: rgb(230 230 230 / 28%);
      }
    }

    &--active {
      background-color: #fff;
      box-shadow:
        0 1px 3px 0 rgb(0 0 0 / 0.1),
        0 1px 2px -1px rgb(0 0 0 / 0.1);
    }
  }
}
</style>
