<script setup lang="ts">
defineProps<{
  subtitle: string
}>()
</script>

<template>
  <p class="text-muted-foreground mb-3 font-normal">
    {{ subtitle }}
  </p>
</template>

<style scoped></style>
