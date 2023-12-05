import DataContainer from "@/UI/DataContainer/DataContainer";
import ItemCard from "@/components/ItemCard/ItemCard";
import TableRow from "@/components/TableRow/TableRow";
import ItemStore from "@/store/ItemStore/ItemStore";
import { IDataProps } from "@/types/Props";
import st from "./st.module.scss";
import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { IItem } from "@/types/IItem";
import SearchStore from "@/store/SearchStore/SearchStore";
interface Props extends IDataProps {}
const Data: FC<Props> = observer(({ setOpen, setCurrent }) => {
  const getFilter = (obj: IItem) => {
    return (
      obj.name.toLowerCase().includes(SearchStore.getValue()) ||
      obj.description.toLowerCase().includes(SearchStore.getValue()) ||
      obj.brand.toLowerCase().includes(SearchStore.getValue()) ||
      obj.category.toLowerCase().includes(SearchStore.getValue()) ||
      (SearchStore.getValue() === "hot" && obj.marcers.hot) ||
      (SearchStore.getValue() === "new" && obj.marcers.new) ||
      (SearchStore.getValue() === "promotion" && obj.marcers.promotion) ||
      obj.image.toLowerCase().includes(SearchStore.getValue()) ||
      obj.count === Number(SearchStore.getValue()) ||
      obj.oldPrice === Number(SearchStore.getValue()) ||
      obj.price === Number(SearchStore.getValue()) ||
      false
    );
  };
  return (
    <DataContainer
      error={ItemStore.error}
      isLoadingComplete={ItemStore.isLoadingComplete}
      condition={0}
      className={`${st.dataContainer} ${
        ItemStore.data.filter((item) => getFilter(item)).length > 0
          ? "fr-2"
          : ""
      }`}
    >
      {ItemStore.data
        .filter((item) => getFilter(item))
        .map((item) => (
          <TableRow
            fr={1}
            isTable={false}
            key={item._id}
            onOpen={() => {
              setCurrent(item._id);
              setOpen(true);
            }}
            onDelete={() => {
              ItemStore.delete(item._id);
            }}
          >
            <ItemCard item={item} />
          </TableRow>
        ))}
    </DataContainer>
  );
});

export default Data;
