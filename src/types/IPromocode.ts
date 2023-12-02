import IIdName from "./IIdName"

export interface IPromocode extends IIdName  {
    promocode: string;
    description: string;
    discount: number;
    image: string;
}
