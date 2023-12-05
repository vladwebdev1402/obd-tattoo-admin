import DataContainer from "@/UI/DataContainer/DataContainer";
import ItemCard from "@/components/ItemCard/ItemCard";
import TableRow from "@/components/TableRow/TableRow";
import ItemStore from "@/store/ItemStore/ItemStore";
import { IDataProps } from "@/types/Props";
import st from "./st.module.scss";
import React, { FC } from "react";
import { observer } from "mobx-react-lite";
interface Props extends IDataProps {}
const Data: FC<Props> = observer(({ setOpen, setCurrent }) => {
  return (
    <DataContainer
      error={ItemStore.error}
      isLoadingComplete={ItemStore.isLoadingComplete}
      condition={0}
      className={`${st.dataContainer} ${
        ItemStore.data.length > 0 ? "fr-2" : ""
      }`}
    >
      {ItemStore.data.map((item) => (
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
