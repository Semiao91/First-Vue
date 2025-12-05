<script setup lang="ts">
import CustomNavbar from '@/components/organisms/CustomNavbar.vue'
import Sidebar from '@/components/organisms/Sidebar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Sidebar />
  <div class="flex min-h-screen bg-background text-foreground">
    <div class="flex-1 flex flex-col ml-[280px]">
      <CustomNavbar />
      <main class="flex-1 p-6">
        <RouterView />
      </main>
    </div>
  </div>
</template>
