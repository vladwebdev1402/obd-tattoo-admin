import IIdName from "./IIdName"
interface Promocode {
    promocode: string;
    description: string;
    discount: number;

}
export interface IPromocode extends IIdName, Promocode  {
    image: string;
}

export interface IPromocodeImage extends IIdName, Promocode {
    image: FormData;
}
