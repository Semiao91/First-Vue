<script setup lang="ts">
import CustomModal from '@/components/molecules/CustomModal.vue'
import CustomNavbar from '@/components/organisms/CustomNavbar.vue'
import LandingFooter from '@/components/organisms/LandingFooter.vue'
import { useModal } from '@/composables/modal'
import { RouterView } from 'vue-router'
const { isModalOpen, handleSpotifyLogin } = useModal()
</script>

<template>
  <div class="flex flex-col min-h-screen bg-background text-foreground">
    <CustomNavbar />

    <main class="grow">
      <RouterView />
    </main>

    <LandingFooter />
    <CustomModal
      :isOpen="isModalOpen"
      @update:isOpen="(value: boolean) => (isModalOpen = value)"
      @login="handleSpotifyLogin"
    />
  </div>
</template>
