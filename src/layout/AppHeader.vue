<script setup lang="ts">
const { isCollapse, toggleCollapse } = useCollapse()
const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <el-header
    class="flex flex-shrink-0 items-center justify-between border-b border-gray-200 dark:border-dark-300"
  >
    <div>
      <div
        class="cursor-pointer text-lg transition-colors hover:text-primary"
        @click="toggleCollapse"
      >
        <div v-if="!isCollapse" class="i-lucide-panel-left-close" />
        <div v-else class="i-lucide-panel-left-open" />
      </div>
    </div>
    <div class="flex items-center space-x-4">
      <div
        class="cursor-pointer text-lg transition-color duration-300 hover:text-primary"
        @click="toggleTheme"
      >
        <!-- <div
          class="i-lucide-sun dark:i-lucide-moon rotate-180 transition-transform duration-300 dark:rotate-0"
        /> -->
        <div v-if="isDark" class="i-lucide-sun" />
        <div v-else class="i-lucide-moon" />
      </div>

      <el-dropdown>
        <el-avatar :size="32" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Profile</el-dropdown-item>
            <el-dropdown-item>Settings</el-dropdown-item>
            <el-dropdown-item divided>Logout</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>
