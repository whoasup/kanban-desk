<script setup lang="ts">
import RegisterForm from "../components/RegisterForm.vue";
</script>

<template>
  <div class="register-view">
    <h2 class="register-view__title">Create new user</h2>
    <RegisterForm />
  </div>
</template>

<style lang="scss" scoped>
.register-view {
  &__title {
    margin: 0 0 16px;

    font-weight: 600;
    font-size: 20px;
    line-height: 110%;
    text-align: center;
  }
}
</style>
