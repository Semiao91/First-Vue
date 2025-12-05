<script setup lang="ts">
import { FwbHeading } from 'flowbite-vue'
defineProps<{
  headding: string
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}>()
</script>

<template>
  <fwb-heading
    class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center text-foreground text-balance mb-6"
    :tag="tag"
    >{{ headding }}</fwb-heading
  >
</template>
