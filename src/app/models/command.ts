import { Product } from "./product";

export class Command {
    $key?: string;
    id: number;
    table: number;
    productList: Product[];
    datetime: Date;
}