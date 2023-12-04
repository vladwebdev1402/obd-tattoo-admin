import IIdName from "./IIdName";
import { IImage } from "./IImage";

interface Service {
    description: string;
    price: {
        coin?: number;
        interest?: number;
    },
} 

export interface IService extends IIdName, Service{
    image: string;
}

export interface IServiceImage extends IIdName, Service, IImage {}