<script setup lang="ts">
import CustomLogo from '@/components/atoms/CustomLogo.vue'
import { FwbSidebar, FwbSidebarItem } from 'flowbite-vue'
import { Clock, Disc, Heart, Home, Music } from 'lucide-vue-next'
import { useRoute } from 'vue-router'
const route = useRoute()

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Album Reviews', href: '/dashboard/albums', icon: Disc },
  { name: 'Songs', href: '/dashboard/songs', icon: Music },
]

const collections = [
  { name: 'Liked Albums', href: '/dashboard/liked', icon: Heart },
  { name: 'Recently Rated', href: '/dashboard/recent', icon: Clock },
]
</script>

<template>
  <div class="w-[280px] fixed left-0 top-0 h-full z-10">
    <fwb-sidebar class="bg-transparent! w-full h-full">
      <div class="flex items-center gap-2 mb-10">
        <CustomLogo />
        <span class="text-2xl font-bold text-foreground">RateBox</span>
      </div>
      <div class="px-3 mb-3">
        <h2 class="text-xs font-semibold uppercase tracking-wider text-gray-400">Navigation</h2>
      </div>
      <div class="border-b border-gray-700 mb-4 pb-4" style="border-color: #292929">
        <fwb-sidebar-item
          v-for="item in navigation"
          :key="item.name"
          :link="item.href"
          class="text-gray-300! hover:bg-gray-800! hover:text-white! transition-colors duration-200 rounded-md! mx-2! mb-1!"
          :class="{
            'bg-green-800! text-green-100!': route.path === item.href,
          }"
          :style="{
            backgroundColor: route.path === item.href ? '#006239' : 'transparent',
            color: route.path === item.href ? '#dde8e3' : '#e2e8f0',
          }"
        >
          <template #icon>
            <component
              :is="item.icon"
              class="h-5 w-5"
              :style="{
                color: route.path === item.href ? '#dde8e3' : '#898989',
              }"
            />
          </template>
          <template #default>{{ item.name }}</template>
        </fwb-sidebar-item>
      </div>
      <div class="px-3 mb-3">
        <h2 class="text-xs font-semibold uppercase tracking-wider text-gray-400">
          Your Collections
        </h2>
      </div>
      <fwb-sidebar-item
        v-for="item in collections"
        :key="item.name"
        :link="item.href"
        class="!text-gray-300 hover:!bg-gray-800 hover:!text-white transition-colors duration-200 !rounded-md !mx-2 !mb-1"
        :class="{
          '!bg-green-800 !text-green-100': route.path === item.href,
        }"
        :style="{
          backgroundColor: route.path === item.href ? '#006239' : 'transparent',
          color: route.path === item.href ? '#dde8e3' : '#e2e8f0',
        }"
      >
        <template #icon>
          <component
            :is="item.icon"
            class="h-5 w-5"
            :style="{
              color: route.path === item.href ? '#dde8e3' : '#898989',
            }"
          />
        </template>
        <template #default>{{ item.name }}</template>
      </fwb-sidebar-item>
    </fwb-sidebar>
  </div>
</template>

<style scoped>
:deep(.fwb-sidebar) {
  background-color: var(--background) !important;
}

:deep(.fwb-sidebar > div) {
  background-color: var(--background) !important;
}

:deep(.bg-gray-50) {
  background-color: var(--background) !important;
}

:deep(.dark\:bg-gray-800) {
  background-color: var(--background) !important;
}
</style>
