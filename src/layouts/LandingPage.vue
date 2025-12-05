<script setup lang="ts">
import DarkVeil from '@/components/atoms/DarkVeil.vue'
import CustomModal from '@/components/molecules/CustomModal.vue'
import CustomNavbar from '@/components/organisms/CustomNavbar.vue'
import LandingFooter from '@/components/organisms/LandingFooter.vue'
import { useModal } from '@/composables/modal'
import { RouterView } from 'vue-router'

const { isModalOpen, handleSpotifyLogin } = useModal()
</script>

<template>
  <div class="flex flex-col min-h-screen bg-background text-foreground relative">
    <div class="fixed inset-0 z-0">
      <DarkVeil
        :hue-shift="71"
        :noise-intensity="0"
        :scanline-intensity="0.1"
        :speed="1"
        :scanline-frequency="0"
        :warp-amount="0.02"
        :resolution-scale="1"
      />
    </div>

    <div class="relative z-10 flex flex-col min-h-screen">
      <CustomNavbar />
      <main class="grow">
        <RouterView />
      </main>
      <LandingFooter />
    </div>

    <CustomModal
      :isOpen="isModalOpen"
      @update:isOpen="(value: boolean) => (isModalOpen = value)"
      @login="handleSpotifyLogin"
    />
  </div>
</template>
