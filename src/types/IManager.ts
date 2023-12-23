import IIdName from "./IIdName";

interface Manager {
    surname: string,
    patroname: string,
    mail: string,
    phone: string,
    viber: string,
    telegram: string,
    whatsapp:string,
    clients: string[]
}

export interface IManager extends IIdName, Manager {
    image: string,
}

export interface IManagerImage extends IIdName, Manager {
    image: FormData,
}