<script setup lang="ts">
interface Props {
  type: "button" | "submit" | "reset" | undefined;
  label: string;
}

const props = defineProps<Props>();
</script>

<template>
  <button class="base-btn" :type="props.type">{{ props.label }}</button>
</template>

<style lang="scss" scoped>
.base-btn {
  display: flex;
  justify-content: center;
  padding: 20px;

  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: var(--color-text);

  background-color: var(--color-bg-secondary);
  border: none;
  border-radius: 10px;
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
</style>
