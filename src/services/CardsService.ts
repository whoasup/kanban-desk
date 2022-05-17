import type { RowNumber } from "./../types/RowNumber";
import type { ICard } from "./../types/ICard";
import type { AxiosResponse } from "axios";
import api from "../api";

export default class CardsService {
  static async getCards(): Promise<AxiosResponse<ICard[]>> {
    return api.get("/cards/");
  }

  static async getCardsInRow(row: RowNumber): Promise<AxiosResponse<ICard[]>> {
    return api.get("/cards/", { params: { row } });
  }

  static async createCard(
    row: string,
    text: string
  ): Promise<AxiosResponse<ICard>> {
    return api.post("/cards/", { row, text });
  }

  static async updateCard(card: ICard): Promise<AxiosResponse<ICard>> {
    const { id, row, seq_num, text } = card;
    return api.patch(`/cards/${id}/`, { row, seq_num, text });
  }

  static async deleteCard(card: ICard): Promise<AxiosResponse<ICard>> {
    const { id } = card;
    return api.delete(`/cards/${id}/`);
  }
}
