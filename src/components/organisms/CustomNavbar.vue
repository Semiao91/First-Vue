<script setup lang="ts">
import { Music2 } from 'lucide-vue-next'
import CustomButton from '../atoms/CustomButton.vue'

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  login: []
  'update:isOpen': [value: boolean]
}>()

function handleSpotifyLogin() {
  emit('login')
}
</script>

<template>
  <header class="border-b border-border">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center gap-2">
          <Music2 class="h-6 w-6 text-primary" />
          <span class="text-xl font-bold text-foreground">RateBox</span>
        </div>
        <CustomButton @click="handleSpotifyLogin" msg="Login with Spotify" />
      </div>
      <CustomModal
        :isOpen="isOpen"
        @update:isOpen="(value: boolean) => emit('update:isOpen', value)"
        @login="handleSpotifyLogin"
      />
    </div>
  </header>
</template>
