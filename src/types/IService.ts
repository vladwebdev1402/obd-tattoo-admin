import IIdName from "./IIdName";

export default interface IService extends IIdName{
    description: string;
    price: {
        coin?: number;
        interest?: number;
    },
    image: string;
}
