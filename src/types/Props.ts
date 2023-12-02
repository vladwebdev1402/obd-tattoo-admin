import IDropdownValue from "./IDropdownValue";

export interface IDataProps {
    link?: string;
    setCurrent: (current: string) => void;
    className?: string;
    setOpen: (open: boolean) => void;
}
export interface ICreateProps {
    link?: string;
}
export interface IEditrops {
    link?: string;
    setOpen: (value: boolean) => void;
    current: string;
}

export interface ITemplateFormProps<T> {
    obj: T;
    setObj: (value: T) => void;
    submit?: () => void;
    current?: IDropdownValue | null;
    setCurrent?: (value: IDropdownValue) => void;
}