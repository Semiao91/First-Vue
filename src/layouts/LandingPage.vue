<script setup lang="ts">
import CustomNavbar from '@/components/organisms/CustomNavbar.vue'
import LandingFooter from '@/components/organisms/LandingFooter.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-background text-foreground">
    <CustomNavbar />

    <main class="grow">
      <RouterView />
    </main>

    <LandingFooter />
  </div>
</template>
