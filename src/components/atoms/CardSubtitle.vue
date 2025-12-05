<script setup lang="ts">
defineProps<{
  subtitle: string
}>()
</script>

<template>
  <p class="text-muted-foreground leading-relaxed">
    {{ subtitle }}
  </p>
</template>

<style scoped></style>
