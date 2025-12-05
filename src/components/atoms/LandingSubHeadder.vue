<script setup lang="ts">
import { FwbHeading } from 'flowbite-vue'
defineProps<{
  headding: string
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}>()
</script>

<template>
  <fwb-heading
    class="text-lg sm:text-xl text-muted-foreground text-pretty mb-8 leading-relaxed"
    :tag="tag"
    >{{ headding }}</fwb-heading
  >
</template>
