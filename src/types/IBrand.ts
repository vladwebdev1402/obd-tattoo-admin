import IIdName from "./IIdName";

export interface IBrand extends IIdName {
    image: string;
}

export interface IBrandImage extends IIdName {
    image: FormData;
}