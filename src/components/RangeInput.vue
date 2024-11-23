<template>
  <div class="input-range">
    <label :for="id" class="input-range__label">{{ label }}</label>
    <input
      type="range"
      :id="id"
      :min="min"
      :max="max"
      :value="value"
      @input="$emit('update', +$event.target.value)"
    />
    <span class="input-range__value">{{ value }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: {
    type: Number,
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
  id: String,
})

defineEmits(['update'])
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
