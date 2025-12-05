<script setup lang="ts">
import { RouterView } from 'vue-router'
import CustomCard from './components/molecules/CustomCard.vue'
</script>

<template>
  <div class="bg-background min-h-screen">
    <header>
      <div class="wrapper">
        <CustomCard title="Title" subtitle="Subtitle" msg="Oh!" />
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped></style>
