<script setup lang="ts">
import { FwbButton } from 'flowbite-vue'
defineProps<{
  msg: string
}>()
</script>

<template>
  <fwb-button class="bg-primary hover:bg-secondary hover:cursor-pointer">{{ msg }}</fwb-button>
</template>
