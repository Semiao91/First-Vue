<script setup lang="ts">
import { useToastStore } from '@/stores/useToastStore';
import { FwbToast } from 'flowbite-vue';
const toastStore = useToastStore()
</script>

<template>
  <div class="fixed top-4 right-4 z-50 space-y-2">
    <TransitionGroup enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-x-4 scale-95" enter-to-class="opacity-100 translate-x-0 scale-100"
      leave-active-class="transition-all duration-200 ease-in" leave-from-class="opacity-100 translate-x-0 scale-100"
      leave-to-class="opacity-0 translate-x-4 scale-95" move-class="transition-transform duration-300 ease-out"
      tag="div" class="space-y-2">
      <fwb-toast v-for="toast in toastStore.toasts" :key="toast.id" :type="toast.type" closable
        @close="toastStore.removeToast(toast.id)">
        {{ toast.message }}
      </fwb-toast>
    </TransitionGroup>
  </div>
</template>
