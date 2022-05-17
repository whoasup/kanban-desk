<script setup lang="ts">
import { computed } from "vue";

interface Props {
  modelValue: string | undefined;
  type: string;
  label: string;
  name?: string;
  required?: boolean;
}

interface Emits {
  (e: "update:modelValue", value: string | undefined): void;
}

const props = defineProps<Props>();

const emit = defineEmits<Emits>();

const value = computed<string | undefined>({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <label class="base-input">
    <input
      :name="props.name"
      :type="props.type"
      :required="props.required"
      placeholder=" "
      v-model="value"
    />
    <span class="base-input__label">{{ props.label }}</span>
  </label>
</template>

<style lang="scss" scoped>
.base-input {
  position: relative;

  &__label {
    position: absolute;
    top: 20px;
    left: 20px;

    display: block;
    max-width: calc(100% - 40px);
    overflow: hidden;

    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: var(--color-text);
    white-space: nowrap;
    text-overflow: ellipsis;

    transform-origin: left top;

    transition: transform 300ms ease;

    pointer-events: none;
  }

  input {
    width: 100%;
    padding: 20px;

    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: var(--color-text);
    text-overflow: ellipsis;

    background-color: var(--color-bg-secondary);
    border: none;
    border-radius: 10px;
    outline: none;
  }

  input::placeholder {
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
    color: inherit;
    text-overflow: ellipsis;

    opacity: 0;
  }

  input:focus,
  input:not(:placeholder-shown) {
    & ~ .base-input__label {
      transform: translateY(-12px) scale(0.7);
    }
  }
}
</style>
