<script setup lang="ts">
import type { Component } from 'vue';

defineProps<{
  label: string
  value: string
  change: string
  icon: Component
}>()
</script>

<template>
  <div
    class="p-6 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200">
    <div class="flex items-start justify-between">
      <div class="space-y-1">
        <p class="text-sm text-gray-500 dark:text-gray-400">{{ label }}</p>
        <p class="text-3xl font-bold text-gray-900 dark:text-white">{{ value }}</p>
        <p class="text-xs text-gray-500 dark:text-gray-400">{{ change }}</p>
      </div>
      <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <component :is="icon" class="w-5 h-5 text-primary" />
      </div>
    </div>
  </div>
</template>
