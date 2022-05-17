<script setup lang="ts">
import { useBreakpoints } from "@/composables/useBreakpoints";
import { watch, ref } from "vue";
import { RouterLink } from "vue-router";
import IconBurger from "./icons/IconBurger.vue";

const { isDesktop } = useBreakpoints();
const isMenuOpen = ref<boolean>(true);

watch(isDesktop, () => {
  if (isDesktop) {
    isMenuOpen.value = true;
  }
});
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <nav class="header__nav" v-if="isMenuOpen">
          <RouterLink to="/">Desk</RouterLink>
          <RouterLink to="/login">Login</RouterLink>
          <RouterLink to="/register">Register</RouterLink>
        </nav>
        <button
          @click="isMenuOpen = !isMenuOpen"
          v-if="!isDesktop"
          class="header__menu-btn"
        >
          <IconBurger />
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/styles/global/variables.scss";
@import "@/styles/mixins";
.header {
  padding: 8px 0;

  &__wrapper {
    position: relative;

    min-height: 48px;
  }

  &__nav {
    display: flex;

    gap: 8px;
    @include vp--1023 {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1000;

      flex-direction: column;
      padding: 10px;

      background-color: var(--color-bg-secondary);

      widows: 100px;
    }
  }

  a {
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;

    opacity: 1;

    transition: opacity 300ms ease;

    @media (hover: hover), screen and (min-width: 0\0) {
      &:hover,
      &:focus {
        opacity: 0.7;
      }
    }

    &.router-link-active {
      opacity: 0.5;

      pointer-events: none;
    }
  }

  &__menu-btn {
    position: absolute;
    top: 0;
    right: 0;

    width: 48px;
    height: 48px;
    padding: 0;

    color: var(--color-text);

    background-color: transparent;
    border: none;
    cursor: pointer;
    opacity: 1;

    transition: opacity 300ms ease;

    @media (hover: hover), screen and (min-width: 0\0) {
      &:hover,
      &:focus {
        opacity: 0.7;
      }
    }
  }
}
</style>
