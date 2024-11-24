<script setup lang="ts">
import { images } from '@/data/images'

const imageEntries = Object.entries(images)
</script>

<template>
  <div class="p-4">
    <h1 class="mb-6 text-2xl font-bold">Nature Gallery</h1>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
      <router-link
        v-for="[key, image] in imageEntries"
        :key="key"
        class="group relative cursor-pointer overflow-hidden rounded-lg"
        :to="`/about/${key}`"
      >
        <div class="h-64 w-full">
          <img
            :src="image.url"
            :alt="image.title"
            loading="lazy"
            class="h-full w-full object-cover transition-transform duration-300 will-change-transform group-hover:scale-110"
          />
        </div>
        <div
          class="absolute inset-0 flex flex-col justify-end from-black/60 to-transparent bg-gradient-to-t p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <h3 class="text-lg font-semibold">{{ image.title }}</h3>
          <p class="text-sm">{{ image.description }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
