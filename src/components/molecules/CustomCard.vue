<script setup lang="ts">
import { FwbCard } from 'flowbite-vue'
import CardSubtitle from '../atoms/CardSubtitle.vue'
import CardTitle from '../atoms/CardTitle.vue'
import CustomButton from '../atoms/CustomButton.vue'

defineProps<{
  msg: string
  title: string
  subtitle: string
}>()
</script>

<template>
  <fwb-card href="#" class="w-sm p-5 rounded-xl bg-card border-none">
    <CardTitle :title="title" />
    <CardSubtitle :subtitle="subtitle" />
    <CustomButton :msg="msg" />
  </fwb-card>
</template>

<style scoped></style>
