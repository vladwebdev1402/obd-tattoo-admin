import IIdName from "./IIdName"
import { IImage } from "./IImage";
interface Promocode {
    promocode: string;
    description: string;
    discount: number;

}
export interface IPromocode extends IIdName, Promocode  {
    image: string;
}

export interface IPromocodeImage extends IIdName, Promocode, IImage {}
