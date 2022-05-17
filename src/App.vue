<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { useAuthStore } from "./stores/auth";
import TheHeader from "./components/TheHeader.vue";
const authStore = useAuthStore();

onMounted(() => {
  authStore.checkAuth();
});
</script>

<template>
  <TheHeader />
  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<style lang="scss">
@import "@/styles/base.scss";
</style>
