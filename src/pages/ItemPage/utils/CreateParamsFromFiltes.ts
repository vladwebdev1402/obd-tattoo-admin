import { IItemParams } from "@/types/IItem";

export const CrateParamsFromFilter = (filters: IItemParams): IItemParams => {
    const params:IItemParams = {}

    if (filters.brand) params.brand = filters.brand;
    if (filters.category) params.category = filters.category;
    if (filters.no) params.no = filters.no;
    if (filters.hot) params.hot = filters.hot;
    if (filters.news) params.news = filters.news;
    if (filters.promotion) params.promotion = filters.promotion;
    if (filters.discount) params.discount = filters.discount;

    return params;
}