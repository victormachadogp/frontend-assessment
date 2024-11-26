<template>
  <button class="float-button" @click="$emit('toggle')" :aria-label="ariaLabel">
    <template v-if="isShowingResults">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="float-button__icon"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </template>
    <template v-else>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="float-button__icon"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </template>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  isShowingResults: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['toggle'])

const ariaLabel = computed(() =>
  props.isShowingResults ? 'Voltar para calculadora' : 'Ver resultados',
)
</script>

<style lang="scss">
@use 'sass:color';

$primary-color: #820be0;
$hover-color: color.adjust($primary-color, $lightness: -10%);
$border-radius: 50%;
$transition-speed: 0.3s;

.float-button {
  align-items: center;
  position: fixed;
  background-color: $primary-color;
  color: white;
  border: 1px solid $primary-color;
  border-radius: $border-radius;
  padding: 1rem;
  cursor: pointer;
  bottom: 1.25rem;
  right: 1.25rem;
  z-index: 1000;
  transition: background-color $transition-speed ease;

  &:hover {
    background-color: $hover-color;
  }

  &__icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 768px) {
    display: flex;
    margin: 1rem 0;
  }
}
</style>
