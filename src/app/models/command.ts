import { Product } from "./product";

export class Command {
    $key?: string;
    table: number;
    state: boolean;
    productList: Product[];
    datetimeOpen: string;
    datetimeClose: string;
    comment?: string;
    tip?: number;
    total: number;
    pay: boolean;
}