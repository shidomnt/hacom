import { DiscountInfo } from "../../interfaces";
import { StatusEnum } from "./statusEnum.interface";

export interface CartState {
  status: StatusEnum;
  discountInfo: DiscountInfo | null;
}
