<script setup lang="ts">
const lang = useLocaleStore()
const { x, y } = useMouse()

const mouseStyle = computed(() => ({
  '--mouse-x': `${x.value}px`,
  '--mouse-y': `${y.value}px`,
}))
</script>

<template>
  <el-config-provider :locale="lang.currentLocale" namespace="es">
    <div class="gradient-primary-600 gradient-bg" :style="mouseStyle" />
    <RouterView />
  </el-config-provider>
</template>

<style scoped></style>
