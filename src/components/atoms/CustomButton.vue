<script setup lang="ts">
import { FwbButton } from 'flowbite-vue'
defineProps<{
  msg: string
  onClick: () => void
}>()
</script>

<template>
  <fwb-button
    class="bg-primary text-base sm:text-lg px-8 hover:bg-secondary hover:cursor-pointer"
    @click="onClick"
    >{{ msg }}</fwb-button
  >
</template>
