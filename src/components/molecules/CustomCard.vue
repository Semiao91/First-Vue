<script setup lang="ts">
import type { Component } from 'vue'
import CardSubtitle from '../atoms/CardSubtitle.vue'
import CardTitle from '../atoms/CardTitle.vue'

defineProps<{
  icon: Component
  title: string
  subtitle: string
}>()
</script>

<template>
  <div
    class="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
  >
    <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
      <component :is="icon" class="h-6 w-6 text-primary" />
    </div>
    <CardTitle :title="title" />
    <CardSubtitle :subtitle="subtitle" />
  </div>
</template>
