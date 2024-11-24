<script setup lang="ts">
const { isCollapse } = useCollapse()
</script>

<template>
  <el-aside
    :width="isCollapse ? '64px' : '200px'"
    class="flex flex-col overflow-x-hidden shadow-[2px_0_8px_0_rgba(29,35,41,0.05)] transition-width duration-300 dark:shadow-[2px_0_8px_0_rgba(0,0,0,0.1)]"
  >
    <div
      class="h-16 flex-center flex-shrink-0 border-b border-b-[var(--es-border-color)] border-b-solid"
    >
      <h1
        class="h-full w-[calc(var(--es-menu-icon-width)+var(--es-menu-base-level-padding)*2)] flex flex-1 items-center px-[var(--es-menu-base-level-padding)] text-lg font-bold"
      >
        <img
          src="@/assets/logo.svg"
          alt="Logo"
          class="transition-[margin-right] size-[var(--es-menu-icon-width)] duration-300"
          :class="{ 'mr-[5px]': !isCollapse }"
          style="transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)"
        />

        <span
          class="transition-[opacity,width,transform] duration-300"
          :class="{ 'scale-0 opacity-0 w-0': isCollapse }"
          style="transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)"
        >
          Logo
        </span>
      </h1>
    </div>
    <el-scrollbar class="flex-1">
      <el-menu
        :collapse-transition="false"
        :collapse="isCollapse"
        :default-active="$route.path"
        class="sidebar-menu"
        router
      >
        <el-menu-item index="/" :route="{ path: '/' }">
          <el-icon><div class="i-lucide-home" /></el-icon>
          <span>Home</span>
        </el-menu-item>
        <el-menu-item index="/about" :route="{ path: '/about' }">
          <el-icon><div class="i-lucide-info" /></el-icon>
          <span>About</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<style scoped lang="scss">
.sidebar-menu {
  --es-menu-bg-color: transparent;
  --es-menu-hover-bg-color: var(--es-color-primary-light-9);
  --es-menu-active-bg-color: var(--es-color-primary-light-9);
  --es-menu-text-color: var(--es-text-color-primary);
  --es-menu-active-color: var(--es-color-primary);
  --es-menu-hover-text-color: var(--es-color-primary);
  border-right: none;

  :deep(.el-menu-item) {
    &.is-active {
      background-color: var(--es-menu-active-bg-color);
    }

    span {
      opacity: 1;
      transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &.el-menu--collapse {
    :deep(.el-menu-item) span {
      opacity: 0;
    }
  }
}

html.dark {
  .sidebar-menu {
    --es-menu-bg-color: transparent;
    --es-menu-hover-bg-color: var(--es-color-primary-light-3);
    --es-menu-active-bg-color: var(--es-color-primary-light-3);
    --es-menu-text-color: var(--es-text-color-regular);
    --es-menu-active-color: var(--es-color-white);
    --es-menu-hover-text-color: var(--es-color-white);

    :deep(.el-menu-item) {
      &.is-active {
        background-color: var(--es-menu-active-bg-color);
      }
    }
  }
}
</style>
