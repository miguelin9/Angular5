import { Product } from "./product";

export class Command {
    $key?: string;
    table?: number;
    state: boolean;
    productList: Product[];
    datetimeOpen: Date;
    datetimeClose: Date;
    comment?: string;
    tip?: number;
}