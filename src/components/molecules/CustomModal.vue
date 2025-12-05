<script lang="ts" setup>
import { FwbButton, FwbModal } from 'flowbite-vue'
defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  login: []
  'update:isOpen': [value: boolean]
}>()

function closeModal() {
  emit('update:isOpen', false)
}
function handleSpotifyLogin() {
  emit('login')
}
</script>

<template>
  <fwb-modal v-if="isOpen" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg text-primary">Connect to Spotify</div>
    </template>
    <template #body>
      <p class="text-base leading-relaxed text-muted-foreground mb-4">
        Connect your Spotify account to import your favorite artists and albums.
      </p>
      <p class="text-sm text-muted-foreground">
        We'll only access your library data. We never store your password.
      </p>
    </template>
    <template #footer>
      <div class="flex justify-between w-full">
        <fwb-button @click="closeModal" color="alternative"> Cancel </fwb-button>
        <fwb-button @click="handleSpotifyLogin" class="bg-primary hover:bg-primary/90">
          Login with Spotify
        </fwb-button>
      </div>
    </template>
  </fwb-modal>
</template>
