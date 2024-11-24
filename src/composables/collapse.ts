const isCollapse = ref(false)

export const useCollapse = () => {
  const toggleCollapse = () => {
    isCollapse.value = !isCollapse.value
  }

  return {
    isCollapse,
    toggleCollapse,
  }
}
