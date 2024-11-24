<script setup lang="ts">
import { type ImageKey, images } from '@/data/images'

const route = useRoute()
const router = useRouter()

const id = route.params.id as ImageKey
const image = images[id]

if (!image) {
  router.push('/about')
}

// 如果是从 about 页面进入，则返回 about 页面
onMounted(() => {
  if (route.matched.length > 2) {
    router.push('/about')
  }
})
</script>

<template>
  <h1 class="mb-6 text-2xl font-bold">Image Detail</h1>
  <div v-if="image" class="p-4">
    <el-button class="mb-4" @click="router.push('/about')">
      <div class="i-lucide-arrow-left mr-2" />
      Back to Gallery
    </el-button>
    <div class="overflow-hidden rounded-lg">
      <img :src="image.url" :alt="image.title" class="w-full" />
    </div>
    <div class="mt-4">
      <h1 class="text-2xl font-bold">{{ image.title }}</h1>
      <p class="mt-2 text-gray-600 dark:text-gray-400">{{ image.description }}</p>
    </div>
  </div>
</template>
