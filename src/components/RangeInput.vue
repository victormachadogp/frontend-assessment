<template>
  <div class="input-range">
    <label :for="inputId" class="input-range__label"> {{ label }} ({{ modelValue }}) </label>

    <div class="input-range__container">
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
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
  step: {
    type: Number,
    default: 1,
  },
})

const emit = defineEmits(['update:modelValue'])

const handleInput = (event) => {
  emit('update:modelValue', Number(event.target.value))
}
</script>

<style scoped>
.input-range {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-range__slider {
  width: 100%;
}

.input-range__value {
  font-weight: bold;
}
</style>
