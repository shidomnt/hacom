import { User } from "../../interfaces";
import { StatusEnum } from "./statusEnum.interface";

export interface UserState {
  data: User | null;
  status: StatusEnum;
}
