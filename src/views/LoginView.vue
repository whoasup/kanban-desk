<script setup lang="ts">
import LoginForm from "../components/LoginForm.vue";
</script>

<template>
  <div class="login-view">
    <h2 class="login-view__title">Please log-in to continue</h2>
    <LoginForm />
  </div>
</template>

<style lang="scss" scoped>
.login-view {
  &__title {
    margin: 0 0 16px;

    font-weight: 600;
    font-size: 20px;
    line-height: 110%;
    text-align: center;
  }
}
</style>
