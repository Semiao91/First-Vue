<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-primary-foreground">
    {{ title }}
  </h5>
</template>

<style scoped></style>
