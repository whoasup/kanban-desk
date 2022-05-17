<script setup lang="ts">
import { useDeskStore } from "@/stores/desk";
import { onMounted, ref } from "vue";
import IconPlus from "./icons/IconPlus.vue";

interface Props {
  row: string;
}

interface Emits {
  (e: "done"): void;
}

const props = defineProps<Props>();

const emit = defineEmits<Emits>();

const deskStore = useDeskStore();

const cardText = ref<string>("");
const textarea = ref();

onMounted(() => {
  textarea.value.focus();
});

function addBtnHandler() {
  deskStore.createCard(props.row, cardText.value);

  emit("done");
}
</script>

<template>
  <div class="add-form">
    <textarea
      ref="textarea"
      v-model="cardText"
      name=""
      id=""
      cols="30"
      rows="6"
      placeholder="Ввести заголовок для новой карточки"
    ></textarea>

    <div class="add-form__footer">
      <button class="add-form__add-btn" type="button" @click="addBtnHandler">
        Добавить карточку
      </button>
      <button
        class="add-form__cancel-btn"
        aria-label="отменить добавление карточки"
        type="button"
        @click="$emit('done')"
      >
        <IconPlus />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.add-form {
  max-width: 100%;
  &__footer {
    display: flex;
  }

  &__add-btn {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;

    color: var(--color-text);

    background-color: transparent;
    border: none;
    cursor: pointer;

    opacity: 1;
    transition: 300ms ease;

    @media (hover: hover), screen and (min-width: 0\0) {
      &:hover,
      &:focus {
        opacity: 0.7;
      }
    }
  }

  &__cancel-btn {
    padding: 0;

    color: var(--color-text);

    background-color: transparent;
    border: none;
    cursor: pointer;
    opacity: 1;
    transition: 300ms ease;

    @media (hover: hover), screen and (min-width: 0\0) {
      &:hover,
      &:focus {
        opacity: 0.7;
      }
    }

    svg {
      width: 15px;
      height: 15px;
      margin-right: 5px;

      transform: rotate(45deg);
    }
  }

  textarea {
    width: 100%;
    padding: 10px;

    color: var(--color-text);

    background-color: rgba(255, 255, 255, 0.2);
    border: none;
    outline: none;

    &::placeholder {
      color: inherit;
      max-width: 100%;
    }
  }
}
</style>
