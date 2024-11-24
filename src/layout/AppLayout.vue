<script setup lang="ts">
import AppAside from './AppAside.vue'
import AppHeader from './AppHeader.vue'
</script>

<template>
  <el-container class="h-screen">
    <AppAside />
    <el-container class="flex-1 flex-col">
      <AppHeader />
      <el-scrollbar class="flex-1 p-4">
        <router-view v-slot="{ Component }">
          <transition
            enter-active-class="transition-all duration-500"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100"
            leave-active-class="transition-all duration-500"
            leave-from-class="opacity-100 "
            leave-to-class="opacity-0 -translate-y-2"
            mode="out-in"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>
