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
