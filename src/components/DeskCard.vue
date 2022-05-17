<script setup lang="ts">
import { useDeskStore } from "@/stores/desk";
import IconPlus from "./icons/IconPlus.vue";
interface Props {
  id: number;
  row: string;
  seq_num: number;
  text: string;
}

const props = defineProps<Props>();

const deskStore = useDeskStore();

function deleteBtnHandler() {
  deskStore.deleteCard(props);
}
</script>

<template>
  <div class="desk-card">
    <p class="desk-card__id">id: {{ props.id }}</p>
    <p class="desk-card__text">{{ props.text }}</p>
    <button class="desk-card__delete-btn" @click="deleteBtnHandler">
      <IconPlus />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.desk-card {
  position: relative;

  padding: 10px;

  background-color: #212325;

  &__id {
    margin: 0;
  }

  &__text {
    margin: 0;
  }

  &__delete-btn {
    position: absolute;
    top: 5px;
    right: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    margin: 0;
    padding: 0;

    color: #ffffff;

    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;

      transform: rotate(45deg);
    }
  }
}
</style>
