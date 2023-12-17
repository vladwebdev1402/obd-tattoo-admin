import { IContacts } from "./IContacts";
import IIdName from "./IIdName";

export interface IOrderParams {
    start: string;
    end: string;
}

export interface IBasketItem {
    basket: {
        item: {name: string};
        count: number;
    }[]
}

export interface IOrder extends IIdName, IBasketItem {
    contacts: IContacts;
    allPrice: number;
    countItems: number;
    status: {name: string};
    number: number;
}