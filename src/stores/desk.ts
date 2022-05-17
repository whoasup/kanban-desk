import type { RowNumber } from "./../types/RowNumber";
import type { IRow } from "./../types/IRow";
import type { ICard } from "./../types/ICard";
import CardsService from "@/services/CardsService";
import { defineStore } from "pinia";

interface IState {
  rows: IRow[];
}

export const useDeskStore = defineStore({
  id: "desk",
  state: (): IState => ({
    rows: [
      {
        title: "On-hold",
        number: "0",
        cards: [] as ICard[],
      },
      {
        title: "In-progress",
        number: "1",
        cards: [] as ICard[],
      },
      {
        title: "Needs-Review",
        number: "2",
        cards: [] as ICard[],
      },
      {
        title: "Approved",
        number: "3",
        cards: [] as ICard[],
      },
    ],
  }),
  getters: {},
  actions: {
    async getCards() {
      this.rows.forEach((row) => {
        this.getRow(row.number);
      });
    },

    async getRow(num: RowNumber) {
      try {
        const res = await CardsService.getCardsInRow(num);
        this.rows[num].cards = res.data;
      } catch (e) {
        console.log(e);
      }
    },

    async createCard(row: string, text: string) {
      try {
        await CardsService.createCard(row, text);
        this.getCards();
      } catch (e) {
        console.log(e);
      }
    },

    async updateCard(card: ICard) {
      try {
        await CardsService.updateCard(card);
      } catch (e) {
        console.log(e);
      }
    },

    async deleteCard(card: ICard) {
      try {
        await CardsService.deleteCard(card);
        this.getCards();
      } catch (e) {
        console.log(e);
      }
    },

    setRowCards(num: RowNumber, val: ICard[]) {
      this.rows[num].cards = val;
    },
  },
});
