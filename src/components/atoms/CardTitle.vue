<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <h3 class="text-xl font-semibold text-card-foreground mb-2">
    {{ title }}
  </h3>
</template>

<style scoped></style>
