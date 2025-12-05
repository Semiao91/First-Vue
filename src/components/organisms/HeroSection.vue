<script setup lang="ts">
import { ref } from 'vue'
import CustomButton from '../atoms/CustomButton.vue'
import LandingHeadder from '../atoms/LandingHeadder.vue'
import LandingSubHeadder from '../atoms/LandingSubHeadder.vue'
import CustomModal from '../molecules/CustomModal.vue'

const isModalOpen = ref(false)

function openModal() {
  isModalOpen.value = true
}

function handleSpotifyLogin() {
  isModalOpen.value = false
  console.log('Spotify login initiated')
}
</script>

<template>
  <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-18">
    <div className="mx-auto max-w-3xl text-center">
      <LandingHeadder headding="Rate your music library, track your taste" tag="h1" />
      <LandingSubHeadder
        headding="Connect to Spotify, import your favorite artists and albums, and create a personalized rating catalog. Discover patterns in your musical journey."
        tag="h4"
      />
      <CustomButton @click="openModal" msg="Get Started with Spotify" />
    </div>
    <CustomModal
      :isOpen="isModalOpen"
      @update:isOpen="(value: boolean) => (isModalOpen = value)"
      @login="handleSpotifyLogin"
    />
  </section>
</template>
