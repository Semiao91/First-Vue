<script setup lang="ts">
import CustomCard from '@/components/molecules/CustomCard.vue'
import { BarChart3, Library, Star } from 'lucide-vue-next'
import type { Component } from 'vue'

const cards: Array<{
  icon: Component
  title: string
  subtitle: string
}> = [
  {
    icon: Library,
    title: 'Import Your Library',
    subtitle: 'Seamlessly sync your liked artists and albums from Spotify in seconds',
  },
  {
    icon: Star,
    title: 'Rate Everything',
    subtitle: 'Add personal ratings and notes to every artist and album you love',
  },
  {
    icon: BarChart3,
    title: 'Track Your Taste',
    subtitle: 'Visualize your ratings with a beautiful dashboard and discover trends',
  },
]
</script>

<template>
  <section class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
    <div class="grid gap-8 md:grid-cols-3">
      <CustomCard
        v-for="card in cards"
        :key="card.title"
        :icon="card.icon"
        :title="card.title"
        :subtitle="card.subtitle"
      />
    </div>
  </section>
</template>
