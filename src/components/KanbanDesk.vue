<script setup lang="ts">
import { useDeskStore } from "@/stores/desk";
import { onMounted, computed, watch } from "vue";
import DeskRow from "./DeskRow.vue";

const deskStore = useDeskStore();
const deskRows = computed(() => deskStore.rows);

onMounted(() => {
  const lsRows = localStorage.getItem("rows");
  if (lsRows) {
    deskStore.rows = JSON.parse(lsRows);
  }
  deskStore.getCards();
});

watch(
  deskStore,
  (store) => {
    localStorage.setItem("rows", JSON.stringify(store.rows));
  },
  { deep: true }
);
</script>
<template>
  <ul class="kanban-desk">
    <li class="kanban-desk__row" v-for="row in deskRows" :key="row.number">
      <DeskRow v-bind="row" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "@/styles/global/variables.scss";
@import "@/styles/mixins";
.kanban-desk {
  padding: 16px 0;
  left: 0;

  display: flex;
  margin: 0;

  list-style: none;
  gap: 16px;

  @include vp--1023 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @include vp--767 {
    display: grid;
    grid-template-columns: initial;
  }

  &__row {
    flex-grow: 1;
    flex-shrink: 0;
  }
}
</style>
