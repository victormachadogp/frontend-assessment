<template>
  <div class="currency-input">
    <label class="currency-input__label"> {{ label }} </label>
    <div class="currency-input__wrapper">
      <div class="currency-input__currency-sign">
        <span>{{ currencySign }}</span>
      </div>
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', Number($event.target.value))"
        min="0"
        step="0.01"
        class="currency-input__field"
      />
      <div class="currency-input__currency-code">
        <span>{{ currency }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    default: 'Total da Conta',
  },
  currency: {
    type: String,
    default: 'USD',
  },
  currencySign: {
    type: String,
    default: '$',
  },
})

const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
.currency-input {
  margin-bottom: 1.5rem;
  padding: 0 2rem;

  &__label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  &__wrapper {
    position: relative;
    justify-self: flex-start;
  }

  &__currency-sign,
  &__currency-code {
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    bottom: 0;
    padding-left: 0.75rem;

    span {
      color: #6b7280;
      line-height: 1.25rem;
    }
  }

  &__currency-sign {
    left: 0;
  }

  &__currency-code {
    right: 0;
    padding-right: 0.75rem;
  }

  &__field {
    display: block;
    align-self: flex-start;
    width: 100%;
    padding: 0.42rem 3rem 0.42rem 1.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    line-height: 1.5;
    transition: border-color 0.15s ease-in-out;

    &:focus {
      outline: none;
      border-color: #820be0;
    }
  }
}
</style>
