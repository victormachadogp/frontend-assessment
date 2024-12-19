<template>
  <div class="heading">
    <span class="heading__title"><slot></slot></span>
  </div>
</template>

<script setup></script>

<style lang="scss">
.heading {
  background-color: #f9fafb;
  padding: 0.75rem 2rem;
  border-bottom: 1px solid #cccccc82;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;

  &__title {
    font-size: 1.1rem;
    font-weight: 600;
  }
}
</style>
