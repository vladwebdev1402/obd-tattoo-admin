import DataContainer from "@/UI/DataContainer/DataContainer";
import TableRow from "@/components/TableRow/TableRow";
import PromocodeStore from "@/store/PromocodeStore/PromocodeStore";
import SearchStore from "@/store/SearchStore/SearchStore";
import { IPromocode } from "@/types/IPromocode";
import { observer } from "mobx-react-lite";
import React, { FC } from "react";

interface Props {
  setCurrent: (value: string) => void;
  setOpen(value: boolean): void;
}

const Data: FC<Props> = observer(({ setCurrent, setOpen }) => {
  const getFilter = (obj: IPromocode) => {
    return (
      obj.name.toLowerCase().includes(SearchStore.getValue()) ||
      obj._id.toLowerCase().includes(SearchStore.getValue()) ||
      obj.description.toLowerCase().includes(SearchStore.getValue()) ||
      obj.discount.toString().toLowerCase().includes(SearchStore.getValue()) ||
      obj.promocode.toLowerCase().includes(SearchStore.getValue()) ||
      false
    );
  };

  return (
    <DataContainer
      isLoadingComplete={PromocodeStore.isLoadingComplete}
      error={PromocodeStore.error}
    >
      <TableRow fr={5} isTitle>
        <div>_id</div>
        <div>promocode</div>
        <div>description</div>
        <div>discount</div>
        <div>image</div>
      </TableRow>

      {PromocodeStore.data
        .filter((p) => getFilter(p))
        .map((p) => (
          <TableRow
            fr={5}
            key={p._id}
            onOpen={() => {
              setCurrent(p._id);
              setOpen(true);
            }}
            onDelete={() => PromocodeStore.delete(p._id)}
          >
            <div>{p._id}</div>
            <div>{p.promocode}</div>
            <div>{p.description}</div>
            <div>{p.discount}</div>
            <div>{p.image}</div>
          </TableRow>
        ))}
    </DataContainer>
  );
});

export default Data;
