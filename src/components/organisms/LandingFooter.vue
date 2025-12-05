<script setup lang="ts">
import { Music2 } from 'lucide-vue-next'
</script>

<template>
  <footer class="border-t border-border py-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2">
          <Music2 class="h-5 w-5 text-muted-foreground" />
          <span class="text-sm text-muted-foreground">RateBox</span>
        </div>
        <p class="text-sm text-muted-foreground">© 2025 RateBox. Not affiliated with Spotify.</p>
      </div>
    </div>
  </footer>
</template>
