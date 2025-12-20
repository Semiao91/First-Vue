<script setup lang="ts">
import avatar from '@/assets/avatar.png'
import { useModal } from '@/composables/modal'
import { FwbAvatar } from 'flowbite-vue'
import { useRoute } from 'vue-router'
import CustomButton from '../atoms/CustomButton.vue'
import CustomLogo from '../atoms/CustomLogo.vue'
import SearchBar from '../atoms/SearchBar.vue'
const { openModal } = useModal()
const route = useRoute()
</script>

<template>
  <header class="border-border">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="route.path !== '/dashboard'" class="flex h-16 items-center justify-between">
        <div class="flex items-center gap-2">
          <CustomLogo />
          <span class="text-xl font-bold text-foreground">RateBox</span>
        </div>
        <CustomButton @click="openModal" msg="Login" />
      </div>
      <div v-else class="flex h-16 items-center justify-between">
        <SearchBar />
        <fwb-avatar :img="avatar" rounded bordered status-position="bottom-right" status="online" />
      </div>
    </div>
  </header>
</template>
