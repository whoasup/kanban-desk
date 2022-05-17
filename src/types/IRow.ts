import type { ICard } from "./ICard";
import type { RowNumber } from "./RowNumber";
export interface IRow {
  title: string;
  number: RowNumber;
  cards: ICard[];
}
