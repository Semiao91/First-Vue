<script setup lang="ts">
import DashboardStatsCard from '@/components/molecules/DashboardStatsCard.vue'
import { Album, Music, Star, TrendingUp } from 'lucide-vue-next'
import type { Component } from 'vue'

const stats: Array<{
  label: string
  value: string
  change: string
  icon: Component
}> = [
    {
      label: "Total Albums",
      value: "124",
      icon: Album,
      change: "+12 this month",
    },
    {
      label: "Reviewed",
      value: "87",
      icon: Star,
      change: "70% complete",
    },
    {
      label: "Average Score",
      value: "7.8",
      icon: TrendingUp,
      change: "+0.3 this month",
    },
    {
      label: "Total Tracks",
      value: "1,547",
      icon: Music,
      change: "Across all albums",
    },
  ]
</script>

<template>
  <section class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <DashboardStatsCard v-for="stat in stats" :key="stat.label" :label="stat.label" :value="stat.value"
        :change="stat.change" :icon="stat.icon" />
    </div>
  </section>
</template>
