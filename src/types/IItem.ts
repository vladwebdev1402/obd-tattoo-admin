import { CheckImage } from "@/utils/CheckImage";
import IIdName from "./IIdName";
import { IImage } from "./IImage";

interface Item {
  marcers: {
    new: boolean;
    hot: boolean;
    promotion: boolean;
  };
  description: string;
  price: number;
  oldPrice: number;
  count: number;
  category: string;
  brand: string;
}

export interface IItem extends IIdName, Item {
  image: string;
}

export interface IItemImage extends IIdName, Item, IImage {}

export interface IItemParams {
  limit?: number;
  name?: string;
  startPrice?: number;
  endPrice?: number;
  category?: string;
  brand?: string;
  no?: boolean;
  promotion?: boolean;
  news?: boolean;
  discount?: boolean;
  hot?: boolean;
}

export const GenerateItemImage = (): IItemImage => {
  return {
    _id: "",
    name: "",
    description: "",
    marcers: {
      hot: false,
      new: false,
      promotion: false,
    
    },
    brand: "",
    category: "",
    count: 0,
    image: new FormData(),
    oldPrice: 0,
    price: 0,
  };
};


export const GenerateItemParams = (): IItemParams => {
  return {
    limit: 500,
    name: "",
    category: "",
    brand: "",
    no: false,
    promotion: false,
    news: false,
    discount: false,
    hot: false,
  };
};


export const CheckItem = (item: IItemImage): boolean => {
  return (
    Boolean(item.name) &&
    Boolean(item.brand) &&
    Boolean(item.category) &&
    item.price > 0 &&
    CheckImage(item.image) &&
    Boolean(item.description)
  );
};

export const CheckEditItem = (item: IItemImage): boolean => {
  return (
    Boolean(item.name) &&
    Boolean(item.brand) &&
    Boolean(item.category) &&
    item.price > 0 &&
    Boolean(item.description)
  );
};
