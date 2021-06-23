import { Theme } from "./theme";

export class Card {
    id!: number;
    user_id!: number;
    theme!: Theme;
    name!: string;
    title!: string;
    email!: string;
    linkedin!: string;
    phone!: string;
    adr!: string;
    img!: string;
}