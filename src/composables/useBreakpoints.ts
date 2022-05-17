import { onMounted, onUnmounted, ref } from "vue";

export function useBreakpoints() {
  const breakpointDesktop = window.matchMedia("screen and (min-width: 1024px)");

  const isDesktop = ref<boolean>(breakpointDesktop.matches);

  const breakpointChecker = () => {
    isDesktop.value = breakpointDesktop.matches;
  };

  onMounted(() => {
    breakpointDesktop.addListener(breakpointChecker);
  });

  onUnmounted(() => {
    breakpointDesktop.removeListener(breakpointChecker);
  });

  return {
    isDesktop,
  };
}
