import DataContainer from "@/UI/DataContainer/DataContainer";
import TableRow from "@/components/TableRow/TableRow";
import BrandStore from "@/store/BrandStore/BrandStore";
import SearchStore from "@/store/SearchStore/SearchStore";
import IBrand from "@/types/IBrand";
import { observer } from "mobx-react-lite";
import React, { FC } from "react";

interface Props {
  setOpen: (value: boolean) => void;
  setCurrent: (value: string) => void;
}
const Data: FC<Props> = observer(({ setOpen, setCurrent }) => {
  const getFilter = (obj: IBrand): boolean => {
    return (
      obj.name.toLowerCase().includes(SearchStore.getValue()) ||
      obj.image.toLowerCase().includes(SearchStore.getValue()) ||
      obj._id.toLowerCase().includes(SearchStore.getValue()) ||
      false
    );
  };

  return (
    <DataContainer
      isLoadingComplete={BrandStore.isLoadingComplete}
      error={BrandStore.error}
    >
      <TableRow fr={3} isTitle>
        <div>_id</div>
        <div>image</div>
        <div>name</div>
      </TableRow>
      {BrandStore.data
        .filter((b) => getFilter(b))
        .map((b) => (
          <TableRow
            key={b._id}
            fr={3}
            onOpen={() => {
              setOpen(true);
              setCurrent(b._id);
            }}
            onDelete={() => BrandStore.delete(b._id)}
          >
            <div>{b._id}</div>
            <div>{b.image}</div>
            <div>{b.name}</div>
          </TableRow>
        ))}
    </DataContainer>
  );
});
export default Data;
