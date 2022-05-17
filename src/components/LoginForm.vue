<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import type { IUser } from "@/types/IUser";
import { reactive } from "vue";
import BaseInput from "./ui/BaseInput.vue";
import BaseBtn from "./ui/BaseBtn.vue";

const user: IUser = reactive({
  username: "whoasup",
  password: "Qwerty12345!",
});

const authStore = useAuthStore();

function submitHandler(): void {
  authStore.login(user);
}
</script>

<template>
  <div class="login-form">
    <form @submit.prevent="submitHandler">
      <BaseInput type="text" v-model="user.username" label="Username" />
      <BaseInput type="password" v-model="user.password" label="Password" />
      <BaseBtn type="submit" label="Login" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.login-form {
  form {
    display: grid;

    row-gap: 8px;
  }
}
</style>
