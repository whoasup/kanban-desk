<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import type { IUser } from "@/types/IUser";
import { reactive } from "vue";
import BaseBtn from "./ui/BaseBtn.vue";
import BaseInput from "./ui/BaseInput.vue";

const user: IUser = reactive({
  username: "",
  password: "",
  email: "",
});

const authStore = useAuthStore();

function submitHandler(): void {
  authStore.createUser(user);
}
</script>

<template>
  <div class="register-form">
    <form @submit.prevent="submitHandler">
      <BaseInput type="text" v-model="user.username" label="Username" />
      <BaseInput type="email" v-model="user.email" label="Email" />
      <BaseInput type="password" v-model="user.password" label="Password" />
      <BaseBtn type="submit" label="Login" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.register-form {
  form {
    display: grid;

    row-gap: 8px;
  }
}
</style>
