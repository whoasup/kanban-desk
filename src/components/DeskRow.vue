<script setup lang="ts">
import type { ICard } from "@/types/ICard";
import type { RowNumber } from "@/types/RowNumber";

import { useDeskStore } from "@/stores/desk";
import { computed, ref } from "vue";
import DeskCard from "./DeskCard.vue";
import CardAddForm from "./CardAddForm.vue";
import draggable from "vuedraggable";
import IconPlus from "./icons/IconPlus.vue";

const headerColors = {
  0: "#ED9050",
  1: "#4390BD",
  2: "#EDC859",
  3: "#51A66C",
};

interface Props {
  title: string;
  number: RowNumber;
  cards: ICard[];
}

const props = defineProps<Props>();
const deskStore = useDeskStore();
const isAdding = ref<boolean>(false);

const cards = computed({
  get() {
    return props.cards;
  },
  set(newValue: ICard[]) {
    deskStore.setRowCards(props.number, newValue);
    newValue.forEach((card: ICard, index) => {
      const updatedCard: ICard = {
        ...card,
        seq_num: index,
        row: props.number,
      };
      deskStore.updateCard(updatedCard);
    });
  },
});
</script>

<template>
  <div class="desk-row">
    <h3 class="desk-row__title">{{ props.title }}({{ cards.length }})</h3>
    <div class="desk-row__wrapper">
      <draggable
        tag="ul"
        class="desk-row__list"
        v-model="cards"
        item-key="id"
        group="row"
      >
        <template #item="{ element }">
          <li class="desk-row__item">
            <DeskCard v-bind="element" />
          </li>
        </template>
      </draggable>

      <template v-if="isAdding">
        <CardAddForm :row="props.number" @done="isAdding = false" />
      </template>

      <template v-else>
        <button class="desk-row__btn" type="button" @click="isAdding = true">
          <IconPlus />
          Добавить карточку
        </button>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/global/variables.scss";
@import "@/styles/mixins";
.desk-row {
  &__title {
    margin: 0;
    padding: 10px;

    font-weight: 600;
    font-size: 20px;
    line-height: 110%;
    text-transform: uppercase;

    background-color: v-bind("headerColors[props.number]");

    @include vp--1023 {
      font-size: 16px;
    }
  }

  &__wrapper {
    background-color: var(--color-bg-secondary);
  }

  &__list {
    display: grid;
    margin: 0;
    padding: 0;
    padding: 10px;

    list-style: none;

    gap: 10px;
  }

  &__btn {
    display: grid;
    align-items: center;
    width: 100%;
    padding: 10px;

    color: var(--color-text);

    background-color: transparent;
    border: none;
    cursor: pointer;

    transition: background-color 500ms ease;

    grid-template-columns: 15px 1fr;

    @media (hover: hover), screen and (min-width: 0\0) {
      &:hover,
      &:focus {
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
  }
}
</style>
