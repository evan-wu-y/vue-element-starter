const isDark = useDark()
const toggleDark = useToggle(isDark)

export const useTheme = () => {
  const toggleTheme = (event: MouseEvent) => {
    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (!document.startViewTransition) {
      return toggleDark()
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const transition = document.startViewTransition(async () => {
      return toggleDark()
    })

    transition.ready.then(() => {
      const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
      document.documentElement.animate(
        {
          clipPath: isDark.value ? [...clipPath.reverse()] : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-in',
          pseudoElement: isDark.value
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        },
      )
    })
  }

  return {
    isDark,
    toggleTheme,
  }
}
