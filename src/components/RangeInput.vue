<template>
  <div class="input-range">
    <label class="input-range__label">
      {{ label }}
      <span v-if="formatType === 'percentage'">({{ modelValue }}%)</span>
      <span v-else-if="formatType === 'number'">({{ modelValue }})</span>
    </label>

    <div class="input-range__container">
      <input
        type="range"
        :min="min"
        :max="max"
        :value="modelValue"
        @input="handleInput"
        class="input-range__slider"
      />

      <div class="input-range__values">
        <span class="input-range__min">{{ min }}</span>
        <span class="input-range__max">{{ max }}</span>
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
    required: true,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  formatType: {
    type: String,
    default: 'number', // 'number' | 'percentage'
    validator: (value) => ['number', 'percentage'].includes(value),
  },
})

const emit = defineEmits(['update:modelValue'])

const handleInput = (event) => {
  emit('update:modelValue', Number(event.target.value))
}
</script>

<style lang="scss" scoped>
@use 'sass:color';

.input-range {
  $primary-color: #820be0;
  $secondary-color: #f1f1f1;
  $track-color: #ddd;

  margin: 1.5rem 2rem;

  &__label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333;

    span {
      font-weight: 500;
      color: #333;
    }
  }

  &__container {
    position: relative;
  }

  &__slider {
    width: 100%;
    height: 6px;
    -webkit-appearance: none;
    appearance: none;
    background: $track-color;
    outline: none;
    border-radius: 3px;

    margin: 1rem 0;

    &::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      color: #13bba4;
      margin-top: -1px;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      background: $primary-color;
      border-radius: 50%;
      cursor: pointer;
      transition: background-color 0.2s ease;

      &:hover {
        background: color.adjust($primary-color, $lightness: -10%);
      }

      &:active {
        transform: scale(1.1);
      }
    }

    &::-moz-range-thumb {
      width: 20px;
      height: 20px;
      background: $primary-color;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      transition: background-color 0.2s ease;

      &:hover {
        background: color.adjust($primary-color, $lightness: -10%);
      }

      &:active {
        transform: scale(1.1);
      }
    }
  }

  &__values {
    display: flex;
    justify-content: space-between;
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: #666;
  }

  &__min,
  &__max {
    position: relative;
    top: -0.5rem;
  }

  @media (max-width: 768px) {
    &__slider {
      height: 8px;

      &::-webkit-slider-thumb {
        width: 24px;
        height: 24px;
      }

      &::-moz-range-thumb {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>
