import { IItem } from "@/types/IItem";
import React, { FC } from "react";
import st from "./ItemCard.module.scss";
import ItemBlock from "./components/ItemBlock";
import Checkbox from "@/UI/input/checkbox/Checkbox";
interface Props {
  item: IItem;
}
const ItemCard: FC<Props> = ({ item }) => {
  return (
    <div className={st.item}>
      <div className={st.item__head}>
        <div className={st.item__img}>
          <img src={item.image} alt="" />
        </div>
        <div className={st.item__head__info}>
          <ItemBlock title={"name"}>{item.name}</ItemBlock>
          <div className={st.item__prices}>
            <ItemBlock title={"price"}>
              {item.price.toLocaleString("ru")}
            </ItemBlock>
            <ItemBlock title={"oldPrice"}>{item.oldPrice}</ItemBlock>
          </div>
          <ItemBlock title="marcers" classNameBody={st.item__marcers}>
            <Checkbox
              onChange={() => {}}
              checked={item.marcers.hot}
              title="hot"
            />
            <Checkbox
              onChange={() => {}}
              checked={item.marcers.new}
              title="new"
            />
            <Checkbox
              onChange={() => {}}
              checked={item.marcers.promotion}
              title="promotion"
            />
          </ItemBlock>
        </div>
      </div>
      <div className={st.item__body}>
        <div className={st.item__BrCaCo}>
          <ItemBlock title="brand">{item.brand}</ItemBlock>
          <ItemBlock title="category">{item.category}</ItemBlock>
          <ItemBlock title="count">{item.count}</ItemBlock>
        </div>
        <ItemBlock title="description" className={st.item__description}>
          {item.description}
        </ItemBlock>
      </div>
    </div>
  );
};

export default ItemCard;
